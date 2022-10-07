import React, { useState } from 'react'
import memesData from '../memesData.js'

export default function Meme() {
  
  //const [memeImage, setMemeImage] = useState();

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  
  function generateImage(){
    const memesArray = memesData.data.memes
    const randomImage = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomImage].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          className="form__input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button className="form__button" onClick={generateImage}>
          Get a new meme image 🖼{" "}
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme__image" alt='random meme'/>
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
    



  );
}
