export default function Usuario({image, userName, name}){
    return(
        <div class="usuario">
          <img src={image} />
          <div class="texto">
            <strong>{userName}</strong>
            <span>
              {name}
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}