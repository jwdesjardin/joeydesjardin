import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
	return (
		<Row>
			<Col sm={6}>
				<h2>About me</h2>
				<p>this is a paragraph description about me ...</p>
			</Col>
			<Col sm={6}>
				<Image
					src='/profile-square.jpg'
					style={{ width: '130px', height: '130px' }}
					rounded
				/>
			</Col>
		</Row>
	);
};

export default AboutMe;
