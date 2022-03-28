export function lang (state) {
  return state.lang
}

export function langOptions (state) {
  return state.langOptions
}

export function appName (state) {
  return state.appName
}

export function headerTitle (state) {
  return state.headerTitle
}

export function quizLeftDrawer (state) {
  return state.quizLeftDrawer
}

export function env (state) {
  return state.env
}

export function baseApi (state) {
  if (state.env === 'production') {
    return 'http://www.matiaan.com/app'
  } else {
    return '/matiaan/app'
  }
}
