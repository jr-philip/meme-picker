import { catsData } from "./data.js"
const emotionRadios = document.getElementById("emotion-radios")

emotionRadios.addEventListener("change",function(e){
    console.log(e.target.id)// use of e.target.id 
})

function getEmotionsArray(cats) {
    const catEmotions = []
    for (let cat of cats){
        for(let emotion of cat.emotionTags){
           if(!catEmotions.includes(emotion)){// use of both the .includes() operator and the logical not operator !
               catEmotions.push(emotion)
            } 
        }
    }
    return catEmotions
}  

function renderEmotionsRadios(cats){
    let radioItems = ` `
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input 
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="cat emotion"
            >
        </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
