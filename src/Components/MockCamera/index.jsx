/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from 'react';
import play from "../../img/botao-play.png";
import mockCamera from "../../img/mock_camera_2.png";

export const MockCamera = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handlePlayClick = () => {
      setVideoLoaded(true);
    };
  
    return (
      <div>
        {videoLoaded ? (
          <iframe
            src="https://giphy.com/embed/jVCR8lgHmdQYvuXmOh"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div>
              <img
                src={mockCamera}
                alt="Play"
                style={{
                  width: '480px',
                  height: '270px',
                  cursor: 'pointer',
                }}
                onClick={handlePlayClick}
              />
            </div>
            
          </>
        )}
      </div>
    );
};
