<template>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
    <!-- NeedleBot, rendered by the NeedleTails Chat web client (chat.needletails.com/embed) in an iframe -->
    <Transition name="chat-panel">
      <div
        v-show="isOpen"
        id="needlebot-panel"
        class="chat-panel overflow-hidden rounded-2xl border border-blue-500/40 bg-[rgb(18,18,18)] shadow-[0_0_30px_rgba(59,130,246,0.25)]"
        role="dialog"
        :aria-label="t('chatWidgetTitle')"
      >
        <iframe
          v-if="hasOpened"
          :src="embedUrl"
          :title="t('chatWidgetTitle')"
          class="h-full w-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          referrerpolicy="strict-origin"
        />
      </div>
    </Transition>

    <button
      type="button"
      class="flex h-14 w-14 items-center justify-center rounded-full border border-blue-300/60 bg-blue-600 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-500 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      :aria-label="isOpen ? t('chatWidgetClose') : t('chatWidgetOpen')"
      :aria-expanded="isOpen"
      aria-controls="needlebot-panel"
      @click="toggle"
    >
      <svg v-if="!isOpen" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
      <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { chatUrl } = useChatLinks()

const isOpen = ref(false)
// The iframe loads on first open only, so visitors who never open it never contact the chat server.
const hasOpened = ref(false)

const embedUrl = computed(() => `${chatUrl.value}/embed`)

const toggle = (): void => {
  isOpen.value = !isOpen.value
  if (isOpen.value) hasOpened.value = true
}

const onKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && isOpen.value) isOpen.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.chat-panel {
  width: min(380px, calc(100vw - 2rem));
  height: min(580px, calc(100dvh - 7rem));
}

.chat-panel-enter-active,
.chat-panel-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.chat-panel-enter-from,
.chat-panel-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}
</style>
