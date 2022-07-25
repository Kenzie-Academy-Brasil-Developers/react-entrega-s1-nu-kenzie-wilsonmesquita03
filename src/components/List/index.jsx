import './index.css'
import NoCard from '../img/NoCard.svg'
import Card from '../Card'

function List({list, removeList, filter}){
    return (
        <section className="List">
            <div>
                <h3>Resumo financeiro</h3>
                <div className='List__buttons'>
                    <button className="button button--active"   onClick={event => filter("Todos")}>Todos</button>
                    <button className="button button--default"  onClick={event => filter("Entrada")}>Entradas</button>
                    <button className="button button--default"  onClick={event => filter("Despesa")}>Despesas</button>
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

                    list.map((item, i) => {
                        return item.show ? 
                            <li key={i}><Card removeList={removeList}>{item}</Card></li>
                        :

                        <></>
                    })
                }
            </ul>   
        </section>  
    )
}

export default List