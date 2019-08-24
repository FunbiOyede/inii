import React from 'react';
import Display from '../Display/Display';
// import styles from './Bk.module.css

const Bk = (props) =>{
    let bookmark  = props.Bookmark.map((bookmarks,index) =>{
        return <Display
         key={index}
          description={bookmarks.Description} 
          Tag={bookmarks.Tag}
          Title={bookmarks.Title}
          Url={bookmarks.Url}
           />
    })

    // console.log(props)
    return(
        <div>
            {bookmark}
        </div>
    );
};

export default Bk;