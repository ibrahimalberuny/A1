import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
    return (
    <>
      <footer className="row text-center my-auto text-uppercase">
        <div className="py-3 d-none d-sm-block block col-sm-4 bg-danger">
          <Link to="/" className="w-full text-danger" alt="Link Home">
          <i className='d-none'>Home Page</i>
            <img
              src="/images/footer-logo.png"
              alt="Logo La Celestina"
              width={80}
              height={80}
              placeholder="DOMINANT_COLOR"
              loading="lazy"
              quality="80" 
            />
            </Link>
        </div>
        <div className="row col-12 col-sm-8 bg-info">
          <div className="pt-3 row align-items-center">
            <div className="d-none d-md-block col-md-4">
            </div>
            <p className="text-white col-md-8">
              &copy; 2016 - {new Date().getFullYear()}&nbsp;
              Copyright - La Celestina
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
