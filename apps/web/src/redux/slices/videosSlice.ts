import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { VideoReduxType } from '@/types/Videos';

// Define a type for the slice state
interface VideosState {
  videos: VideoReduxType,
  originalVideos: VideoReduxType,
  selectedVideo: number | null,
  changed: boolean
}

// Define the initial state using that type
const initialState: VideosState = {
  videos: {},
  originalVideos: {},
  selectedVideo: null,
  changed: false,
};

export const videosSlice = createSlice({
  name: 'videos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setVideos: (state, { payload }: PayloadAction<VideoReduxType>) => (
      { ...state, videos: payload }),
    setOriginalVideos: (state, { payload }: PayloadAction<VideoReduxType>) => (
      { ...state, originalVideos: payload }),
    clearVideos: (state) => ({ ...state, videos: [] }),
    setSelectedVideo: (state, { payload }: PayloadAction<number>) => (
      { ...state, selectedVideo: payload }),
    clearSelectedVideo: (state) => ({ ...state, selectedVideo: null }),
    setTitle: (state, { payload }: PayloadAction<{ videoIndex: number, value: string }>) => {
      const { videoIndex, value } = payload;
      state.videos[videoIndex].title = value;

      if (value !== state.originalVideos[videoIndex].title) {
        state.changed = true;
      } else {
        state.changed = false;
      }
    },
    updateVideos: (state) => ({ ...state, originalVideos: state.videos, changed: false }),
  },
});

export const {
  setVideos,
  clearVideos,
  setOriginalVideos,
  setSelectedVideo,
  clearSelectedVideo,
  setTitle,
  updateVideos,
} = videosSlice.actions;

export default videosSlice.reducer;
