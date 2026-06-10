import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      Wala ko kalimot uyyyy :p
    </p>
    <p className="App-text-success">
      Wala lng nko ni nahuman daun hahahah
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">{`Surprise! Love ya <3 :p`}</p>
  </div>
);

export default Success;
