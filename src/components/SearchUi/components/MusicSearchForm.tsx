import { useState } from 'react';

export default function MusicSearchForm() {
  const [isPlay, setIsPlay] = useState(false);

  const handleClick = () => {
    setIsPlay(!isPlay);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        오픈
      </button>
      <iframe
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        hidden={isPlay}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/L7cAqBQVjYI?si=4Qj8WBLmyHeRsEag"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </>
  );
}
