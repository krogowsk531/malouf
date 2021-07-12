const Arrow = ({ direction, clickFunction, character }) => (
  <div 
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    {character}
  </div>
)