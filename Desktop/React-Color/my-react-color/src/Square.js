function Square ({ colorValue, hexaValue, isDarkText }) {
  return (
    <section
      className='square'
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#FFF'
      }}
    >
      <p>{colorValue ? colorValue : 'Empty Value'}</p>
      <p> {hexaValue ? hexaValue : null} </p>
    </section>
  )
}

Square.defaultProps = {
  colorValue: 'Empty Color Value'
}
export default Square
