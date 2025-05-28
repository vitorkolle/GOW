import './App.css'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/systemImg/logo.svg'
import downArrow from './assets/systemImg/downArrow.svg'
import arrow from './assets/systemImg/arrow.svg'
import characters from './assets/characters'




function App() {
  const [index, setIndex] = useState(0);
  let actualCharacter = characters[index]

  const nextCharacter = () => {
    setIndex((index + 1) % characters.length);
  };

  const previousCharacter = () => {
    setIndex((index - 1 + characters.length) % characters.length);
  };



  return (
    <>

      {/* Primeira tela */}
      <div className="h-screen w-contain flex flex-col bg-[url(./assets/systemImg/gameImg.svg)] bg-cover bg-fixed justify-between items-center">

        {/* Header */}
        <div className="w-full h-contain flex items-start justify-between mt-2">
          <img className='ml-10' src={logo} alt="Logo God of War Ragnarok" />

          <nav className='flex w-4/6 justify-center mt-3 gap-20'>
            <p className="text-white font-[Abel] text-xl scroll-smooth"> <a href="#characters">Personagens</a></p>
            <p className="text-white font-[Abel] text-xl"> <a href="#creatures">Criaturas</a></p>
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


          <div className="w-contain h-contain cursor-pointer mb-10">
            <a href="#characters" className='flex flex-col items-center'>
            <h1 className='text-white text-3xl font-[Lexend] font-medium'>Saiba Mais</h1>
            <img className='size-10' src={downArrow} alt="Continue" />
            </a>
          </div>


        </div>
      </div>

      {/* Segunda tela */}
      <div id='characters' className="h-screen w-screen flex flex-col bg-[url(./assets/systemImg/background2.svg)] bg-cover bg-fixed justify-between items-center bg-black bg-center overflow-hidden">

        <h1 className='text-white text-6xl mt-2 font-[EB-Garamond]'>Personagens</h1>

        <div className="h-full w-full flex">

          <AnimatePresence mode='wait'>
            <motion.div
              key={characters[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex items-end text-white w-screen h-contain overflow-hidden"
            >

              <div className="h-full w-1/2 mt-14 flex flex-col items-center justify-center gap-5">
                <h2 className='text-white text-5xl font-[Poltawski-Nowy]'>{actualCharacter.name}</h2>

                <p className='text-white text-3xl font-[Poltawski-Nowy] text-center w-10/12 '>{actualCharacter.text}</p>
              </div>


              <div className="h-full w-1/2 flex items-center">
                <button className='h-contain w-contain cursor-pointer' onClick={() => nextCharacter()}>
                  <img src={arrow} alt="" />
                </button>

                <div className='w-6/8 h-5/6 flex justify-center'>
                  <img src={actualCharacter.image} alt="" className='w-11/12 h-full object-cover' />
                </div>

                <button className='h-contain w-contain cursor-pointer' onClick={() => previousCharacter()}>
                  <img src={arrow} alt="" className='rotate-180' />
                </button>

              </div>

            </motion.div>
          </AnimatePresence>


        </div>

      </div>




      {/* Terceira tela */}
      <div id ='creatures' className='h-screen w-screen bg-[url(./assets/systemImg/background3.svg)] bg-cover bg-fixed bg-black flex flex-col'>
            <h1 className='text-white text-6xl font-[EB-Garamond] h-1/6 flex items-center ml-20'>Criaturas</h1>

            <div className="h-6/8 w-full flex justify-center items-center bg-amber-400">
              
            </div>
      </div>
    </>
  )
}

export default App
