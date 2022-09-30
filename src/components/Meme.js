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
  return (
    <main>
      <div className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Top text"
          name="name"
        />

        <input
          className="form__input"
          type="text"
          placeholder="Bottom text"
          name="name"
        />

        <button className="form__button" onClick={generateImage}>
          Get a new meme image 🖼{" "}
        </button>
      </div>
      <img className='meme__image' 
       src={meme.randomImage} alt="meme"
      />

    </main>
  );
}
