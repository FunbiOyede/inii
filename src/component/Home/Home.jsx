import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import axios from '../../axios.config';
import Bk from '../../component/Bookmarks/Bk';
// import styles from './Home.module.css'

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoad:false,
            Bookmark:[],
            isFetched:false,
            isAdd:false,
            error:false
        }
       
    }

    

  
    
    // handles spinner
   

    

    componentDidMount(){
        // fetch bookmarks from storage
      
     
        setTimeout(() =>{
            this.setState({
                isLoad:true
            })
        },4000)


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
            console.log(err)
        })
    }

    // delete bookamrk
    
       deleteBookmark = (id) => {
       
      
        let copyBookmark = [...this.state.Bookmark];
        copyBookmark.splice(id,1);
        this.setState({
            Bookmark:copyBookmark
        })
   

            axios.delete('/bookmark.json',id)
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
                    <h2>All Bookmarks</h2>
                    <div>
                      {this.state.isLoad ? null : <Loader/>}
                        <div>
                            {this.state.isFetched ? <Bk isAdd Bookmark={this.state.Bookmark}   deleteBookmark={this.deleteBookmark}/> : <p >Add bookmark to get started</p>}
                            {this.state.error ? <p>Failed to load bookmarks</p> : null}
                        </div>
                    </div>
                    
            </div>

        );

    }
}

export default Home