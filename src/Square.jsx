import React from 'react'

const Square = ({color, flag, hexValue}) => {
  return (
    <section
        className='square'
        style={{backgroundColor: color, color: flag ? '#000' : '#fff'}}
    >
        <p>{color ? color : ''}</p>
        <p>{hexValue ? hexValue : ''}</p>

    </section>
  )
}

export default Square