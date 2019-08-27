import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import axios from '../../axios.config';
import Bk from '../../component/Bookmarks/Bk';
// import styles from './Home.module.css'

class Home extends Component{


    state = {
        isLoad:false,
        Bookmark:[],
        isFetched:false,
        isAdd:false,
        error:false
    }

  
    
    // handles spinner
    componentWillMount(){
        setTimeout(() =>{
            this.setState({
                isLoad:true
            })
        },4000)
    }

    

    componentDidMount(){
        // fetch bookmarks from storage
      
     
        axios.get('/bookmark.json')
        .then((res)=>{
    
           let fetchedBookmarks =  res.data;
           let  bookmarks = Object.values(fetchedBookmarks);

            this.setState({
                Bookmark:bookmarks,
                isFetched:true
            })

           
          
        })

        .catch((err)=>{
            this.setState({
                error:true
            })
        })
    }

    // delete bookamrk
    
    render(){
        return(
            <div>
                    <h2>All Bookmarks</h2>
                    <div>
                      {this.state.isLoad ? null : <Loader/>}
                        <div>
                            {this.state.isFetched ? <Bk isAdd Bookmark={this.state.Bookmark}/> : <p >Add bookmark to get started</p>}
                            {this.state.error ? <p>Failed to load bookmarks</p> : null}
                        </div>
                    </div>
                    
            </div>

        );

    }
}

export default Home