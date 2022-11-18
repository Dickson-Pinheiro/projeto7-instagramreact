export default function Post({userImage, userName, image, lastLikeName, lastLikeImage, quantityLike}){
    return(
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={userImage}/>
            {userName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={image} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={lastLikeImage} />
            <div class="texto">
              Curtido por <strong>{lastLikeName}</strong> e <strong>outras {quantityLike} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}