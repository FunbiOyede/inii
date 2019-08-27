import React, { Component } from 'react';
import axios from '../../axios.config';
import { Redirect } from 'react-router-dom';
class AddBookmark extends Component{

    state = {
        title:"",
        description:"",
        url:"",
        tag:"",
        isPosted:false,
        error: false,
        errorMessage:""
    }

    //getting input from multiple inputs
    getTitle = (e) =>{
       this.setState({
         ...this.state,
         [e.target.name]:e.target.value
       })
    }

    SubmitBookmark = (e) =>{
        e.preventDefault();
        this.setState({
            title:"",
            description:"",
            url:"",
            tag:""
        })
        const id = Math.floor(Math.random() * 10);
        const bookmark  = {
            Id:id,
            Title:this.state.title,
            Description:this.state.description,
            Url:this.state.url,
            Tag:this.state.tag
        }
        axios.post('/bookmark.json',bookmark)
        .then((res) =>{
            this.setState({
                isPosted:true
            })
        })
       .catch((err)=>{
           
            this.setState({
                error:true
            })
       })

    }


    render(){


        return(

            <div>
                {this.state.isPosted ? <Redirect to='/' /> : null}
                <h3>Add Bookmark</h3>
                <form>
                    <input value={this.state.title} onChange ={this.getTitle} type="" name="title" id="" placeholder="title"/>
                    <input  value={this.state.description} onChange ={this.getTitle} type="text" name="description" id="" placeholder="description"/>
                    <input  value={this.state.url}  onChange ={this.getTitle} type="url" name="url" id="" placeholder="url"/>
                    <input value={this.state.tag}  onChange ={this.getTitle} type="text" name="tag" id="" placeholder="tag"/>
                    <button onClick={this.SubmitBookmark}>Submit To inii</button>
                   
                </form>
                {this.state.error ? <p style={{color:'red'}}>Error adding bookmarks try again</p> :  null }
            </div>
        );
    }
}

export default AddBookmark;