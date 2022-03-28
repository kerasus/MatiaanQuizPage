export function timer (state) {
  return state.timer
}

// export function questionCount (state) {
//   return state.questionCount
// }

// export function choiceCount (state) {
//   return state.choiceCount
// }
//
// export function examSrc (state) {
//   return state.examSrc
// }
//
//
// export function remainingTimeInSecond (state) {
//   return state.remainingTimeInSecond
// }


// export function formattedTimer (state) {
//   const hour = Math.floor(state.timer / 3600)
//   const min = Math.floor((state.timer - (hour * 3600)) / 60)
//   const sec = (state.timer % 60)
//   const hourString = (hour > 0) ? (hour.toString() + ':') : ''
//   const timer = hourString + min.toString() + ':' + sec.toString()
//   return timer
// }
//
// export function participating (state) {
//   return state.remainingTimeInSecond > 0 & state.userAnswer === null
// }
