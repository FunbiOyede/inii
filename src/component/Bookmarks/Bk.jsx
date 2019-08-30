import React, { Component } from 'react';
import Display from '../Display/Display';
// import styles from './Bk.module.css
// import axios from '../../axios.config';


class Bk extends Component{


    
  
    render(){

        

        let bookmark  = this.props.Bookmark.map((bookmarks,index) =>{
            return <Display
             key={index}
            id={index}

              description={bookmarks.Description} 
              Tag={bookmarks.Tag}
              Title={bookmarks.Title}
              Url={bookmarks.Url}
              deleteBookmark={this.props.deleteBookmark}
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