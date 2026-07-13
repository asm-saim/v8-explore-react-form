import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import FormAction from './components/FormAction/FormAction'
import ControlledForm from './components/ControlledForm/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm'
import HookForm from './components/HookForm/HookForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <UncontrolledForm></UncontrolledForm> */}
      <HookForm></HookForm>
    </>
  )
}

export default App
