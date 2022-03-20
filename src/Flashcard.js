import "./css/flahscard.css"

export default function Flashcard(props){
    return(
        <section className="flashcard ">
        <h4>{props.name}</h4>
        <ion-icon name="play-outline"></ion-icon>
      </section>

    )
}