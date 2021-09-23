import React from 'react'

export default function Headbar(props) {
    return (
        <div className="Conatainer">
            <div className="Container-head">
                <h1>{props.user}</h1>
                <input type="text" placeholder="Search Music.." name="search"/>
                <button type ="submit"><i className ="fa fa-search"/></button>
            </div>
            
            <div className="Songs">

            </div>
        </div>
    )
}
