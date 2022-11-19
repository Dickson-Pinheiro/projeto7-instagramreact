import { useState } from "react"

export default function Post({ userImage, userName, image, lastLikeName, lastLikeImage, quantityLike }) {
  const [liked, setLiked] = useState(false)
  const [totalLikes, setTotalLikes] = useState(quantityLike)
  const [saved, setSaved] = useState(false)

  function likeButton(){
    if(!liked) {
      setTotalLikes(totalLikes + 1)
    } else {
      setTotalLikes(totalLikes - 1)
    }
    setLiked(!liked)
  }

  function likeImage(){
    if(liked) return
    setLiked(true)
    setTotalLikes(totalLikes+1)
  }

  function savePost(){
    setSaved(!saved)
  }

  return (
    <div class="post" data-test = "post">
      <div class="topo">
        <div class="usuario">
          <img src={userImage} />
          {userName}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal" ></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={image}
         onDoubleClick={likeImage}
         data-test = "post-image"
         />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={liked ? "heart" : "heart-outline"}
              style={{ color: liked ? "red" : "black" }}
              onClick = {likeButton}
              >
            </ion-icon>

            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon 
            name={saved ? "bookmark" : "bookmark-outline"}
            onClick = {savePost}
            data-test = "save-post"
            >
            </ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={lastLikeImage} />
          <div class="texto">
            Curtido por <strong>{lastLikeName}</strong> e <strong data-test = "like-post">outras <span>{totalLikes ? totalLikes : quantityLike}</span> pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}