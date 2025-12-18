import './App.css'
import { getModuleType } from 'my-lib'

function App() {

  return (
    <>
        <div>The imported `my-lib` module type is: {getModuleType()}</div>
    </>
  )
}

export default App
