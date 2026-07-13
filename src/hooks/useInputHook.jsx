import { useState } from "react"

const useInputHook = (defaultValue) => {
    const [inputField, setInputField] = useState(defaultValue)

    const handleInputField = (e) => {
        setInputField(e.target.value)
    }
    return [inputField, handleInputField]

}
export default useInputHook;