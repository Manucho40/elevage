import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import background from "../assets/img/bg-7.jpg"
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const Banner = (props) => {
    return (
        <div>
            <div className="banner" style={{ backgroundImage: `url(${background})` }}>
                <h1 className='bannerTitre'>{props.titre}</h1>
                {/* <FontAwesomeIcon icon={faAngleRight} size="2x"/> */}
            </div> 
        </div>
    );
}

export default Banner;
