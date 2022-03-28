import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import AppLayout from './AppLayout'
import Exam5 from './Exam5'
import Exam4 from './Exam4'
import Exam3 from './Exam3'
import Exam2 from './Exam2'
import Exam1 from './Exam1'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      AppLayout,
      Exam5,
      Exam4,
      Exam3,
      Exam2,
      Exam1
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
