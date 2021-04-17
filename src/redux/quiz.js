import { createSlice } from "@reduxjs/toolkit"

const API_LINK = "https://quizapi.io/api/v1/questions?apiKey=5Fo5rEry35dmnopeWQPulfwzSSlBt9WZE9OhQRUT"

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questions: [],
        category: "Sports",
        limit: 10,
        difficulty: "Easy"
    },
    reducers: {
        getQuestions: async (state) => {
            // Destructuring through state
            const { limit, difficulty, category } = state

            // Fetch the filtered questions from the api
            const req = await fetch(`${API_LINK}&category=${category}&limit=${limit}&difficulty=${difficulty}`)
            const data = await req.json()

            state.questions = await data
        },
        changeControl: (state, { payload }) => {
            state[payload.target.name] = payload.target.value
        }
    },
})

// Extract the action creators object and the reducer
const { actions, reducer } = quizSlice
// Extract and export each action creator by name
export const { getQuestions, changeControl } = actions
// Export the reducer, either as a default or named export
export default reducer