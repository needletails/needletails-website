<template>
  <section class="py-16 bg-gray-900/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          {{ t('frequentlyAskedQuestions') }}
        </h2>
        <p class="text-lg text-gray-300">
          {{ t('faqDescription') }}
        </p>
      </div>
      
      <div class="space-y-6">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors duration-200 focus:outline-none"
            :class="{ 'focus:ring-0': openFaqs[index] }"
            :aria-expanded="openFaqs[index]"
            :aria-controls="`faq-${index}`"
          >
            <h3 class="text-lg font-semibold text-white">
              {{ faq.question }}
            </h3>
            <svg 
              class="w-5 h-5 text-gray-400 transition-transform duration-200"
              :class="{ 'rotate-180': openFaqs[index] }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            :id="`faq-${index}`"
            class="px-6 pb-4"
            :class="{ 'hidden': !openFaqs[index] }"
          >
            <p class="text-gray-300 leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: t('faqTechnologies'),
    answer: t('faqTechnologiesAnswer')
  },
  {
    question: t('faqTimeline'),
    answer: t('faqTimelineAnswer')
  },
  {
    question: t('faqSupport'),
    answer: t('faqSupportAnswer')
  },
  {
    question: t('faqProcess'),
    answer: t('faqProcessAnswer')
  },
  {
    question: t('faqIntegration'),
    answer: t('faqIntegrationAnswer')
  },
  {
    question: t('faqSecurity'),
    answer: t('faqSecurityAnswer')
  }
];

const openFaqs = ref<boolean[]>(new Array(faqs.length).fill(false));

const toggleFaq = (index: number) => {
  openFaqs.value[index] = !openFaqs.value[index];
};

// FAQ Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    }
  ]
});
</script> 