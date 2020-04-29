import React from 'react';

import logoutIconImg from '../../../assets/Shape.svg';
import './index.scss';

function Toolbar() {
    return (
        <header className="toolbar__container">
            <div className="profile-info">
                <h3>Name Surname</h3>
                <h5 className="email">email@email.com</h5>
            </div>
            <div className="logout-button-container">
                <button className="logout-button" type="button">
                    <div>Logout</div>
                    <div>
                        <img src={logoutIconImg} alt="Logout" />
                    </div>
                </button>
            </div>
        </header>
    );
}

export default Toolbar;
