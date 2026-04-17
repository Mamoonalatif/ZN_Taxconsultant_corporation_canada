import React from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../../assets/images/white-bg.jpg';

const OtherLocations = ({ currentLocation }) => {
    const locations = [
        { name: 'Mechanicsburg', path: '/mechanicsburg' },
        { name: 'Myerstown', path: '/myerstown' },
        { name: 'Harrisburg', path: '/harrisburg' },
        { name: 'Lancaster', path: '/lancaster' }
    ];

    const filteredLocations = locations.filter(loc => loc.name.toLowerCase() !== currentLocation.toLowerCase());

    return (
        <div className="other-locations-section alignfull has-parallax" style={{ position: 'relative', overflow: 'hidden' }}>
            <div
                className="wp-block-cover__image-background has-parallax"
                style={{ backgroundImage: `url(${whiteBg})`, backgroundPosition: '50% 50%', backgroundAttachment: 'fixed', opacity: 1, zIndex: 0 }}
            ></div>
            <span aria-hidden="true" className="wp-block-cover__background" style={{ backgroundColor: '#111827', opacity: 0.9, zIndex: 1 }}></span>
            <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                <h2>Four More Locations to Serve Your Business</h2>
                <p>
                    Are you ready to have better tax planning, accounting, or bookkeeping experiences?
                    Is your business outside of the {currentLocation} area? You're in luck! We have
                    four more locations to serve you in {filteredLocations.map((loc, i) => (
                        <React.Fragment key={loc.path}>
                            <Link to={loc.path}>{loc.name}</Link>
                            {i < filteredLocations.length - 1 ? (i === filteredLocations.length - 2 ? ', and ' : ', ') : ''}
                        </React.Fragment>
                    ))}.
                </p>
                <p><strong>Let's schedule a consultation with the office near you today!</strong></p>
                <div className="wp-block-buttons" style={{ justifyContent: 'center', marginTop: '30px' }}>
                    <div className="wp-block-button">
                        <Link className="wp-block-button__link" to="/schedule">Book A Consultation</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherLocations;
