import "./css/answer.css"

export default function Answer(props){
  const {answer} = props
    return(
        <section class="answer">
        <p>{answer}</p>
        <div class="buttons">
          <button class="red-btn">Não lembrei</button>
          <button class="orange-btn">Quase não lembrei</button>
          <button class="green-btn">Zap</button>
        </div>
      </section>
    )
}