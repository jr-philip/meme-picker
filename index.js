import { catsData } from "./data.js"

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")
const memeModalInner = document.getElementById("meme-modal-inner")
const memeModal = document.getElementById("meme-modal")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")

emotionRadios.addEventListener("change",hightLightCheckOption)// use of e.target.id 
memeModalCloseBtn.addEventListener("click", closeModal)
getImageBtn.addEventListener("click", renderCat)

function hightLightCheckOption(e) {
    const radios = document.getElementsByClassName("radio")
    for (let radio of radios) {
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function closeModal(){
    memeModal.style.display ="none"
}

function renderCat() {// the eventListener will call these as the first function 
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML = `
        <img
        class="cat-img"
        src="./image/${catObject.image}"
        alt="${catObject.alt}"
        >
    `
    memeModal.style.display = "flex"
}

function getSingleCatObject() {//then the renderCat() will call out these function so to know which cat to render
    const catsArray = getMatchingCatsArray()
    console.log(catsArray)
    if (catsArray.length === 1) {
        return catsArray[0]
    } else {
        const randomNumbers = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumbers]
    }
}

function getMatchingCatsArray(){//lastly getSingleCatObject will call out this function becoz it will provide arrays which will be narrowed down 
    if (document.querySelector("input[type='radio']:checked")){
        const selectedEmotion = document.querySelector("input[type='radio']:checked").value
        const isGif = gifsOnlyOption.checked

        const matchingCatsArray = catsData.filter(function(cat){//.filter method
            if(isGif){//or(isGif === true)
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif //cat.isGif === true
            }else{
                return cat.emotionTags.includes(selectedEmotion)
            } 
        })
        return matchingCatsArray
    }
} 

function getEmotionsArray(cats) { //these function creates the array
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

function renderEmotionsRadios(cats){// these function renders the array created
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
