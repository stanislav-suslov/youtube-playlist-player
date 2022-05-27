export interface Video {
  id: string;
  title: string;
  thumbnailUrl?: string;
  publishedAt: Date;
  addedToPlaylist: Date;
  channel: {
    id: string;
    title: string;
  };
}

export interface GetVideosResponse {
  nextPageToken?: string;
  totalVideosInPlaylist: number;
  videos: Video[];
}
