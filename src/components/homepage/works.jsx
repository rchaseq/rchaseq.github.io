import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Employer</div>
							<div className="work-subtitle">
								Job Title
							</div>
							<div className="work-duration">20XX - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Employer</div>
							<div className="work-subtitle">
							Job Title
							</div>
							<div className="work-duration">20XX - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
