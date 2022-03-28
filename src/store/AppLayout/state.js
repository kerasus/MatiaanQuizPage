import languages from 'quasar/lang/index.json'
const appLanguages = languages.filter(lang =>
  ['fa', 'en-us'].includes(lang.isoName)
)

export default function () {
  return {
    env: 'production', // production - development
    appName: 'متیان',
    headerTitle: 'متیان',
    quizLeftDrawer: false,
    headerWithBackground: false,
    headerTitleCentered: false,
    headerShowTitle: true,
    headerShowBtnSearch: true,
    headerShowBtnBack: false,
    headerShowBtnShare: false,
    headerIsUserProfile: false,
    lang: 'fa',
    langOptions: appLanguages.map(lang => ({
      label: lang.nativeName, value: lang.isoName
    }))
  }
}
