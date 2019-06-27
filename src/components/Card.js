import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title">Bianco Security</h5>
                <h6 className="card-subtitle mb-2 text-muted">Contact Info</h6>
                <div>
                    <a href="tel: 1-856-692-4444">Call</a>
                </div>
                <div>
                    <a href='mailto: Kathleen@biancosecurity.com'>Email</a>
                </div>
                <p className="card-text"></p>
            </div>
        </div>
    );
};

export default Card;