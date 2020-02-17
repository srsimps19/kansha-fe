import React from 'react';
import hero from './images/hero-image.png';
import Nav from './Nav';
import Auth from '../utils/auth';

const auth = new Auth();

export default function Header() {
	return (
		<div className="root">
			<Nav />
			<div className="headerContainer">
				<div className="info">
					<div className="headingFont">Workplace Recognition</div>
					<div className="headingFont">Like Never Before</div>
					<div className="desc">
						Making it easy to recognize your hardworking peers with
						rewards and personalized messages
					</div>
					<button className="signButton" onClick={auth.login}>
						Get Started
					</button>
					<button
						onClick={() => (window.location.hash = 'features')}
						className="learnButton">
						Learn More
					</button>
				</div>
				<div className="hero">
					<img src={hero} alt="" className="img" />
				</div>
			</div>
		</div>
	);
}
