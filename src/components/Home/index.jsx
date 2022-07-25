import Header from '../Header'
import Form from '../Form'
import './index.css'
import List from '../List'
import {useState} from 'react'
import TotalMoney from '../TotalMoney'

function Home({btnStart}){
    const [list, setList] = useState([])


    function filter(filtrarPor){
        const newList = [...list]

        if(filtrarPor === "Todos"){
            newList.forEach(elem => elem.show = true)
        }else{
            newList.forEach(elem => {
                if(elem.tipoDeValor !== filtrarPor){
                    elem.show = false
                }else {
                    elem.show = true
                }
            })
        }
        
        setList(newList)
    }

    function removeList(id){
        const newArr = list.filter(elem => elem.id !== id)

        setList([...newArr])
    }

    function addList(obj){
        const [descricao, valor, tipoDeValor] = obj
        
        setList(oldList => [...oldList, {descricao: descricao.value, valor: valor.value, tipoDeValor: tipoDeValor.value, id: oldList.length, show: true}])
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