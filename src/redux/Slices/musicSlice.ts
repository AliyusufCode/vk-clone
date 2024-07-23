import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    currentTrackIndex: 0,
    isPlaying: true,
    audioRef: null,
    isPause: true,
    currentTime: 0,
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
    setAudioRef(state, action) {
      state.audioRef = action.payload;
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
  },
});

export const {
  setCurrentTrackIndex,
  setIsPlaying,
  setAudioRef,
  setIsPause,
  setCurrentTime,
} = musicSlice.actions;

export default musicSlice.reducer;
