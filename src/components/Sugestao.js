export default function ({image, userName, isFriend}) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={image} />
                <div class="texto">
                    <div class="nome">{userName}</div>
                    <div class="razao">{isFriend ? "Segue você" : "Novo no instagram"}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}