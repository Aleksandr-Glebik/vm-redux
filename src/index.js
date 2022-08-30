import './styles.css'
import { createStore, applyMiddleware } from 'redux'
// import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer'
// import { INCREMENT, DECREMENT } from './redux/types'
import { asyncIncrement, decrement, increment, changeTheme } from './redux/actions'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// function logger(state) {
//   return function(next) {
//     return function(action) {
//       console.log('state', state.getState())
//       console.log('action', action)
//       return next(action)
//     }
//   }
// }

const store = createStore(
   rootReducer,
   applyMiddleware(thunk, logger)
)

// window.store = store

addBtn.addEventListener('click', () => {
//  store.dispatch({ type: INCREMENT})
 store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  // store.dispatch({ type: DECREMENT})
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})





themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark')
  const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
  store.dispatch(changeTheme(newTheme))
})

// store.subscribe(() => console.log(store.getState()))
store.subscribe(() => {
  const state = store.getState()
  // console.log('state', state);

  counter.textContent = state.counter
  document.body.className = state.theme.value;
  [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => {
    btn.disabled = state.theme.disabled
  })
})

store.dispatch( {type: 'INIT_APPLICATION'})






