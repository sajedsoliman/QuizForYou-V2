import { configureStore } from '@reduxjs/toolkit'

// Reducers
import quizReducer from './quiz'

const store = configureStore({
    reducer: {
        quiz: quizReducer
    },
})

export default store
