/** Where NeedleTails Chat lives (its landing page, and /embed for the bot widget). Set NUXT_PUBLIC_CHAT_URL to change it. */
export const useChatLinks = () => {
  const config = useRuntimeConfig()
  const chatUrl = computed(() => String(config.public.chatUrl || 'https://chat.needletails.com').replace(/\/+$/, ''))
  return { chatUrl }
}
