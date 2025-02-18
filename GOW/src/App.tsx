import './App.css'
import logo from './assets/logo.svg'

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col bg-[url(./assets/gameImg.svg)] bg-cover bg-no-repeat bg-fixed items-between align-center">  
      <div className="h-full w-full bg-radial from-[#243E58] from-13% via-black via-35% via-black via-65% via-black via-75% to-[#243E58] to-88%">


        {/* Header */}
        <div className="w-full h-1/5 flex items-start justify-evenly mt-2">
          <img src={logo} alt="Logo God of War Ragnarok"/>

          <nav className='flex w-2/5 justify-evenly mt-3'>
            <p className="text-white font-[Abel] text-xl"> <a href="">Personagens</a></p>
            <p className="text-white font-[Abel] text-xl"> <a href="">Criaturas</a></p>
            <p className="text-white font-[Abel] text-xl"> <a href="">Reinos</a></p>
          </nav>

          <nav className='flex w-1/5 justify-center mt-3'>
          <p className="text-white font-[Abel] text-xl"> <a href="">Site Oficial</a> | <a href="">Desenvolvedora</a> </p>
          </nav>

        </div>

        {/* Main */}
        <div className="w-5/6 h-contain justify-center items-center bg-red-500 flex flex-col gap-3">
        <h1 className='text-white text-4xl font-[Phudu] font-medium'>O Destino dos Nove Reinos Está em Suas Mãos</h1>
        <p className='text-white text-xl font-[Lexend] font-light text-center w-1/2'>Enfrente o fim dos tempos em God of War Ragnarök e decida o destino dos Nove Reinos em uma jornada épica e inesquecível.</p>
        </div>


      </div>
      </div>
    </>
  )
}

export default App
