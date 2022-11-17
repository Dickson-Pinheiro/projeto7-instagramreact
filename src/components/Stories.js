import imageGag from "../assets/9gag.svg"
import imageMeowed from "../assets/meowed.svg"
import imageBarked from "../assets/barked.svg"
import imageNathanwpylestrangeplanet from "../assets/nathanwpylestrangeplanet.svg"
import imageWawawicomics from "../assets/wawawicomics.svg"
import imageRespondeai from "../assets/respondeai.svg"
import imageFilomoderna from "../assets/filomoderna.svg"
import imageMemeriagourmet from "../assets/memeriagourmet.svg"

import Story from "./Story"


export default function Stories(){
    let dataStories = [
        {
            title: "9gag",
            image: imageGag
        },
        {
            title: "meowed",
            image: imageMeowed
        },
        {
            title: "barked",
            image: imageBarked
        },
        {
            title: "athanwpylestrangeplanet",
            image: imageNathanwpylestrangeplanet
        },
        {
            title: "wawawicomics",
            image: imageWawawicomics
        },
        {
            title: "respondeai",
            image: imageRespondeai
        },
        {
            title: "filomoderna",
            image: imageFilomoderna
        },
        {
            title: "memeriagourmet",
            image: imageMemeriagourmet
        }
    ]
    return(
        <div class="stories">
            {
                dataStories.map(story => {
                    return (
                        <Story image={story.image} title={story.title} key={story.title}/> 
                    )
                })
            }
        </div>
    )
}