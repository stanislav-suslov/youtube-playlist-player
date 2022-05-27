import React, { memo, useRef } from 'react';
import { loadVideos } from '../../store/playlistAtom';
import styles from './styles.module.scss';

export const PlaylistForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const loadPlaylist: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputRef.current) {
      loadVideos(inputRef.current.value);
    }
  };

  const fillInput = (playlistId: string) => {
    if (inputRef.current) {
      inputRef.current.value = playlistId;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.preparedPlaylists}>
        <button type="button" onClick={() => fillInput('PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj')}>
          Pop
        </button>
        <button type="button" onClick={() => fillInput('PLhGxwqriFAqsaOgQrA0gB-jUykrHoh3bq')}>
          Rock
        </button>
        <button type="button" onClick={() => fillInput('PLLKn0WOatRSm-NiejJK1cCp9vV177jMhw')}>
          Rap
        </button>
      </div>
      <form onSubmit={loadPlaylist}>
        <input ref={inputRef} placeholder="Enter playlist id" required autoFocus />
        <button type="submit" className={styles.buttonSubmit}>
          Load
        </button>
      </form>
    </div>
  );
};

export const MemoizedPlaylistForm = memo(PlaylistForm);
