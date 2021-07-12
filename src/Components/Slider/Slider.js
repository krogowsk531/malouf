const Slider = ({ photo }) => {
  const styles = {
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div className='image-slide' style={styles}></div>
  )
}