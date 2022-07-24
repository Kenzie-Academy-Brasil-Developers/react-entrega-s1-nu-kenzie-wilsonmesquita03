import './index.css'
import NoCard from '../img/NoCard.svg'
import Card from '../Card'

function List({list, removeList, filter}){
    return (
        <section className="List">
            <div>
                <h3>Resumo financeiro</h3>
                <div className='List__buttons'>
                    <button className="button button--active" value="Todos" onClick={event => filter(event.target.value)}>Todos</button>
                    <button className="button button--default" value="Entrada" onClick={event => filter(event.target.value)}>Entradas</button>
                    <button className="button button--default" value="Despesa" onClick={event => filter(event.target.value)}>Despesas</button>
                </div>
            </div>
            <ul>
                {
                    list.length === 0 ?
                    <> 
                    <h2>Você ainda não possui nenhum lançamento</h2>
                    <li><img src={NoCard} alt="" /></li>
                    <li><img src={NoCard} alt="" /></li>
                    <li><img src={NoCard} alt="" /></li>
                    </>
                    : 

                    list.map((item, i) => (<li key={i}><Card removeList={removeList}>{item}</Card></li>))
                }
            </ul>   
        </section>  
    )
}

export default List