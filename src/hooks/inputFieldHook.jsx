import { useState } from "react"

const inputField = () => {
    const [inputField, setInputField] = useState('')

    const handleInputField = (e) => {
        setInputField(e.target.value)
    }
    return [inputField, handleInputField]

}
export default inputField