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
        text: "Kratos, o guerreiro marcado por cicatrizes físicas e emocionais, retorna como uma figura complexa em God of War Ragnarök. Outrora um deus impiedoso, ele agora é um pai lutando para proteger Atreus e prepará-lo para um destino incerto. Em meio ao caos iminente do Ragnarök, Kratos enfrenta não apenas inimigos formidáveis, mas também os fantasmas de seu passado e os dilemas de seu presente. Guiado por sua força inabalável e sabedoria conquistada a duras penas, ele busca equilibrar o peso de suas ações com a responsabilidade de criar um legado para seu filho. Kratos não é apenas um herói; ele é um sobrevivente em constante evolução, desafiado a provar que mesmo deuses podem mudar seu destino."
    },
    {
        id: 2,
        name: "Atreus",
        image: atreusImg,
        text: "Em God of War Ragnarök, Atreus assume um papel central na narrativa, deixando de ser apenas o filho de Kratos para se tornar um protagonista com motivações próprias. Agora mais velho, confiante e curioso, ele está determinado a descobrir quem realmente é — não apenas como filho de um deus, mas também como alguém com laços profundos com os gigantes e um papel misterioso nas profecias do Ragnarök.Guiado por sua empatia, inteligência e coragem, Atreus questiona as decisões do pai e desafia os limites do destino. Ele luta para equilibrar o respeito por Kratos com a necessidade de trilhar seu próprio caminho, mesmo que isso signifique entrar em conflito com o mundo — ou com o próprio pai."
    },
    {
        id: 3,
        name: "Freya",
        image: freyaImg,
        text: "Freya é uma das personagens mais complexas do jogo. Após perder seu filho Baldur, ela é consumida pelo luto e pela sede de vingança contra Kratos. No entanto, seu arco não é puramente de ódio: ao longo da jornada, ela enfrenta escolhas difíceis que a fazem revisitar seus próprios valores e forças.Como uma deusa da Vanir com vasto conhecimento mágico e uma história marcada por traições, Freya representa a dor da perda, mas também a capacidade de superação. Em Ragnarök, ela transita entre inimiga e aliada, movida por emoções humanas intensas e pelo desejo de impedir que o mundo mergulhe de vez na destruição." 
    },
    {
        id: 4,
        name: "Thor",
        image: thorImg,
        text: "Thor é apresentado como uma força bruta imparável, diferente das versões idealizadas da mitologia. Em God of War Ragnarök, ele é uma figura devastadora e temida — mas também profundamente trágica. Sua relação com Odin é marcada por controle e medo, e sua identidade como guerreiro lendário esconde um homem atormentado pela culpa, pelo abuso e pela perda.Pai negligente, filho submisso, e instrumento de destruição dos Aesir, Thor carrega mais do que seu poderoso Mjölnir: ele carrega o peso de séculos de violência e servidão. Em sua luta contra Kratos, o confronto é tão emocional quanto físico, e o desfecho de sua história diz muito sobre redenção, legado e liberdade."


    },
    {
        id: 5,
        name: "Odin",
        image: odinImg,
        text: "Odin, em Ragnarök, é um deus diferente do que se espera. Astuto, manipulador e sempre dois passos à frente, ele se posiciona como mestre dos bastidores, controlando aliados e inimigos com palavras suaves e ameaças veladas.Sua obsessão por conhecimento e controle o transforma em uma figura perigosa — não pela força bruta, como Thor, mas por sua capacidade de enganar, seduzir e prometer o que nunca pretende cumprir. Em muitos aspectos, Odin representa o próprio destino: inescapável, ilusório e implacável. Sua presença no jogo é constante, mesmo quando ausente fisicamente, e seu impacto molda tudo o que Kratos, Atreus e os demais enfrentam."
    }
]

export default characters