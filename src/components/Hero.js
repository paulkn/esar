import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, image }) => (
  <div
    className="full-width-image-container margin-top-0"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
    }}
  >
    <h1
      className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
      style={{
        boxShadow:
          'rgba(43, 31, 91, .64) 0.5rem 0px 0px, rgba(43, 31, 91, .64) -0.5rem 0px 0px',
        backgroundColor: 'rgba(43, 31, 91, .64)',
        color: 'white',
        lineHeight: '1',
        padding: '0.25em',
        margin: '2em 0 0',
      }}
    >
      {title}
    </h1>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Hero