interface State {
  clickLock: () => void;
  clickPlay: () => void;
  clickNext: () => void;
  clickPrevious: () => void;
}

interface Player {
  state: State;
  previousState: State;
  clickLock: () => void;
  clickPlay: () => void;
  clickNext: () => void;
  clickPrevious: () => void;
  changeState: (state: State) => void;
  startPlayback: () => void;
  stopPlayback: () => void;
  nextSong: () => void;
  previousSong: () => void;
}

export { State, Player };
