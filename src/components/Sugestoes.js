import imageBadVibes from "../assets/bad.vibes.memes.svg"
import imageChibirdart from "../assets/chibirdart.svg"
import imageRazoesparaacreditar from "../assets/razoesparaacreditar.svg"
import imageAdorableAnimals from "../assets/adorable_animals.svg"
import imageSmallcutecats from "../assets/smallcutecats.svg"
import Sugestao from "./Sugestao"

export default function Sugestoes() {
    let dataSugestoes = [
        {
            image: imageBadVibes,
            userName: "bad.vibes.memes",
            isFriend: true
        },
        {
            image: imageChibirdart,
            userName: "chibirdart",
            isFriend: true
        },
        {
            image: imageRazoesparaacreditar,
            userName: "razoesparaacreditar",
            isFriend: false
        },
        {
            image: imageAdorableAnimals,
            userName: "adorable_animals",
            isFriend: true
        },
        {
            image: imageSmallcutecats,
            userName: "smallcutecats",
            isFriend: true
        }
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {dataSugestoes.map(sugestao => <Sugestao image={sugestao.image} userName={sugestao.userName} isFriend={sugestao.isFriend} />)}
        </div>
    )
}