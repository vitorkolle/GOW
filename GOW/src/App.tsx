import './App.css'
import logo from './assets/logo.svg'
import downArrow from './assets/downArrow.svg'

function App() {
  return (
    <>

      {/* Primeira tela */}
      <div className="h-screen w-screen flex flex-col bg-[url(./assets/gameImg.svg)] bg-cover bg-fixed justify-between items-center">

        {/* Header */}
        <div className="w-full h-contain flex items-start justify-between mt-2">
          <img className='ml-10' src={logo} alt="Logo God of War Ragnarok" />

          <nav className='flex w-4/6 justify-center mt-3 gap-20'>
            <p className="text-white font-[Abel] text-xl"> <a href="">Personagens</a></p>
            <p className="text-white font-[Abel] text-xl"> <a href="">Criaturas</a></p>
            <p className="text-white font-[Abel] text-xl"> <a href="">Reinos</a></p>
          </nav>

          <nav className='flex w-1/5 justify-center mt-3'>
            <p className="text-white font-[Abel] text-xl"> <a href="">Site Oficial</a> | <a href="">Desenvolvedora</a> </p>
          </nav>

        </div>

        {/* Main */}

        <div className="w-full h-1/2 justify-evenly items-center flex flex-col gap-15">

          <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
            <h1 className='text-white text-5xl font-[Phudu] font-medium'>O Destino dos Nove Reinos Está em Suas Mãos</h1>
            <p className='text-white text-2xl font-[Lexend] font-medium text-center w-[48%]'>Enfrente o fim dos tempos em God of War Ragnarök e decida o destino dos Nove Reinos em uma jornada épica e inesquecível.</p>
          </div>


          <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className='text-white text-3xl font-[Lexend] font-medium'>Saiba Mais</h1>
            <img className='size-10' src={downArrow} alt="Continue" />
          </div>


        </div>


      </div>



    </>
  )
}

export default App
