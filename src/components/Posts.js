import Post from "./Post"

import phoneCat from "../assets/gato-telefone.svg"
import dog from "../assets/dog.svg"

import imageMeowed from "../assets/meowed.svg"
import imageRespondeai from "../assets/respondeai.svg"
import imageBarked from "../assets/barked.svg"
import imageAdorableAnimals from "../assets/adorable_animals.svg"


export default function Posts(){
    let postsData = [
        {
            userImage: imageMeowed,
            userName: "meowed",
            image: phoneCat,
            lastLikeName: "respondeai",
            lastLikeImage: imageRespondeai,
            quantityLike: 101523

        },
        {
            userImage: imageBarked,
            userName: "berked",
            image: dog,
            lastLikeName: "adorable_animals",
            lastLikeImage: imageAdorableAnimals,
            quantityLike: 99159
        }
    ]


    return(
        <div class="posts">
            {postsData.map(post => <Post image={post.image} userName={post.userName} userImage={post.userImage} lastLikeName={post.lastLikeName} lastLikeImage={post.lastLikeImage} quantityLike={post.quantityLike}/>)}
        </div>
    )
}