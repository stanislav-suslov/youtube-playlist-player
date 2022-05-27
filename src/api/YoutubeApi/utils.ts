import { GetVideosResponse, Video } from './types';
import { GetPlaylistItemsResponse, Item } from './GetPlaylistItemsResponse.types';

export const toVideo = (playlistItem: Item): Video => ({
  id: playlistItem.contentDetails.videoId,
  publishedAt: new Date(playlistItem.contentDetails.videoPublishedAt),
  addedToPlaylist: new Date(playlistItem.snippet.publishedAt),
  channel: {
    id: playlistItem.snippet.videoOwnerChannelId,
    title: playlistItem.snippet.videoOwnerChannelTitle,
  },
  title: playlistItem.snippet.title,
  thumbnailUrl:
    playlistItem.snippet.thumbnails.medium?.url ||
    playlistItem.snippet.thumbnails.standard?.url ||
    playlistItem.snippet.thumbnails.default?.url,
});

export const toVideosResponse = (response: GetPlaylistItemsResponse): GetVideosResponse => ({
  nextPageToken: response.nextPageToken,
  totalVideosInPlaylist: response.pageInfo.totalResults,
  videos: response.items.map(toVideo),
});
