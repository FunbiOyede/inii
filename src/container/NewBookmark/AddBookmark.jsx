import React, { Component } from 'react';

class AddBookmark extends Component{

    state = {
        title:"",
        description:"",
        url:"",
        tag:""
    }

    getTitle = (e) =>{
       this.setState({
         ...this.state,
         [e.target.name]:e.target.value
       })
    }
    render(){
        return(

            <div>
                <h3>Add Bookmark</h3>
                <form>
                    <input value={this.state.title} onChange ={this.getTitle} type="" name="title" id=""/>
                    <input  value={this.state.description} onChange ={this.getTitle} type="text" name="description" id=""/>
                    <input  value={this.state.url}  onChange ={this.getTitle} type="url" name="url" id=""/>
                    <input value={this.state.tag}  onChange ={this.getTitle} type="text" name="tag" id=""/>
                    <button>Submit To inii</button>
                </form>
            </div>
        );
    }
}

export default AddBookmark;