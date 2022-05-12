import React from 'react'

function Title( {text, testid}) {
  return (
    // Forstår at det er gunstig å ha hvis det er en tekst som er lik på flere steder/sider.
    <h2 data-testid={testid}  className='title'>{text}</h2>
  )
}

export default Title