import React, { useEffect, useState } from "react";
import LoadTweets from "./Components/LoadTweets";
import WriteTweet from "./Components/WriteTweet";
function App() {
  const [tweets,setTweets]=useState([]);
  const addTweet=(tweet)=>{
    setTweets([...tweets,tweet]);
  }
  useEffect(()=>{
    console.log(tweets);
  },[tweets])
  return (
    <div className="App">
      <WriteTweet addTweet={addTweet}/>
      <LoadTweets tweets={tweets}/>
    </div>
  );
}

export default App;
