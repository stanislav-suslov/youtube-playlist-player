import React from 'react';
import { useAtom } from '@reatom/react';
import { Player } from '../../components/Player/Player';
import { MemoizedPlaylistItem } from '../../components/PlaylistItem/PlaylistItem';
import { playerAtom } from '../../store/playerAtom';
import styles from './styles.module.scss';
import { Status } from '../../components/Status/Status';
import { MemoizedPlaylistForm } from '../../components/PlaylistForm/PlaylistForm';
import { playlistVideosAtom } from '../../store/playlistAtom';

export const IndexPage: React.FC = () => {
  const [videos] = useAtom(playlistVideosAtom);
  const [playerVideoId, { set }] = useAtom(playerAtom);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerControls}>
          <div className={styles.headerControlsContainer}>
            <MemoizedPlaylistForm />
            <Status />
          </div>
        </div>
        <div className={styles.headerPlayer}>
          <Player />
        </div>
      </div>
      <div>
        <div className={styles.videos}>
          {videos.length > 0 &&
            videos.map((video) => (
              <MemoizedPlaylistItem key={video.id} video={video} onClick={set} current={video.id === playerVideoId} />
            ))}
        </div>
      </div>
    </div>
  );
};
