import { modules } from '../Application';
import { Video } from '../api/YoutubeApi/types';
import { createStringAtom, createPrimitiveAtom } from '@reatom/core/primitives';

export type PlaylistStatus = 'ready' | 'loading' | 'loaded';

export const playlistStatusAtom = createStringAtom<PlaylistStatus>('ready');
export const playlistVideosAtom = createPrimitiveAtom<Video[]>([]);
export const playlistVideosTotalAtom = createPrimitiveAtom<number | undefined>(undefined);

function setAtomsInitialLoading() {
  playlistStatusAtom.set.dispatch('loading');
  playlistVideosTotalAtom.set.dispatch(undefined);
  playlistVideosAtom.set.dispatch([]);
}

export async function loadVideos(playlistId: string) {
  setAtomsInitialLoading();

  const appendVideos = (videos: Video[], videosTotal: number) => {
    playlistVideosAtom.change.dispatch((state) => [...state, ...videos]);
    playlistVideosTotalAtom.set.dispatch(videosTotal);
  };

  loadPlaylist(appendVideos, playlistId)
    .then(() => playlistStatusAtom.set.dispatch('loaded'))
    .catch((reason) => {
      playlistStatusAtom.set.dispatch('ready');

      if (reason instanceof Response) {
        if (reason.status === 404) {
          return alert('Wrong playlist ID. Please check correctness.');
        }
      }

      alert('Unknown error. Please try again.\nCheck DevTools for more info.');
      console.error(reason);
    });
}

async function loadPlaylist(
  onLoaded: (videos: Video[], videosTotal: number) => void,
  playlistId: string,
  pageToken?: string
) {
  return new Promise<void>((resolve, reject) => {
    modules.youtube
      .getPlaylistItems(playlistId, pageToken)
      .then(({ videos, totalVideosInPlaylist, nextPageToken }) => {
        onLoaded(videos, totalVideosInPlaylist);

        if (typeof nextPageToken !== 'undefined') {
          return resolve(loadPlaylist(onLoaded, playlistId, nextPageToken));
        } else {
          return resolve();
        }
      })
      .catch(reject);
  });
}
