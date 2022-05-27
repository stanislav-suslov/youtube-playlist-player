import { useAtom } from '@reatom/react';
import React from 'react';
import { playerAtom } from '../../store/playerAtom';
import styles from './styles.module.scss';

export const Player: React.FC = () => {
  const [videoId] = useAtom(playerAtom);

  return (
    <div className={styles.player}>
      {videoId ? (
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&fs=0&loop=1&controls=1`} frameBorder="0" />
      ) : (
        <div className={styles.placeholder}>Select video...</div>
      )}
    </div>
  );
};
