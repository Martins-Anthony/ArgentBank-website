import PropTypes from 'prop-types'

function Feature({ cover, alt, title, text }) {
  return (
    <div className="feature-item">
      <img src={cover} alt={alt} className="feature-icon" width={'6.25rem'} height={'100px'} />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

Feature.propTypes = {
  cover: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Feature
