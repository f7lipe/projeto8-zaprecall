import "./css/question.css"
import setinha from "./assets/setinha.png"

export default function Question(props){
  const {question, answer} = props.deck
    return(
        <section className="question">
        <p>{question}</p>
        <img src={setinha} alt=""/>
      </section>
    )
}