import Square from './Square'
import Input from './Input'
import { useState } from 'react'

function App () {
  const [colorValue, setColorValue] = useState('')
  const [hexaValue, setHexaValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className='App'>
      <Square
        colorValue={colorValue}
        hexaValue={hexaValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexaValue={setHexaValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  )
}

export default App
