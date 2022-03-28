export function updateLang (state, data) {
  state.lang = data
}

export function updateHeaderTitle (state, data) {
  let title = state.appName
  if (data) {
    title = data
  }
  state.headerTitle = title
}

export function updateQuizLeftDrawer (state, data) {
  state.quizLeftDrawer = data
}
