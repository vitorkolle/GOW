import kratosImg from "./characterImg/kratosImg.png"

type Character = {
    id: number,
    name: string,
    image: string,
    text: string
}

let characters : Character[] = [
    {
        id: 1,
        name: "Kratos",
        image: kratosImg,
        text: "Kratos, o guerreiro marcado por cicatrizes físicas e emocionais, retorna como uma figura complexa em God of War Ragnarök. Outrora um deus impiedoso, ele agora é um pai lutando para proteger Atreus e prepará-lo para um destino incerto. Em meio ao caos iminente do Ragnarök, Kratos enfrenta não apenas inimigos formidáveis, mas também os fantasmas de seu passado e os dilemas de seu presente. Guiado por sua força inabalável e sabedoria conquistada a duras penas, ele busca equilibrar o peso de suas ações com a responsabilidade de criar um legado para seu filho. Kratos não é apenas um herói; ele é um sobrevivente em constante evolução, desafiado a provar que mesmo deuses podem mudar seu destino.Nesta nova jornada, Kratos é mais do que um guerreiro ele é a personificação da resistência e da redenção."
    },
    {
        id: 2,
        name: "Atreus",
        image: "./assets/characters/atreus.png",
        text: ""
    },
    {
        id: 3,
        name: "Ares",
        image: "",
        text: ""
    }
]

export default characters