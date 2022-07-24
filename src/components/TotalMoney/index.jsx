import './index.css'

function TotalMoney({list}){
    return(
        <div className="totalMoney">
            <div>
                <h3>Valor Total</h3>
                <h3>$ {list.reduce((acc, cur) => {return acc + cur.valor}, 0)}</h3>
            </div>
            <span>O valor se refere ao saldo</span>          
        </div>
    )
}

export default TotalMoney