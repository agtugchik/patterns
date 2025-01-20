import { Player, State } from "./types";

class LockedState implements State {
  private player;
  constructor(player) {
    this.player = player;
  }
  clickLock() {
    if (this.player.previousState instanceof PlayingState) {
      this.player.changeState(new PlayingState(this.player));
    } else {
      this.player.changeState(new ReadyState(this.player));
    }
  }
  clickPlay() {}
  clickNext() {}
  clickPrevious() {}
}

class ReadyState implements State {
  private player;
  constructor(player) {
    this.player = player;
  }
  clickLock() {
    this.player.changeState(new LockedState(this.player));
  }
  clickPlay() {
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
  }
  clickNext() {
    this.player.nextSong();
  }
  clickPrevious() {
    this.player.previousSong();
  }
}

class PlayingState implements State {
  private player;
  constructor(player) {
    this.player = player;
  }
  clickLock() {
    this.player.changeState(new LockedState(this.player));
  }
  clickPlay() {
    this.player.stopPlayback();
    this.player.changeState(new ReadyState(this.player));
  }
  clickNext() {
    this.player.nextSong();
  }
  clickPrevious() {
    this.player.previousSong();
  }
}

class AudioPlayer implements Player {
  state: State;
  previousState: State;
  constructor() {
    this.state = new ReadyState(this);
  }

  clickLock() {
    this.state.clickLock();
  }
  clickPlay() {
    this.state.clickPlay();
  }
  clickNext() {
    this.state.clickNext();
  }
  clickPrevious() {
    this.state.clickPrevious();
  }

  changeState(state: State) {
    this.previousState = this.state;
    this.state = state;
    console.log("state changed:", state.constructor.name);
  }
  startPlayback() {
    console.log("start playing");
  }
  stopPlayback() {}
  nextSong() {
    console.log("next song");
  }
  previousSong() {
    console.log("previous song");
  }
}

export default AudioPlayer;
