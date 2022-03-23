import React, { useEffect, useState } from "react";
function WriteTweet({addTweet}){
    const publishTweet=(x)=>{
        x.preventDefault();
        addTweet({
            content:x.target.tweetContent.value,
            likes:0
        });
        x.target.reset();
    }
    return(
        <form onSubmit={(e)=>{publishTweet(e)}}>
            <input type="text" placeholder="Some tweet" name="tweetContent"/>
            <input type="submit" value="Publish"/>
        </form>
    );
}
export default WriteTweet;