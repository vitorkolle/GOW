import kratosImg from "./characterImg/kratosImg.svg"
import atreusImg from "./characterImg/atreusImg.svg"
import freyaImg from "./characterImg/freyaImg.svg"
import thorImg from "./characterImg/thorImg.svg"
import odinImg from "./characterImg/odinImg.svg"

type Character = {
    id: number,
    name: string,
    image: string,
    text: string
}

let characters: Character[] = [
    {
        id: 1,
        name: "Kratos",
        image: kratosImg,
        text: "Kratos, o guerreiro marcado por cicatrizes físicas e emocionais, retorna como uma figura complexa em God of War Ragnarök. Outrora um deus impiedoso, ele agora é um pai lutando para proteger Atreus e prepará-lo para um destino incerto. Em meio ao caos iminente do Ragnarök, Kratos enfrenta não apenas inimigos formidáveis, mas também os fantasmas de seu passado e os dilemas de seu presente. Guiado por sua força inabalável e sabedoria conquistada a duras penas, ele busca equilibrar o peso de suas ações com a responsabilidade de criar um legado para seu filho. Kratos não é apenas um herói; ele é um sobrevivente em constante evolução, desafiado a provar que mesmo deuses podem mudar seu destino.Nesta nova jornada, Kratos é mais do que um guerreiro ele é a personificação da resistência e da redenção."
    },
    {
        id: 2,
        name: "Atreus",
        image: atreusImg,
        text: "Em God of War Ragnarök, Atreus assume um papel central na narrativa, deixando de ser apenas o filho de Kratos para se tornar um protagonista com motivações próprias. Agora mais velho, confiante e curioso, ele está determinado a descobrir quem realmente é — não apenas como filho de um deus, mas também como alguém com laços profundos com os gigantes e um papel misterioso nas profecias do Ragnarök.Guiado por sua empatia, inteligência e coragem, Atreus questiona as decisões do pai e desafia os limites do destino. Ele luta para equilibrar o respeito por Kratos com a necessidade de trilhar seu próprio caminho, mesmo que isso signifique entrar em conflito com o mundo — ou com o próprio pai.Atreus representa a próxima geração de heróis: impetuoso, sensível e cheio de perguntas. Em um mundo que desmorona, ele busca não só sobreviver, mas entender o que significa ser parte de algo maior."
    },
    {
        id: 3,
        name: "Freya",
        image: freyaImg,
        text: "Freya, outrora aliada fiel de Kratos, retorna como uma figura trágica e determinada. Após a morte de seu filho Baldur, ela é consumida pelo luto e pelo desejo de vingança. Porém, ao longo da história, ela se vê dividida entre o ódio e a necessidade de lutar contra um mal maior. Em Ragnarök, Freya representa a dor da perda e a força de uma deusa que, mesmo ferida, não hesita em empunhar sua espada novamente."
    },
    {
        id: 4,
        name: "Thor",
        image: thorImg,
        text: "Violento, brutal e movido por uma fúria quase incontrolável, Thor é a mão direita de Odin e um dos maiores antagonistas do jogo. Ele não é apenas um guerreiro lendário, mas também um pai falho e um homem atormentado por suas próprias ações. Em Ragnarök, ele personifica a força destrutiva dos Aesir — mas também a tragédia de um deus que perdeu o controle de sua humanidade."
    },
    {
        id: 5,
        name: "Odin",
        image: odinImg,
        text: "Manipulador, carismático e implacável, Odin é o mestre por trás dos segredos e mentiras que envolvem os Nove Reinos. Ao contrário da figura nobre que muitos imaginam, ele é um tirano que usa o conhecimento como arma e a profecia como escudo. Em Ragnarök, Odin é tanto o inimigo supremo quanto o símbolo da obsessão pelo controle absoluto sobre o destino."
    }
]

export default characters