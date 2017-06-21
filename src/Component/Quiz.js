import React, {Component} from 'react';
import QuizOptions from './QuizOptions';
import '../App.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    let riddle = this.playGame();
    let correct = false;
    let gameOver = false;
    this.state = {
      riddle: riddle,
      correct,
      gameOver
    }
      this.renderOptions= this.renderOptions.bind(this);
      this.checkResults = this.checkResults.bind(this);
  }
      randomNumber(min, max){
        return Math.floor(Math.random() * (max-min + 1) + min);
      }
      playGame(){
        const field1= this.randomNumber(20,50);
        const filed2= this.randomNumber(20,50);
        const result = filed2 + field1;
        const resultsArray = this.generateRandomOptions(result);
        //Add the correct option into the array
        resultsArray.push(result);
        resultsArray.sort(function(a,b){
            return 0.7 - Math.random();
        });
        let riddle = {
            resultsArray : resultsArray,
            field1: field1,
            field2: filed2,
            answer: result
          };
          return riddle;
        }

        generateRandomOptions(sum) {
          let result = sum;
          let resultArray = [];
          let randomNumberArray = [];

            while(randomNumberArray.length <=3){
              let randomNumber = this.randomNumber(1,20);
              if(randomNumberArray.indexOf(randomNumber) > -1) continue;
              randomNumberArray.push(randomNumber);
            }
            //Generate false options array(the correct option will at to the array later)
            for(let i = 0; i< 3 ; i++){
              let addSubtract = this.randomNumber(0,1);
              let result = sum;
              if (addSubtract === 1 ){
                //add the number to the result
                result += randomNumberArray[i];
                resultArray.push(result);
              } else {
                //subtract the number from the result
                result -= randomNumberArray[i];
                resultArray.push(result);
              }
            }
            //
          return resultArray;
        }
        checkResults(option){
          if(this.state.riddle.answer === option) {
            console.log('Spot on Sir');
            this.setState({correct: true, gameOver: true});
          } else {
            console.log('Even my nephew could answer this question. Booo!!!');
            this.setState({correct: false, gameOver: true});
          }
        }

        renderOptions(){
          return (
            <div className="options">
              {this.state.riddle.resultsArray.map((option , index) =>
                  <QuizOptions option={option} key={index}
                  checkResults={(option) => this.checkResults(option)}/>
              )};
            </div>
          );
        }

  render() {
    return (
      <div className="quiz">
        <div className="quiz-content">
          <p className="question">What is the sum of <span></span>
            <span className="text-info">
              {this.state.riddle.field1}
            </span>
             <span> and </span>
            <span className="text-info">
              {this.state.riddle.field2}
            </span>
            ?</p>
          {this.renderOptions()}
        </div>
        Correct: {this.state.correct  ? "True" :"False"} <br/>
        gameOver: {this.state.gameOver ? "True" :"False"}
        <div className="play-again">
          <a className="button">Play Again</a>
        </div>
      </div>

    )
  }
}

export default Quiz
