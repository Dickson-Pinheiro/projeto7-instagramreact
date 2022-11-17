export default function Story({image, title}){
    return(
        <div class="story">
            <div class="imagem">
              <img src={image} />
            </div>
            <div class="usuario">
              {title}
            </div>
        </div>
    )
}