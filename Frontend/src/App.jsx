import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default function App() {
  const [quizdata, setQuizdata] = useState()
  const[quizstarted,setQuizstarted]=useState(false)
  const[score,setScore]=useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const[increased,setIncreased]=useState(false)
  const[deducted,setDeducted]=useState(false)
  const[currentquestionindex,setCurrentQuestionIndex]=useState(0)
  const [timer, setTimer] = useState(60)
  const [gameOver, setGameOver] = useState(false)
  const[correctAnswerCount,setCorrectAnswerCount]=useState(0)
  const[incorrectAnswerCount,setIncorrectAnswerCount]=useState(0)
  const[unAnswered,setUnaswered]=useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const fetchData=async ()=>{
    const fetchedData= await fetch("http://localhost:2000/")
    const data=await fetchedData.json()
    setQuizdata(data)
  }
  useEffect(()=>{
fetchData()
  },[])

  useEffect(() => {
    if (quizstarted && timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      nextquestion();
    }
  }, [quizstarted, timer]);
 const startingquiz=()=>{
  setQuizstarted(true)
  setTimer(60)
 }
 const nextquestion=()=>{
  if(!selectedOption){
    setUnaswered((prev)=>prev+1)
  }
  setIsAnimating(true);
  setTimeout(() => {
    if (currentquestionindex < quizdata.questions.length - 1) {
      setCurrentQuestionIndex(currentquestionindex + 1);
      setDeducted(false);
      setSelectedOption(null);
      setIncreased(false);
      setTimer(60);
    } else {
      setGameOver(true);
    }
    setIsAnimating(false);
  }, 500);
 }
 const handlechange=(event)=>{
  const selectedValue = event.target.value;
  setSelectedOption(selectedValue)
const index=quizdata.questions[currentquestionindex].options.findIndex((val)=>
val.description==event.target.value
)
let answer=quizdata.questions[currentquestionindex].options[index].is_correct
if(answer &&!increased){
if(deducted){
  setIncorrectAnswerCount(prev=>prev-1)
}
setScore((prev)=>prev+1)
setCorrectAnswerCount(prev=>prev+1)
setIncreased(true)
setDeducted(false)

}
else if(!answer  && !deducted){
  if(increased){
  setCorrectAnswerCount(prev=>prev-1)
  } 
    setIncorrectAnswerCount(prev=>prev+1)
    setDeducted(true)
    setIncreased(false)
  }
 }
  return (
    <>
      {quizdata ? (
        <>
        <div className="quiz-welcome">
          <h3  className="quiz-title"> <span className="symbol">🚀</span> <span className="text">Prepare Yourself for the Quiz on: {quizdata.title}</span></h3>
          {!quizstarted ? (
            <button  className="start-button" onClick={startingquiz}> <span className="symbol">🚀</span>Start Quiz</button>
          ) : gameOver ? (
            <div className="quiz-completed" >
              <h2 className='quizcompletedtext'> <span className="symbol">🎉</span>Quiz Completed!</h2>
              <h3 className='finalscore'>Your Final Score: {score}/{quizdata.questions.length}</h3>
              <p className='correctanswer'>✅ Correct Answers: {correctAnswerCount}</p>
              <p className='incorrectanswer'>❌ Incorrect Answers: {incorrectAnswerCount}</p>
              <p className='incorrectanswer'>❓ Unaswered: {unAnswered}</p>
              {(() => {
      const totalQuestions = quizdata.questions.length;
      const percentage = ((correctAnswerCount / totalQuestions) * 100).toFixed(2);

      let performanceSymbol = "🤔"; 

      if (percentage === 100) {
        performanceSymbol = "🏆"; 
      } else if (percentage >= 80) {
        performanceSymbol = "🎯"; 
      } else if (percentage >= 50) {
        performanceSymbol = "👍"; 
      } else if (percentage > 0) {
        performanceSymbol = "😟"; 
      } else {
        performanceSymbol = "💀";
      }
      return (
        <h3 className="performance">
          Performance: {percentage}% {performanceSymbol}
        </h3>
      );
    })()}
              <button onClick={() => window.location.reload()}>🔄 Restart Quiz</button>
            </div>
          ) : (
            <div className={`card ${isAnimating ? 'slide-out' : 'slide-in'}`}>
            
              <div className="timer-container"> <h4><span className="timer-symbol">⏳</span> Time Left: <span className="timer">{timer}s</span></h4></div>
              <h4>
                Q.{currentquestionindex + 1}) {quizdata.questions[currentquestionindex].description}
              </h4>

              {quizdata.questions[currentquestionindex].options.map((val, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="option"
                    value={val.description}
                    checked={selectedOption === val.description}
                    onChange={handlechange}
                  />
                  <label htmlFor={`option-${index}`}>{val.description}</label>
                </div>
              ))}
           
              <button onClick={nextquestion}>Next ➡️</button>
            </div>
          )}
          </div>
        </>
      ) : (
        <div  className="loading-text">Loading...</div>
      )}
    </>
  )
}

