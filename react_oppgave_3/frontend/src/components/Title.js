import React from 'react'

function Title( {text, testid}) {
  return (
    // Lite brukt, men forstår at det er gunstig å ha hvis det er en tekst som er lik på flere steder/sider.
    <h2 data-testid={testid}  className='title'>{text}</h2>
  )
}

export default Title