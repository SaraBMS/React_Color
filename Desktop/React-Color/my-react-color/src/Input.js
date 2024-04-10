import colorNames from 'colornames'
function Input ({
  colorValue,
  setColorValue,
  setHexaValue,
  isDarkText,
  setIsDarkText
}) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label> Add color name:</label>
      <input
        autoFocus
        type='text'
        placeholder='Add color name:'
        required
        value={colorValue}
        onChange={e => {
          setColorValue(e.target.value)
          setHexaValue(colorNames(e.target.value))
        }}
      />
      <button type='button' onClick={() => setIsDarkText(!isDarkText)}>
        <span> Toggle text color</span>
      </button>
    </form>
  )
}

export default Input
