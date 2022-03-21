import "./css/flahscard.css"

import React, { useState } from "react";
import Question from "./Question";

export default function Flashcard(props) {

  const [open, setOpen] = useState(false)
  let [status, setStatus] = useState([])

  let classManager = "flashcard "
  classManager += open ? ' hidden' : ''


  return (
    <>

      {!open &&
        <section className={classManager}
          onClick={() => setOpen(true)}>
          <h4 className={status}>{props.name}</h4>
          <ion-icon name="play-outline" ></ion-icon>
        </section>
      }

      {open &&
        <Question deck={props.deck}
          answers={props.answers}
          callback={props.callback}
          status={status}
          statusCallback={setStatus}
        />
      }

    </>

  )
}

