import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MusicType = {
  image?: string;
  name: string;
  executor: string;
  id: number;
  audio: string;
};

interface MusicState {
  currentTrackIndex: number;
  isPlaying: boolean;
  isPause: boolean;
  currentTime: number;
  songs: MusicType[];
  currentTrack: MusicType | null;
}

const initialState: MusicState = {
  currentTrackIndex: -1,
  isPlaying: false,
  isPause: true,
  currentTime: 0,
  songs: [],
  currentTrack: null,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setCurrentTrackIndex(state, action: PayloadAction<number>) {
      state.currentTrackIndex = action.payload;
      state.currentTrack = state.songs[action.payload] || null;
    },
    setIsPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload;
    },
    setIsPause(state, action: PayloadAction<boolean>) {
      state.isPause = action.payload;
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setSongs(state, action: PayloadAction<MusicType[]>) {
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
