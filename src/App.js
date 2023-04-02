import React, { useEffect, useState } from "react"
import "./App.css"
import Video from "./Pages/Video"
import db from "./config/firebase"
import { collection, getDocs } from "firebase/firestore/lite"

function App() {
  const [video, setVideos] = useState([]);
  async function getVideos() {
    const videoCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videoCollection);
    const videoList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="App__Video">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
