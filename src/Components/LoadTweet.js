import React, { useState } from "react";
function LoadTweet({tweet}){
    console.log("Load single tweet");
    const [likes,setLikes]=useState(tweet.likes);
    return(
        <React.Fragment>
            <p>{tweet.content}</p>
            <small onClick={()=>{setLikes(likes+1)}}>{likes} {'<3'}</small>
        </React.Fragment>
    );
}
export default LoadTweet;