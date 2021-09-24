import React from 'react'
import { useState } from 'react';
import "../Components/mediaitems.css"
import './mediaitems.css'
//import '../App.css'

//contains individual song
export default function Music({data, onDelete}) {

    const [likes, setLikes] = useState(Number(data.like));
    const onClk = () => {
        const likeCount = Number(data.like) + 1;
        setLikes(likeCount);
    }
    
    return (
       <div className="PlayList" >
           <div className="Like-Button">
                <p><button className="btn like-music" onClick={onClk}> {likes} Like
                </button></p>
           </div>
                
            
            
                
                <h3 className="Song-Detail">{data.title}<br></br><p className="Song-sub" >{data.subtitle}</p></h3> 
                

                <div className="Audio-Bar"><audio controls id="audio">
                    <source src="music.mp3" type="audio/mpeg" /></audio>
                    
                </div>
                <div className="Delete-Button">
                <button className="Delete" onClick={() => { onDelete(data) }}>Delete</button> 
                </div>

                
                     
                
       </div>
    )
}
