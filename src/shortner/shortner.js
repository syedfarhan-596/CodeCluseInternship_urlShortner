import { useState } from 'react'
import './shortner.css'
const Shortner = (props) => {
    const [inputValueField, setInputValueField] = useState('')
    
    const handleClick = () => {
        props.setInputValue(inputValueField)
        setInputValueField('')
    }
    return(
        <div className='field'>
            <div className="container ">
    <input type="checkbox" id="signup_toggle" />
    <form className="form">
        <div className="form_front d-flex ">
            <input value={inputValueField} onChange={e => setInputValueField(e.target.value)} placeholder="Enter URL to shorten" className="input" type="text" />
            <button type="button" className="btn" onClick={handleClick} >Short It</button>
            
        </div>
    </form>
</div>
        </div>
    )
}

export default Shortner;