import React, { useState } from 'react';
import './VolumeControl.css';

type VolumeControlProps = {
  onChangeVolume: (volume: number) => void;
};

const VolumeControl: React.FC<VolumeControlProps> = ({ onChangeVolume }) => {
  const [volume, setVolume] = useState(50);

  const increaseVolume = () => {
    if (volume < 100) {
      const newVolume = volume + 5;
      setVolume(newVolume);
      onChangeVolume(newVolume);
    }
  };

  const decreaseVolume = () => {
    if (volume > 0) {
      const newVolume = volume - 5;
      setVolume(newVolume);
      onChangeVolume(newVolume);
    }
  };

  return (
    <div className="volume-control">
      <button onClick={decreaseVolume}>🔉</button>
      <span>Volume: {volume}</span>
      <button onClick={increaseVolume}>🔊</button>
    </div>
  );
};

export default VolumeControl;
