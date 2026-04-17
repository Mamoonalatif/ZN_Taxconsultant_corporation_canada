import React from 'react';

const LocationInfo = ({ name, address, phone }) => {
    return (
        <div className="location-info-card">
            <h3>Conveniently located in <strong>{name}</strong></h3>
            <p><em>{address}</em></p>
            <h3><a href={`tel:${phone.replace(/\D/g, '')}`}><strong>{phone}</strong></a></h3>
        </div>
    );
};

export default LocationInfo;