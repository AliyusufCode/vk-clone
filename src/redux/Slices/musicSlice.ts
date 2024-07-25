import { createSlice } from "@reduxjs/toolkit";
type MusicType = {
  image?: string;
  name: string;
  executor: string;
  id: number;
  audio: string;
};

const musicSlice = createSlice({
  name: "music",
  initialState: {
    currentTrackIndex: 132222222222,
    isPlaying: false,
    isPause: true,
    currentTime: 0,
    songs: [] as MusicType[],
  },
  reducers: {
    setCurrentTrackIndex(state, action) {
      state.currentTrackIndex = action.payload;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setIsPause(state, action) {
      state.isPause = action.payload;
    },

    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
    setSongs(state, action) {
      state.songs = action.payload;
    },
  },
});

export const {
  setCurrentTrackIndex,
  setIsPlaying,
  setSongs,
  setIsPause,
  setCurrentTime,
} = musicSlice.actions;

export default musicSlice.reducer;
