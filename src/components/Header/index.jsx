import './index.css'

function Header({btnStart}){
    return (
        <header>
            <div>
                <h1><strong>Nu</strong> Kenzie</h1>
                <button className='button--default' onClick={btnStart}>Inicio</button>
            </div>
        </header>
    )
}

export default Header