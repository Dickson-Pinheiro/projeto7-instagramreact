import { useState } from "react"

export default function Usuario({ image, userName, name }) {

  const [newUserName, setNewUserName] = useState("")
  const [newImageUser, setNewImageUser] = useState("")


  function modifyName() {
    setNewUserName(prompt("Qual o seu nome?"))
  }

  function modifyImage() {
    setNewImageUser(prompt("link da imagem para o seu perfil :)"))
  }

  return (
    <div class="usuario" data-test="user">
      <img
        src={newImageUser ? newImageUser : image}
        onClick={modifyImage}
        data-test = "profile-image"
      />
      <div class="texto">
        <strong data-test="name">{userName}</strong>
        <span>
          {newUserName ? newUserName : name}
          <ion-icon
            onClick={modifyName}
            name="pencil"
            data-test = "edit-name"
            >
            </ion-icon>
        </span>
      </div>
    </div>
  )
}