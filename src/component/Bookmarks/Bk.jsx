import React, { Component } from 'react';
import Display from '../Display/Display';
// import styles from './Bk.module.css



class Bk extends Component{

    render(){

        console.log(this.props)

        let bookmark  = this.props.Bookmark.map((bookmarks,index) =>{
            return <Display
             key={index}
            id={bookmarks.Id}
              description={bookmarks.Description} 
              Tag={bookmarks.Tag}
              Title={bookmarks.Title}
              Url={bookmarks.Url}
             
               />
        })


        return(
            <div>
                {bookmark}
            </div>
        );
    }
}

export default Bk;