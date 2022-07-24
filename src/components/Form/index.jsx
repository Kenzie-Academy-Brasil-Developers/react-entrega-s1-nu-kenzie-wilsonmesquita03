import './index.css'

function Form({addList}){
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            addList(event.target)
        }}>
            <div className='form__descricao'>
                <label htmlFor="descricao">Descricao</label>
                <input type="text"  id="descricao" placeholder="Digite aqui sua descrição" className="input__text--default"/>
                <span>Ex: Compra de roupas</span>
            </div>
            <div className='form__valor'>
                <div className='valor__quantidade'>
                    <label htmlFor="valor">Valor</label>
                    <input type="number" id="valor" className="input__text--default" placeholder='1'/>
                </div>
                <div className='valor__tipoDeValor'>
                    <label htmlFor="tipoDeValor">Tipo de valor</label>
                    <select name="" id="" className='input__text'>
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="button button--active">Inserir valor</button>
        </form>
    )
}

export default Form