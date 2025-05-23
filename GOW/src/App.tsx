import './App.css'
import { useState } from 'react';
import logo from './assets/systemImg/logo.svg'
import downArrow from './assets/systemImg/downArrow.svg'
import arrow from './assets/systemImg/arrow.svg'
import characters from './assets/characters'




function App() {
  const [index, setIndex] = useState(0);
  let actualCharacter = characters[index]

  return (
    <>

      {/* Primeira tela */}
      <div className="h-screen w-contain flex flex-col bg-[url(./assets/systemImg/gameImg.svg)] bg-cover bg-fixed justify-between items-center">

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
      <div className="h-screen w-screen flex flex-col bg-[url(./assets/systemImg/background2.svg)] bg-cover bg-fixed justify-between items-center bg-black bg-center overflow-y-hidden">

        <h1 className='text-white text-6xl mt-2 font-[EB-Garamond]'>Personagens</h1>

        <div className="h-full w-full flex">

          <div className="h-full w-1/2 mt-10 flex flex-col items-center gap-5">

            <h2 className='text-white text-5xl font-[Poltawski-Nowy]'>{actualCharacter.name}</h2>

            <p className='text-white text-3xl font-[Poltawski-Nowy] text-center w-10/12'>{actualCharacter.text}</p>
          </div>


          <div className="h-full w-1/2 flex bg-amber-300 items-center">
            <button className='h-contain w-contain' onClick={() => { if(index < 1){setIndex(characters.length)} else{setIndex(index - 1)};}}>
            <img src={arrow} alt="" />
            </button>

            <div className='w-4/5 h-5/6 mx-1'>
            <img src={actualCharacter.image} alt="" className='w-full h-full'/>
            </div>

            <button className='h-contain w-contain' onClick={() => { if(index == characters.length - 1){setIndex(0)}; setIndex(index + 1)}}>
            <img src={arrow} alt="" className='rotate-180 mr-2'/>
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
