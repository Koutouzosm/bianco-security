import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title">Contact Information</h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <div>
                    <a href="tel: 1-856-692-4444">1-856-692-4444</a>
                </div>
                <div>
                    <a href='mailto: Kathleen@biancosecurity.com'>Email Us</a>
                </div>
                <p className="card-text"></p>
            </div>
        </div>
    );
};

export default Card;

