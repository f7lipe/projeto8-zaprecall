import "./css/normalize.css"
import "./css/index.css"
import "./css/footer.css"
import logo from "./assets/logo.png"
import { useState } from "react";


import Launch from "./Launch";
import Flashcard from "./Flashcard";
import Question from "./Question";
import Answer from "./Answer";
import react from "react";

const decks = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];


export default function App() {

    const footerIconts = ["close-circle-outline", "help-circle-outline", "checkmark-circle-outline"]
    let [answers, setAnswers] = useState([])



    return (

        <>
            <header className="logo d-x-center">
                <img src={logo} alt="" />
                <p>ZapRecall</p>
            </header>

            <main>

            {
                decks.map((deck, index) =>
                    <Flashcard name={'Pergunta ' + index} deck={deck} />
                )
            }
            </main>

            <footer className="d-y-center">
                <p >0/{decks.length} concluídos</p>
                <div className="status-icons d-x-center">
                    {
                        footerIconts.map((icon) => <ion-icon name={icon}></ion-icon>)
                    }
                </div>
            </footer>
        </>
    )
}