import React from 'react';

const Display = (props) =>{
    // console.log(props)
    return(
        <div>
            <h4>{props.Title}</h4>
            <p>{props.description}</p>
            <em>Tag:{props.Tag}</em>
            <a href={props.Url}>View</a>
            <button>Delete</button>
        </div>
    );
}
export default Display