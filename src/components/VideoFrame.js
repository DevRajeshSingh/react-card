import React from "react";
import { useEffect  ,useContext} from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../context/dataContext";

const VideoFrame = () => {
  const { watchHistory ,setWatchHistory } = useContext(DataContext);
  useEffect(() => {
    setWatchHistory([...watchHistory , params.id]);
  }, []);
  const params = useParams();
  return (
    <div className="container">
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${params.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default VideoFrame;
