import React from 'react';

import googleIconImg from '../../assets/google_icon.svg';
import './index.scss';

function AppGoogleButton() {
    return (
        <div className="app-google-button__container">
            <button className="google-button" type="button">
                <div className="button-container">
                    <div>
                        <img src={googleIconImg} alt="Google" />
                    </div>
                    <div>
                        Sign Up with Google
                    </div>
                </div>
            </button>
        </div>
    );
}

export default React.memo(AppGoogleButton);
