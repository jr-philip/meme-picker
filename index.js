import { catsData } from "./data.js"
const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")

emotionRadios.addEventListener("change",hightLightCheckOption)// use of e.target.id 
getImageBtn.addEventListener("click", getMatchingCatsArray)


function hightLightCheckOption(e){

    const radios = document.getElementsByClassName("radio")
    for (let radio of radios){
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}
  

function getMatchingCatsArray(){
    if (document.querySelector("input[type='radio']:checked")){
        const selectedEmotion = document.querySelector("input[type='radio']:checked").value
        const isGif = gifsOnlyOption.checked
        const catsFilter = catsData.filter(function(cat){
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }else{
                return cat.emotionTags.includes(selectedEmotion)
            }
           
        })
        return catsFilter
    }
}

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
