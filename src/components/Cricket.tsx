// Rules for the Game of Cricket
// Match is of 10 overs
// If wickets is equal to 10 or over is equal to 10 the match will stopped
// It will generate random number between 0 and 8
// If number is equal to 8 then it is wickets
// If number is equal to 7 then it can be no ball or wide ball
// If number is 1 or 3 or 5 then striker batsman will swap with non striker
// Remaining number will only update the total score

// 0-no run
// 1,3,5 = rotate strike
// 7 = no ball, wide ball
// 8 = wicket

import React, { useState } from "react";
import Stadium from "../assets/Image/stadium.jpg";
import "./styles/cricket.css";

export const Cricket: React.FC = () => {
  // state to store run made in a single ball
  const [runInOneBall, setRunInOneBall] = useState<number>(0);
  // state to store wickets
  const [wicket, setWicket] = useState<number>(0);
  // state to store the number of over
  const [over, setOver] = useState<number>(0);
  // state to store extra run
  const [extraRun, setExtraRun] = useState<number>(0);
  // state to store final score
  const [finalScore, setFinalScore] = useState<number>(0);
  // state to store ball number
  const [ballNo, setBallNo] = useState<number>(0);
  // state to store striker
  const [striker, setStriker] = useState<string>("Batsman 1");
  //  state to store non-striker
  const [nonStriker, setNonStriker] = useState<string>("Batsman 2");
  //  state to store game over flag
  const [gameOver, setGameOver] = useState<boolean>(false);

  //  function to produce score
  const produceScore = () => {
    // random score between 0-8 is being generated on every ball
    let score = Math.floor(Math.random() * (9 - 0) + 0);
    // setting the score for each individual ball
    setRunInOneBall(score);
    // setting ball no
    setBallNo(ballNo + 1);
    // if ball number is more than 5, then set the ball no as 0 and increment over by 1
    if (ballNo > 5) {
      setBallNo(0);
      setOver(over + 1);
    }
    switch (score) {
      // if score on a single ball is 1, 3 or 5 rotate the strike
      case 1:
      case 3:
      case 5:
        setStriker(nonStriker);
        setNonStriker(striker);
        break;
      // if number generated on a single ball is 7, then increase the extra run by one and decrease ball count by 1
      case 7:
        setExtraRun(extraRun + 1);
        setBallNo(ballNo - 1);
        score = 1;
        break;
      // if score on a single ball is 8, then it will count as a wicket and provide increment to wicket by 1, no score will be added
      case 8:
        setWicket(wicket + 1);
        score = 0;
        break;
    }
    setFinalScore(finalScore + score);
  };

  // function for when start game is clicked
  const handleStartMatch = () => {
    // call produceScore function
    produceScore();
    // if over is 10 or wicket is 10, set game over flag as true
    if (over == 10 || wicket == 10) {
      setGameOver(true);
      // setExtraRun as 0
      setExtraRun(0);
      // setRunInOneBall as 0
      setRunInOneBall(0);
    }
  };

  // function for when stop game is clicked
  const handleStopMatch = () => {
    // set all state to its initial state
    setBallNo(0);
    setExtraRun(0);
    setFinalScore(0);
    setNonStriker(nonStriker);
    setStriker(striker);
    setWicket(0);
    setOver(0);
    setRunInOneBall(0);
    setGameOver(false);
  };
  return (
    <div className="cricket-main-component">
      <img className="background" src={Stadium} alt="stadium" />
      <div className="score-card-div">
        <p className="score-card-title">Score Card</p>
        <div className="score-board">
          {/* shows final score and wicket */}
          {finalScore}-{wicket}
          <span className="over-and-ball">
            {/* shows over and ball number */}({over}.{ballNo})
          </span>
          {/* shows no scored in a single ball */}
          <span className="score-on-one-ball">({runInOneBall})</span>
        </div>
        <div className="extra-details">
          <tr>
            {/* shows extra run scored because of wide or no ball */}
            <td> Extras : {extraRun} </td>
          </tr>
          <tr>
            {/* show the striker */}
            <td>Striker : {striker} </td>
          </tr>
          <tr>
            {/* shows non striker */}
            <td> Non-Striker : {nonStriker}</td>
          </tr>
        </div>
        {/* if game over flag is true, print game over and score related details */}
        {gameOver ? (
          <>
            <p className="game-over">Game Over</p>
            <p className="game-details">
              Total Score: {finalScore}, Wickets: {wicket}, Over: {over}, Balls:
              {ballNo}
            </p>
          </>
        ) : null}
        <div className="button-div">
          {/* button for starting game */}
          <button id="start-match" onClick={(e: any) => handleStartMatch()}>
            Start Match
          </button>
          <span>
            {/* button for stopping game */}
            <button id="stop-game" onClick={(e: any) => handleStopMatch()}>
              Stop Game
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
