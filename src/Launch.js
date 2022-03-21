import "./css/launch.css"
import logo from "./assets/logo.png"

export default function Launch(props) {
    const {callback} = props

    function beginZapRecall(argument){
        callback(argument)
    }

    return (
        <section className="launch d-y-center">

            <img src={logo} alt=""/>
                <p>ZapRecall</p>

                <button onClick={()=>beginZapRecall(false)}>Iniciar Recall!</button>

        </section>
    )
}