import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import Asking2 from "./components/Asking2";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

/**
 * Main App component managing the Valentine's Day proposal.
 *
 * @returns {JSX.Element} JSX element representing the App component.
 */
const App = () => {
  // State to track acceptance and rejection
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [rejectCounter, setRejectCounter] = useState(0)
  const [isAngry, setIsAngry] = useState({
    level: 0,
    state: null
  })
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  // Handler for accepting the proposal
  const handleAccept = () => {
    setIsAngry({
      level: 0,
      state: false
    })
    setAccepted(true);
  };

  // Handler for rejecting the proposal
  const handleReject = () => {
    setRejectCounter(rejectCounter + 1)
    setRejected(true);
    // Array of rejection messages
    const rejectionTexts = [
      "Are you sure?",
      "Maybe try again?",
      "Think again!",
      "You suuuuureeeeeee???",
      "Last Chance?",
      "Call a friend?",
      "Sure na na?",
      "Weeehhhhhh?",
      "Yes"
    ];
    // Randomly select a rejection message
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length - (rejectCounter >= 3 ? 0 : 1));
      if (randomIndex < 0) { randomIndex = 0 }
      if (rejectCounter >= 6) { randomIndex = rejectionTexts.length - 1 }
    } while (randomIndex === lastRejectedIndex);

    setLastRejectedIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  const Screens  = () => {
    if (isAngry.state == null || isAngry.state) {
      return (
        <Asking2
          gif={rejected ? madBear : flowerBear}
          altText={rejected ? "Rejected Bear" : "I love you Bear"}
          handleAccept={handleAccept}
          handleReject={handleReject}
          noButtonText={noButtonText}
        />
      )
    }

    else {
      return (
        <Success />
      )
    }
  }
  
  return (
    <div className="App">
      <div className="App-body">
        <Screens />
        {/* {(isAngry.state === null) && (
          <Asking2
            gif={rejected ? madBear : flowerBear}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )} */}

        {/* Asking to be my Valentine */}
        {/* {!accepted && (
          <Asking2
            gif={rejected ? madBear : flowerBear}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )} */}

        {/* She said YES! */}
        {/* {accepted && <Success />} */}
      </div>
    </div>
  );
};

export default App;
