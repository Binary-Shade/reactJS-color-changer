import React from 'react'
import './index.css'

const Input = ({color, setColor, flag, setFlag, setHexValue,hexColor}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="color">Add color name:</label>
        <input type="text"
            placeholder='color name'
            required
            autoFocus
            value={color}
            onChange={(e)=>{setColor(e.target.value)
                            setHexValue(hexColor(e.target.value))
            }}
        />
        <button 
            type='button'
            onClick={()=>setFlag(!flag)}
        >
            Toggle Text color
        </button>
    </form>
  )
}

export default Input