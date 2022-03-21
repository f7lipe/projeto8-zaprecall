import "./css/flahscard.css"

import React, { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

export default function Flashcard(props){
  const {question, answer} = props.deck
  const [open, setOpen] = useState(false);

  let classManager = "flashcard "
  classManager += open ?  ' hidden' : ''


    return(
      <>
      
      {!open &&         
      <section className={classManager} key={answer} onClick={()=>setOpen(true)}>
        <h4>{props.name} </h4>
        <ion-icon name="play-outline"></ion-icon>
      </section>
      }
      
      {open &&
      <Question deck={props.deck}/>
      }
      </>

    )
}