import React, { useState, useRef } from 'react';
import Button from '../Button';
import './Board.css';
import VolumeControl from '../VolumeControl';

type BoardProps = {
  sounds: string[];
};

const Board: React.FC<BoardProps> = ({ sounds }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState<number>(50);
  const [selectedSet, setSelectedSet] = useState<number>(1);

  const playSound = (sound: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = require(`../../sounds/soundset${selectedSet}/${sound}`);
      audioRef.current.volume = volume / 100;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const changeVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const selectSoundSet = (setNumber: number) => {
    setSelectedSet(setNumber);
  };

  return (
    <div className="board">
      <div className="sound-set-selector">
        <button
          onClick={() => selectSoundSet(1)}
          className={selectedSet === 1 ? 'selected' : ''}
        >
          ⓵
        </button>
      </div>
      <div className="sound-set-selector">
        <button
          onClick={() => selectSoundSet(2)}
          className={selectedSet === 2 ? 'selected' : ''}
        >
          ⓶
        </button>
      </div>
      <div className="sound-set-selector">
        <button
          onClick={() => selectSoundSet(3)}
          className={selectedSet === 3 ? 'selected' : ''}
        >
          ⓷
        </button>
      </div>
      <audio ref={audioRef} />
      {sounds.map((sound, index) => (
        <Button key={index} text={''} onClick={() => playSound(sound)} />
      ))}
      <Button
        text="🔇"
        onClick={pauseSound}
        className="pause-button"
        disabled={!isPlaying}
      />
      <VolumeControl onChangeVolume={changeVolume} />
    </div>
  );
};

export default Board;
