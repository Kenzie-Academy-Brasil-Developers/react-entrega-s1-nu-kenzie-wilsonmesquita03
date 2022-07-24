import  imageIndex  from "../img/imageIndex.svg"
import './index.css'

function Index({btnStart}){

    return(
        <div className="indexBG">
            <div className="index">
                <section className="index__section">
                    <h1><strong>Nu</strong> Kenzie</h1>
                    <span>Centralize o controle das suas finanças</span>
                    <p>de forma rápida e segura</p>
                    <button onClick={btnStart} className="button button--active">Iniciar</button>
                </section>
                <section className="index__image">
                    <img src={imageIndex} alt="" />
                </section>
            </div>
        </div>
    )
}

export default Index