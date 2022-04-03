import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
//store 생성 + Devtools extension 기능 추가
export const store = configureStore({
  reducer: {
      counter: counterReducer
  },
})
