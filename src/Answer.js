import "./css/answer.css"
import React, { useState } from "react";

export default function Answer(props){
  const {answer} = props
  const {answers, callback} = props
  const {status, statusCallback} = props

  function close(sol){
    callback([...answers, sol])
    statusCallback(sol)
  }


    return(
        <section class="answer">
        <p>{answer}</p>
        <div className="buttons">
          <button className="red-btn" onClick={()=>close('wrong')}>Não lembrei</button>
          <button className="orange-btn" onClick={()=>close('almost')}>Quase não lembrei</button>
          <button className="green-btn" onClick={()=>close('zap')}>Zap</button>
        </div>
      </section>
    )
}