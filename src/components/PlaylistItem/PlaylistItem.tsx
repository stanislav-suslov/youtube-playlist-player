import classNames from 'classnames';
import React, { memo } from 'react';
import { Video } from '../../api/YoutubeApi/types';
import styles from './styles.module.scss';

export interface Props {
  video: Video;
  current?: boolean;
  onClick: (id: string) => void;
}

export const PlaylistItem: React.FC<Props> = ({ video, current, onClick }) => {
  return (
    <div
      className={classNames({
        [styles.root]: true,
        [styles.current]: current,
      })}
      onClick={() => onClick(video.id)}
    >
      <div className={styles.fade} />
      <div className={styles.title}>{video.title}</div>
      <img className={styles.thumbnail} src={video.thumbnailUrl} loading="lazy" />
    </div>
  );
};

export const MemoizedPlaylistItem = memo(PlaylistItem);
