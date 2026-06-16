import de from '../../../../i18n/locales/de.json'
import en from '../../../../i18n/locales/en.json'
import es from '../../../../i18n/locales/es.json'
import fr from '../../../../i18n/locales/fr.json'
import he from '../../../../i18n/locales/he.json'
import it from '../../../../i18n/locales/it.json'
import ja from '../../../../i18n/locales/ja.json'
import ko from '../../../../i18n/locales/ko.json'
import nl from '../../../../i18n/locales/nl.json'
import pt from '../../../../i18n/locales/pt.json'
import tr from '../../../../i18n/locales/tr.json'
import zhCN from '../../../../i18n/locales/zh-cn.json'
import zhTW from '../../../../i18n/locales/zh-tw.json'

const localeMessages = {
  de,
  en,
  es,
  fr,
  he,
  it,
  ja,
  ko,
  nl,
  pt,
  tr,
  'zh-cn': zhCN,
  'zh-tw': zhTW
} as const

export default defineEventHandler((event) => {
  const locale = getRouterParam(event, 'locale')

  if (!locale || !(locale in localeMessages)) {
    throw createError({
      statusCode: 404,
      statusMessage: `Locale '${locale ?? 'unknown'}' not found.`
    })
  }

  return {
    [locale]: localeMessages[locale as keyof typeof localeMessages]
  }
})
