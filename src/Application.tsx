import { YoutubeApi } from './api/YoutubeApi/YoutubeApi';
import { IndexPage } from './pages/IndexPage/IndexPage';

const youtubeApiKey = 'AIzaSyD2Z0rqATmtOSMsp0v0itCpaH53OmVDJ2Y';

export const modules = {
  youtube: new YoutubeApi(youtubeApiKey),
} as const;

export const Application = IndexPage;
