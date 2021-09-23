import React from 'react'

//contains music to be displayed
export default function Playlist(props) {
    return (

        <div className="Container-PlayList">
            <div className="PlayList">
            
                <p>
                    <button className="btn like-music" onClick={props.onClk}>
                    {props.data[2].like++} Like 
                        </button>
                    {props.data[2].title}
                    <audio controls id="audio"/>
                     <button className="dropbutton" onClick={props.ondrop}>DROP</button> 
                     <div className="drop-options">
                         <a>
                             <button className="Delete" onClick={props.onDelete}>Delete</button>
                         </a>
                     </div>
                       
                     
                </p>

            </div>
        </div>

    )
}
//<i className="fa fa-heart" aria-hidden="true" onClk={props.onClk}>{props.data[2].like++}</i> Like