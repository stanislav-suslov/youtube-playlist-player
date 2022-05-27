import React from 'react';
import { useAtom } from '@reatom/react';
import {
  PlaylistStatus,
  playlistStatusAtom,
  playlistVideosAtom,
  playlistVideosTotalAtom,
} from '../../store/playlistAtom';
import styles from './styles.module.scss';

function getLabel(status: PlaylistStatus, videosTotal: number | undefined, videosLoaded: number): string {
  switch (status) {
    case 'ready':
      return 'Ready to load playlist';
    case 'loading':
      return typeof videosTotal !== 'undefined'
        ? `Loaded ${videosLoaded} of ${videosTotal}...`
        : `Loaded ${videosLoaded}...`;
    case 'loaded':
      return `Loaded ${videosTotal || videosLoaded} videos`;
  }
}

export const Status: React.FC = () => {
  const [status] = useAtom(playlistStatusAtom);
  const [playlistVideosTotal] = useAtom(playlistVideosTotalAtom);
  const [videos] = useAtom(playlistVideosAtom);

  return <div className={styles.root}>{getLabel(status, playlistVideosTotal, videos.length)}</div>;
};
