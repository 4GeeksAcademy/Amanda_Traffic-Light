import React, { useState } from "react";


//create your first component
const TrafficLight = () => {
	const [light, setLight] = useState("red");


	return (

		<div className="trafficLigthContainer">
			<div className="space"></div>

			<div className="color-container">
				<div className={`bulb redBulb ${light === "red" ? " selected" : ""}`}
					onClick={() => setLight("red")}>
				</div>
				<div className={`bulb yellowBulb ${light === "yellow" ? " selected" : ""}`}
					onClick={() => setLight("yellow")}>
				</div>
				<div className={`bulb greenBulb ${light === "green" ? " selected" : ""}`}
					onClick={() => setLight("green")}>
				</div>

			</div>
		</div>
	);
};
export default TrafficLight;
