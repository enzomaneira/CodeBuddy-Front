import './App.css'
import pc_main from "/pc_main.png"

function App() {

  return (
    <div className='content'>
      <div className='text-container'>
        <h1>Comece uma nova jornada de estudos</h1>
        <p>Uma nova plataforma de aprendizado para você aprender programação</p>
        <button>Cadastro</button>
      </div>
      <div className='image-pc'>
        <img src={pc_main} alt="CodeBoddu logo" />
      </div>
    </div>
  )
}

export default App
