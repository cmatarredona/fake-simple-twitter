import React from "react";
import LoadTweet from "./LoadTweet";
function LoadTweets({tweets}){
    return(
        <React.Fragment>
            {tweets.map((tweet,)=>{
                return <LoadTweet tweet={tweet}/>
            })}
        </React.Fragment>
    );
}
export default LoadTweets;