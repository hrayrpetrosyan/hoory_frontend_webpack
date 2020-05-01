import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { resetProfileInfo } from '../../../modules/Profile/actions';
import { profileFirstNameSelector, profileLastNameSelector, profileEmailSelector } from '../../../modules/Profile/selector';

import logoutIconImg from '../../../assets/Shape.svg';
import './index.scss';

function Toolbar() {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => profileFirstNameSelector(state));
    const lastName = useSelector((state) => profileLastNameSelector(state));
    const email = useSelector((state) => profileEmailSelector(state));

    const handleClickLogout = () => dispatch(resetProfileInfo());

    return (
        <header className="toolbar__container">
            <div className="profile-info">
                <h3>{`${firstName} ${lastName}`}</h3>
                <h5 className="email">{ email }</h5>
            </div>
            <div className="logout-button-container">
                <button className="logout-button" type="button" onClick={handleClickLogout}>
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
