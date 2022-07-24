import Header from '../Header'
import Form from '../Form'
import './index.css'
import List from '../List'
import {useState} from 'react'
import TotalMoney from '../TotalMoney'

function Home({btnStart}){
    const [list, setList] = useState([])


    function filter(filtrarPor){
        if(filtrarPor === "Todos"){
            setList(list)
        }else{
            const newArr = list.filter(elem => elem.tipoDeValor === filtrarPor)

            setList(newArr)
        }
    }

    function removeList(id){
        const newArr = list.filter(elem => elem.id !== id)

        setList([...newArr])
    }

    function addList(obj){
        const [descricao, valor, tipoDeValor] = obj
        
        setList(oldList => [...oldList, {descricao: descricao.value, valor: valor.value, tipoDeValor: tipoDeValor.value, id: oldList.length}])
    }

    return (
        <div className='home'>
            <Header btnStart={btnStart}></Header>
            <main>
                <div className='leftBar'>
                    <Form addList={addList}></Form>
                    <TotalMoney list={list}></TotalMoney>
                </div>
                <List removeList={removeList} list={list} filter={filter}></List>
            </main>
        </div>
    )
}

export default Home