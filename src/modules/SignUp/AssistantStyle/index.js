import React, { useState } from 'react';

import AppColorCircle from '../../../components/AppColorCircle';

import './index.scss';


const colors = [
	{ id: '1', color: 'blue' },
	{ id: '2', color: 'green' },
	{ id: '3', color: 'orange' },
	{ id: '4', color: 'red' },
	{ id: '5', color: 'purple' },
	{ id: '6', color: 'purple-light' },
	{ id: '7', color: 'blue-light' },
];

const defaultColor = colors[0];

// eslint-disable-next-line no-undef
const images = require.context('../../../assets/logos', true);

function AssistantStyle() {
	const [icon, setIcon] = useState('female');
	const [color, setColor] = useState(defaultColor);
    
	const handleSelectColor = (item) => setColor(item);
	const handleClickFemale = () => setIcon('female');
	const handleClickMale = () => setIcon('male');

	const generateFileName = (gender) => {
		let fileName = gender;
		if (icon === gender) fileName += '-selected';
		fileName += `-${color.id}`;
		return fileName;
	};

	const getIconImage = (gender) => {
		const fileName = '' + generateFileName(gender);
		let iconImg = images('./' + fileName + '.svg');
		return iconImg.default;
	};

	return (
		<div className="assistant-style__container">
			<div className="body">
				<div className="icon-section">
					<h3>Select Hoory&apos;s icon</h3>
					<div className="icons">
						<div role="button" onClick={handleClickFemale}>
							<img src={getIconImage('female')} alt="Female" />
						</div>
						<div role="button" onClick={handleClickMale}>
							<img src={getIconImage('male')} alt="Male" />
						</div>
					</div>
				</div>
				<div className="color-section">
					<h3>Select color scheme</h3>
					<div className="colors">
						{ colors.map((item) => (
							<AppColorCircle
								key={item.id}
								handleSelectColor={handleSelectColor}
								selected={color.color === item.color}
								item={item}
							/>
						)) }
					</div>
				</div>
			</div>
		</div>
	);
}

export default AssistantStyle;
