import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris"
    ],
    correct: 0
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix"
    ],
    correct: 0
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing"
    ],
    correct: 0
  }
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  const [currentQuestions,setCurrentQuestions] = useState(0)
  const [score,setScore] = useState(0)

  const handleAnswerClick = (answerIndex) => {
   if(currentQuestions === 0 ){
    setCurrentQuestions((pre) => pre + 1)
     if(questions[currentQuestions].correct === answerIndex){
      setScore((prevScore) => prevScore + 1)
     }
  }
   else if(currentQuestions === 1){
    setCurrentQuestions((pre) => pre + 1)
    if(questions[currentQuestions].correct === answerIndex){
      setScore((prevScore) => prevScore + 1)
     }
   }
   else if(currentQuestions === 2){
    setCurrentQuestions((pre) => pre + 1)
    if(questions[currentQuestions].correct === answerIndex){
      setScore((prevScore) => prevScore + 1)
     }
   }
   else if(currentQuestions === 3){
    setCurrentQuestions((pre) => pre + 1)
    if(questions[currentQuestions].correct === answerIndex){
      setScore((prevScore) => prevScore + 1)
     }
   }
   else if(currentQuestions === 4){
    // Puanı yüzde olarak göstermek için toplam soru sayısına bölünmüş doğru cevap sayısını kullanabiliriz
    const totalScore = (score / questions.length) * 100;
    setCurrentQuestions(0)
    alert(`Quiz Tamamlandı  Toplam Puan:${totalScore.toFixed(2)}%`)
   }
  }
  // KODUNUZ BURAYA GELECEK
 return (
<div>
   <div className="flex justify-center">{questions[currentQuestions].question}</div>
  <div className="flex flex-col">
    {questions[currentQuestions].answers.map((answer,index) => (
      <button onClick={() => handleAnswerClick(index)} key={index}>{answer}</button>
    ))}
  </div>
</div>
 )
};

export default App;


// import React, { useState } from "react";

// const QUESTIONS = [
//   {
//     question: "2*(4+4) sonucu nedir?",
//     answers: ["2", "4", "8", "16"],
//     correct: 3
//   },
//   {
//     question: "9*9 sonucu nedir?",
//     answers: ["18", "81", "80", "79"],
//     correct: 1
//   },
//   {
//     question: "Formula 1'in 2022 şampiyonu kimdir?",
//     answers: [
//       "Max Verstappen",
//       "Charles Leclerd",
//       "Lewis Hamilton",
//       "Lando Norris"
//     ],
//     correct: 0
//   },
//   {
//     question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
//     answers: [
//       "Bahreyn Grand Prix",
//       "Suudi Arabistan Grand Prix",
//       "Avustralya Grand Prix",
//       "Emilia Romagna Grand Prix"
//     ],
//     correct: 0
//   },
//   {
//     question: "Hangisi Formula 1 takımlarından değildir?",
//     answers: [
//       "Ford-AMG F1 Team",
//       "Alfa Romeo F1 Team Orlen",
//       "BWT Alpine F1 Team",
//       "Oracle Red Bull Racing"
//     ],
//     correct: 0
//   }
// ];

// function App() {
//   return <Quiz questions={QUESTIONS} />;
// }

// const Quiz = ({ questions }) => {
//   const [currentQuestions,setCurrentQuestions] = useState(0)
//   const [score,setScore] = useState(0)
//   const handleAnswerClick = (answerCorrect) => {
   
//     if(questions[currentQuestions].correct === answerCorrect){
//       // Doğru cevap verildiyse, puanı güncelle
//         setScore((pre) => pre + 1)
//     }
//     // Herhangi bir cevap verildiğinde bir sonraki soruya geç.
//     if (currentQuestions < questions.length - 1) {
//       setCurrentQuestions((pre) => pre + 1)
//     } 
//      else {
//       const scorePercentage = (score / questions.length) * 100;
//       alert(`Quiz tamamlandı! Toplam puan: ${scorePercentage.toFixed(2)}%`);
//     }
//     }
//   // KODUNUZ BURAYA GELECEK
//   const handleResetClick = () => {
//     setCurrentQuestions(0)
//     setScore(0)
//   }
//  return (
//      <div>
//          <div className="flex justify-center mb-3">
//         <button className="bg-slate-500 rounded w-20 flex justify-center items-center" onClick={handleResetClick}>
//           Tekrar
//         </button>
//       </div>
//       <div className="flex justify-center mb-3">{questions[currentQuestions].question}</div>
//       <div className="flex flex-col gap-y-2 text-left">
//         {questions[currentQuestions].answers.map((answer, index) => (
//           <button onClick={() => handleAnswerClick(index)} key={index}>
//             {answer}
//           </button>
//         ))}
//       </div>
//      </div>

//  )
// };

// export default App;



//// Puanı yüzde olarak göstermek için toplam soru sayısına bölünmüş doğru cevap sayısını kullanabiliriz
// const scorePercentage = (score / questions.length) * 100
