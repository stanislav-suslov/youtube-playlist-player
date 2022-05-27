import { urlgun } from '../../utils/urlgun';
import { GetVideosResponse } from './types';
import { GetPlaylistItemsResponse } from './GetPlaylistItemsResponse.types';
import { toVideosResponse } from './utils';

export class YoutubeApi {
  constructor(private apiKey: string) {}

  private fetchPlaylistItems(playlistId: string, pageToken?: string): Promise<GetPlaylistItemsResponse> {
    const query = {
      part: 'id,contentDetails,snippet,status',
      maxResults: 50,
      playlistId,
      key: this.apiKey,
      pageToken,
    };

    return urlgun.get<GetPlaylistItemsResponse>('https://www.googleapis.com/youtube/v3/playlistItems', query);
  }

  getPlaylistItems(playlistId: string, pageToken?: string): Promise<GetVideosResponse> {
    return this.fetchPlaylistItems(playlistId, pageToken).then(toVideosResponse);
  }
}
