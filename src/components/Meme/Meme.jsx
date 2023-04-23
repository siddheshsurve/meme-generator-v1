import React from 'react'
import memesData from "../memesData"
import "./Meme.css"

function Meme() {

    let url //as used in two functions global declaration

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // created array then created index in between array.lenght() i.e 100
        url = memesArray[randomNumber].url
        // or const {url} = memesArray[randomNumber]
        console.log(url);
    }

  return (
    <main>
        <div className='form'>
            <input 
                type='text'
                placeholder='Top Text' 
                className='form--input'
            />
            <input 
                type='text' 
                placeholder='Bottom Text'
                className='form--input'
            />
            <button
                onClick={getMemeImage}
                className='form--button'
            >
                Get a new meme image 🖼
            </button>
        </div>
    </main>
  )
}

export default Meme