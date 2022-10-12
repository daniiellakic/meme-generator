import React, { useEffect, useState } from 'react'
import html2canvas from "html2canvas";

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bid.jpg" 
  })

  const [allMemes, setAllMemes] = useState([])

  // API call
  // Fetching data from API
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json()) //parsing data from json to js
    .then(data => 
      setAllMemes(data.data.memes))// data back
      setDownload(meme.url) 
  }, [])
  
  function generateImage(){
    const randomImage = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomImage].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
      
    }))
  }
   // Method to change the value of input fields
  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  const [download, setDownload] = useState(null)
  
  const downloadMeme = ()=> {
    fetch(download, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "meme.png"); 
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
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
      <br />
      <button  onClick={e => downloadMeme(e)} className="download__button">
        Download
      </button>
    </main>
  );
}
