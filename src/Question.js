import "./css/question.css"
import setinha from "./assets/setinha.png"
import Answer from "./Answer"
import React, { useState } from "react";

export default function Question(props) {
  const { question, answer } = props.deck
  const { answers, callback } = props
  const {status, statusCallback} = props
  const [flipped, setFlipped] = useState(false);
  return (

    <>

      {
        !flipped &&
        <section className="question">
          <p>{question}</p>
          <img src={setinha} alt="" onClick={() => setFlipped(true)} />
        </section>
      }

      {

        flipped &&
        <Answer answer={answer}
          answers={answers}
          callback={callback}
          status={status}
          statusCallback={statusCallback}
           />

      }

    </>
  )
}