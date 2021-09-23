import React from 'react'


//contains individual songs
export default function Music() {
    return (
       <div>
            <button className="btn like-music" onClk={props.onClk}> Like
                </button>
                <p>
                    
                    {props.data[2].title}
                    <audio controls id="audiodemo"/>
                     <button className="dropbutton" ondrop={props.ondrop}>DROP</button>   
                     <div className="drop-options">
                         <a>
                             <button className="Delete">Delete</button>
                         </a>
                     </div>
                </p>
       </div>
    )
}
