import "./css/normalize.css"
import "./css/index.css"
import "./css/footer.css"
import logo from "./assets/logo.png"
import { useState } from "react";


import Launch from "./Launch";
import Flashcard from "./Flashcard";

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

    let [answers, setAnswers] = useState([])
    let [showingLaunch, setShowingLaunch] = useState(true)
    return (

        <>

            {showingLaunch &&
                <Launch callback={setShowingLaunch} />
            }

            {!showingLaunch &&
                <>


                    <header className="logo d-x-center">
                        <img src={logo} alt="" />
                        <p>ZapRecall</p>
                    </header>

                    <main>

                        {
                            decks.map((deck, index) =>
                                <Flashcard name={`Pergunta ${index + 1}`}
                                    deck={deck}
                                    key={UUID()}
                                    answers={answers}
                                    callback={setAnswers} />
                            )
                        }

                    </main>

                    <footer className="d-y-center">
                        <p >{answers.length}/{decks.length} concluídos</p>
                        <div className="status-icons d-x-center">
                            <div className="red">
                                {
                                    answers.includes('wrong') &&
                                    <ion-icon className="red" name="close-circle"></ion-icon>
                                }
                            </div>

                            <div className="orange">
                                {
                                    answers.includes('almost') &&
                                    <ion-icon name="help-circle"></ion-icon>
                                }

                            </div>

                            <div className="green">
                                {
                                    answers.includes('zap') &&
                                    <ion-icon className="green" name="checkmark-circle"></ion-icon>
                                }
                            </div>
                        </div>
                    </footer>

                </>
            }
        </>

    )
}

function UUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
