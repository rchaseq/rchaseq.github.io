import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faGithub,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow me on LinkedIn</div>

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow me on GitHub</div>

			<div className="social">
				<a
					href={INFO.socials.stackoverflow}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faStackOverflow}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow me on Stack Overflow</div>
				</a>
			</div>
				</a>
			</div>
				</a>
			</div>
		</div>
	);
};

export default Socials;
