import React from 'react';
// component renders conditionally

const Home = (props) => {
    let isEmpty = <p>Add Bookmarks to get started</p>
    return(
        <div>
            <h2>All Bookmarks</h2>
            <div>
                {isEmpty}
            </div>
        </div>
    );
}

export default Home