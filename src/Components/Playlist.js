import React from 'react'
import Music from './Music'
import "../Components/mediaitems.css"
//contains music to be displayed
export default function Playlist(props) {
   
    return (

        <div className="Container-PlayList">
            
                <h3 className="PList">PlayList</h3>
                {props.data.map((data)=>{
                        return ( <Music data={data} key={data.sno} onDelete={props.onDelete} />)
                })}
            
        </div>

    )
}
//<i className="fa fa-heart" aria-hidden="true" onClk={props.onClk}>{props.data[2].like++}</i> Like


