import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const Banner = (props) => {
    return (
        <>
                <div className="banner" style={{ backgroundImage: `url(${props.background})` }}>
                    <h1 className='bannerTitre text-warning'>{props.titre}</h1>
                    {/* <FontAwesomeIcon icon={faAngleRight} size="2x"/> */}
                </div> 
        </>
    );
}

export default Banner;
