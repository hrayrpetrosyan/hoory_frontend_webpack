/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './index.scss';

function AppColorCircle({ item, handleSelectColor, selected }) {
    const handleClick = () => handleSelectColor(item);

    const bodyClassName = selected ? `body_${item.color}` : '';
    return (
        <div className="app-color-circle__container">
            <div className={`body ${bodyClassName}`}>
                <div
                    className={`circle circle_${item.color}`}
                    role="button"
                    aria-label="select-color"
                    onClick={handleClick}
                    tabIndex={0}
                />
            </div>
        </div>
    );
}

export default React.memo(AppColorCircle);
