import "./css/launch.css"

export default function Launch(props) {
    const {callback} = props

    function beginZapRecall(argument){
        callback(argument)
    }

    return (
        <section className="launch d-y-center">

            <img src="images/logo.png" alt=""/>
                <p>ZapRecall</p>

                <button onClick={()=>beginZapRecall(false)}>Iniciar Recall!</button>

        </section>
    )
}