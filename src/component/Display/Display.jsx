import React, { Component } from 'react';
import axios from '../../axios.config';

class Display extends Component{


    deleteBookmark = () => {
           axios.delete('/bookmark.json',this.props.id)
           .then((res) => {
               console.log(res)
           })
           .catch((err) =>{
            console.log(err)
           })
    }
    render(){
        return(

            <div>
               
            <h4>{this.props.Title}</h4>
            <p>{this.props.description}</p>
            <em>Tag:{this.props.Tag}</em>
            <a href={this.props.Url}>View</a>
            <button onClick={this.deleteBookmark}>Delete</button>
        </div>
        );
    }
}

export default Display