import './App.css'
import logo from './assets/logo.svg'
import downArrow from './assets/downArrow.svg'
import arrow from './assets/arrow.svg'

function App() {
  return (
    <>

      {/* Primeira tela */}
      <div className="h-screen w-contain flex flex-col bg-[url(./assets/gameImg.svg)] bg-cover bg-fixed justify-between items-center">

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


          <div className="w-contain h-contain flex flex-col justify-center items-center cursor-pointer mb-10">
            <h1 className='text-white text-3xl font-[Lexend] font-medium'>Saiba Mais</h1>
            <img className='size-10' src={downArrow} alt="Continue" />
          </div>


        </div>
      </div>

      {/* Segunda tela */}
      <div className="h-screen w-screen flex flex-col bg-[url(./assets/background2.svg)] bg-cover bg-fixed justify-between items-center bg-black bg-center overflow-y-hidden">

        <h1 className='text-white text-6xl mt-2 font-[EB-Garamond]'>Personagens</h1>

        <div className="h-full w-full flex">

          <div className="h-full w-1/2 mt-10 flex flex-col items-center gap-5">

            <h2 className='text-white text-5xl font-[Poltawski-Nowy]'>Kratos</h2>

            <p className='text-white text-3xl font-[Poltawski-Nowy] text-center w-10/12'>Kratos, o guerreiro marcado por cicatrizes físicas e emocionais, retorna como uma figura complexa em God of War Ragnarök. Outrora um deus impiedoso, ele agora é um pai lutando para proteger Atreus e prepará-lo para um destino incerto. Em meio ao caos iminente do Ragnarök, Kratos enfrenta não apenas inimigos formidáveis, mas também os fantasmas de seu passado e os dilemas de seu presente.
              Guiado por sua força inabalável e sabedoria conquistada a duras penas, ele busca equilibrar o peso de suas ações com a responsabilidade de criar um legado para seu filho. Kratos não é apenas um herói; ele é um sobrevivente em constante evolução, desafiado a provar que mesmo deuses podem mudar seu destino.
              Nesta nova jornada, Kratos é mais do que um guerreiro – ele é a personificação da resistência e da redenção.</p>
          </div>


          <div className="h-full w-1/2 flex bg-amber-300 items-center">
            <img src={arrow} alt="" />

            <div className='w-4/5 h-5/6 bg-amber-700 mx-1'></div>

            <img src={arrow} alt="" className='rotate-180 mr-2'/>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
