import './App.css';
import Shortner from './shortner/shortner';
import Header from './header/header'
import Result from './result'
import { useState, } from 'react'
function App() {
  const [inputValue,setInputValue] = useState('')
  return(
    <>
       <Header />
       <Result inputValue={inputValue} />
      <div>
        <Shortner setInputValue={setInputValue} />
      </div>
      
      </>
  )
}

export default App;
