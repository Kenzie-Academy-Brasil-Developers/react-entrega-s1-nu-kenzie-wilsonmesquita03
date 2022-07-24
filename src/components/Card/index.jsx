import './index.css'

function Card(props){
    return (

        props.children.tipoDeValor === "Entrada" ?

        <div className='card card--green' key={props.key}>
            <div className='card__descricao'>
                <h3>{props.children.descricao}</h3>
                <span>R$ {props.children.valor}</span>
                <button onClick={(event) => props.removeList(props.children.id)} className='button button--default'>
                    <img src="../img/trash.svg" alt="" />
                </button>
            </div>
            <span>{props.children.tipoDeValor}</span>
        </div>

        :

        <div className='card' key={props.key}>
            <div className='card__descricao'>
                <h3>{props.children.descricao}</h3>
                <span>{props.children.valor}</span>
                <button onClick={(event) => props.removeList(props.children.id)} className='button button--default'>
                    <img src="../img/trash.svg" alt="" />
                </button>
            </div>
            <span>{props.children.tipoDeValor}</span>
        </div>
    )
}

export default Card