import './App.css'
import logo from './assets/logo.svg'

function App() {
  return (
    <>
      <div className="z-[-1] h-screen w-full flex flex-col bg-[url(./assets/gameImg.svg)] bg-cover bg-fixed items-between">
      <div className="z-[0] h-full w-full bg-radial from-[#243E58] from-13% via-black via-35% via-black via-65% via-black via-75% to-[#243E58] to-88% opacity-50">
        
        {/* Header */}
        <div className=" z-[1] w-full h-1/5 flex items-center justify-evenly">
          <img src={logo} alt="Logo God of War Ragnarok" />

          <nav className='flex w-2/5 justify-evenly'>
            <p className="text-white"> <a href="">Personagens</a></p>
            <p className="text-white"> <a href="">Criaturas</a></p>
            <p className="text-white"> <a href="">Reinos</a></p>
          </nav>

          <nav className='flex w-1/5 justify-center'>
          <p className="text-white"> <a href="">Site Oficial</a> | <a href="">Desenvolvedora</a> </p>
          </nav>
        </div>

        {/* Main */}
        <div className="z-[1] w-full h-full flex justify-center items-center">
        <h1 className='text-white text-3xl'>O Destino dos Nove Reinos Está em Suas Mãos</h1>
        </div>


      </div>
      </div>
    </>
  )
}

export default App
