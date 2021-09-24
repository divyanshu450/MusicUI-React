import React from 'react'
import "../Components/mediaitems.css"
import { useState } from 'react';

export default function Headbar(props) {

    const [query,setQuery] = useState("");
    const onsubmit = (e) => {
        e.preventDefault();
        
        props.search(query);
    }


    return (
        <div className="Container">
            <div className="Container-head">
                <h1>{props.user}</h1>
                
                <input type="text" placeholder="Search Music.." name="search" value={query} onChange={(e)=>{setQuery(e.target.value)}}>
                </input>
                
                
                <button type ="submit"><i className ="fa fa-search"/> 
                <img className="searchimage" src="http://localhost:3000/search_logo.jpg"/>
                </button>
                <br></br>
            </div>
            
            
        </div>
    )
}
