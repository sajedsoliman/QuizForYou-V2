import React, { useContext } from 'react'
import useLocalStorage from '../common-components/hooks/useLocalStorage'
import { SAVED_QUESTIONS } from '../helpers/info'

const ArchivedQuestionsContext = React.createContext()
const UpdateArchivedQuestionsContext = React.createContext()

export function ArchivedQuestions() {
    return useContext(ArchivedQuestionsContext)
}
export function SetArchivedQuestions() {
    return useContext(UpdateArchivedQuestionsContext)
}

function ArchivedQuestionsProvider({ children }) {

    // Get archived questions from localStorage to check if the current question has archived or not
    const [archivedQuestions, setArchivedQuestions] = useLocalStorage([], SAVED_QUESTIONS)

    return (
        <ArchivedQuestionsContext.Provider value={archivedQuestions}>
            <UpdateArchivedQuestionsContext.Provider value={setArchivedQuestions}>
                {children}
            </UpdateArchivedQuestionsContext.Provider>
        </ArchivedQuestionsContext.Provider>
    )
}

export default ArchivedQuestionsProvider
