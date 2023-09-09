import Loader from './loader/loader'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react'
const Result = (props) => {
    const {inputValue} = props
    const url = `https://api.shrtco.de/v2/shorten?url=${inputValue}`
    const [isLoading,setIsLoading] = useState(false)
    const [copied, setCopied] = useState(false);
    const [value,setValue] = useState('')
    const getShortner = async() => {
        setIsLoading(true)
        try{
          const shortner = await fetch(url)
          const shortnerData = await shortner.json()
          setIsLoading(false)
          setValue(shortnerData.result)
        } catch(error){
          setIsLoading(true)
        }
      }
      useEffect(()=>{
        if(inputValue.length){
          getShortner()
        }
      },[inputValue.length])
      if(isLoading){
        return(
          <Loader />
        )
      }
    return(
        <>
        {
            value && (

            <div className="p-2 m-2 text-center text-muted">
                <div className="d-flex justify-content-evenly">
                    <h3>{value.short_link}</h3>
                    <CopyToClipboard text={value.short_link} onCopy={() => setCopied(true)} > 
                        <button className="button rounded-circle">{copied?'copied':'Copy'} </button>
                    </CopyToClipboard>
                </div>
                <hr></hr>
                <p>Original link :-{value.original_link}</p>
            </div>   
            )
        }
        </>
        
    )
}
export default Result;