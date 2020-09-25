export default class Stopwatch {
  constructor() {
    this.id = Date.now();
    this.isRunning = false;
  }

  run = () => {
    let id = this.id;
    this.isRunning = true;
    console.log("run " + id);
  };

  pause = () => {
    let id = this.id;
    this.isRunning = false;
    console.log("pause " + id);
  };

  stop = () => {
    let id = this.id;
    this.isRunning = false;
    console.log("stop " + id);
  };
}
