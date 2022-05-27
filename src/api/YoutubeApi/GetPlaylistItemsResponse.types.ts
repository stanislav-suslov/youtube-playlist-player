/* Generated with quicktype.io */

export interface GetPlaylistItemsResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind: ItemKind;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  status: Status;
}

export interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}

export enum ItemKind {
  YoutubePlaylistItem = 'youtube#playlistItem',
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceID;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface ResourceID {
  kind: string;
  videoId: string;
}

export interface Thumbnails {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Status {
  privacyStatus: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
