import { useEffect, useState } from "react"

// Get the current value inside the localStorage if any and if nothing set the given one
function getInitialValues(initialValues, key) {
    const storedValue = JSON.parse(localStorage.getItem(key))
    if (storedValue == null || storedValue == undefined) return initialValues

    return storedValue
}

function useLocalStorage(initialValue, key) {

    const [value, setValue] = useState(getInitialValues(initialValue, key))

    // Set a listener to save changes in the localStorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default useLocalStorage
