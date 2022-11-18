import Sugestoes from "./Sugestoes"

import imageCatanacomics from "../assets/catanacomics.svg"
import Usuario from "./Usuario"


export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario image={imageCatanacomics} userName="catanacomics" name="Catana"/>
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}