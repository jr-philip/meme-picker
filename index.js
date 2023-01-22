import { catsData } from "./data.js"
const emotionRadios = document.getElementById("emotion-radios")

function getEmotionsArray(cats) {
    const catEmotions = []
    for (let cat of cats){
        for(let emotion of cat.emotionTags){
         catEmotions.push(emotion)
        }
    }
    return catEmotions
}

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `<div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">moody</label>
        </div>
        <div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">insomniac</label>
        </div>
          <div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">confused</label>
        </div>
          <div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">sad</label>
        </div>
          <div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">dominant</label>
        </div>
          <div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">happy</label>
        </div>
          <div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">relaxed</label>
        </div>
          <div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">hungry</label>
        </div>
          <div class="radio">
        <input 
        type="radio"
        id="emotion"
        value="emotion
        name="cat emotion
        >
        <label for="emotion">scared</label>
        </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
