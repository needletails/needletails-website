export default defineNuxtPlugin(() => {
  // Only run on client side
  if (process.server) return



  let musicIframe: HTMLIFrameElement | null = null
  let mobileMusicIframe: HTMLIFrameElement | null = null

  const createMusicPlayer = () => {
    // Create desktop music player - compact and collapsible
    const desktopContainer = document.createElement('div')
    desktopContainer.className = 'fixed bottom-6 left-6 z-40 hidden lg:block'
    desktopContainer.innerHTML = `
      <div class="group relative">
        <!-- Collapsed state (default) -->
        <div class="music-player-collapsed bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20 cursor-pointer hover:bg-black/90 transition-all duration-300">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        
        <!-- Expanded state -->
        <div class="music-player-expanded absolute bottom-0 left-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/30">
            <div class="p-3 pb-2 border-b border-gray-200/50">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-800">Now Playing</span>
                <button class="music-player-close text-gray-500 hover:text-gray-700 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameborder="0"
              height="200"
              width="600"
              style="overflow: hidden; width: 600px;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/playlist/chillhop-radio/pl.0b8321c00f68421f8081e5913de51118?app=music&at=1000lQel&ct=web_player"
            ></iframe>
          </div>
        </div>
      </div>
    `
    musicIframe = desktopContainer.querySelector('iframe') as HTMLIFrameElement

    // Create mobile music player - compact floating button
    const mobileContainer = document.createElement('div')
    mobileContainer.className = 'fixed bottom-6 right-6 z-40 lg:hidden'
    mobileContainer.innerHTML = `
      <div class="group relative">
        <!-- Floating button -->
        <div class="music-player-mobile bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20 cursor-pointer hover:bg-black/90 transition-all duration-300">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        
        <!-- Expanded state for mobile -->
        <div class="music-player-mobile-expanded absolute bottom-0 right-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/30">
            <div class="p-3 pb-2 border-b border-gray-200/50">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-800">Music</span>
                <button class="music-player-mobile-close text-gray-500 hover:text-gray-700 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameborder="0"
              height="160"
              width="500"
              style="overflow: hidden; width: 500px;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/playlist/chillhop-radio/pl.0b8321c00f68421f8081e5913de51118?app=music&at=1000lQel&ct=web_player"
            ></iframe>
          </div>
        </div>
      </div>
    `
    mobileMusicIframe = mobileContainer.querySelector('iframe') as HTMLIFrameElement

    // Add click handlers for close buttons
    setTimeout(() => {
      const closeButtons = document.querySelectorAll('.music-player-close, .music-player-mobile-close')
      closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation()
          const container = button.closest('.group')
          if (container) {
            container.classList.remove('hover:opacity-100', 'hover:pointer-events-auto', 'hover:translate-y-0')
            container.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2')
          }
        })
      })


    }, 100)

    // Append directly to body - this ensures they persist across all route changes
    document.body.appendChild(desktopContainer)
    document.body.appendChild(mobileContainer)
  }

  // Wait for the app to be fully mounted and hydrated
  const waitForAppReady = () => {
    // Check if Nuxt app is ready by looking for specific elements
    if (document.querySelector('footer') && !document.querySelector('[data-v-ssr]')) {
      // App is hydrated, inject music players
      setTimeout(createMusicPlayer, 200)
    } else {
      // Try again after a short delay
      setTimeout(waitForAppReady, 100)
    }
  }

  // Start waiting for app to be ready
  waitForAppReady()

  // Handle responsive behavior
  const handleResize = () => {
    const desktopPlayer = document.querySelector('.fixed.bottom-6.left-6')
    const mobilePlayer = document.querySelector('.fixed.bottom-6.right-6')
    
    if (window.innerWidth >= 1024) { // lg breakpoint
      desktopPlayer?.classList.remove('hidden')
      mobilePlayer?.classList.add('lg:hidden')
    } else {
      desktopPlayer?.classList.add('hidden')
      mobilePlayer?.classList.remove('lg:hidden')
    }
  }

  window.addEventListener('resize', handleResize)
  handleResize() // Initial call
}) 