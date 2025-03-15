import React from 'react';
import { Link } from 'gatsby'



const Card = ({ img, text, url }) => {
    
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="m-auto profile-card" style={{ maxWidth: '320px' }}>
      <Link to={url} style={{ textDecoration: 'none' }}> <div className="card p-2">
           <img src={img} className="card-img-top" alt="Card Image"  width={320}
                  height={225}/> 
            <div className="card-body">
                <h5 className="card-title text-dark text-center" ><strong>{text}</strong></h5>
                           
            </div>
        </div></Link>
        </div>
        </div>
    );
}

export default Card;