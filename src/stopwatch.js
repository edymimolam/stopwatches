export default class Stopwatch {
  constructor() {
    this.id = Date.now();
    this.isRunning = false;
    this.time = {
      seconds: 0,
      minutes: null,
      hours: null,
    };
  }

  tick = () => {
    this.time.seconds++;
    if (this.time.seconds > 59) {
      this.time.minutes++;
      this.time.seconds = 0;
    }
    if (this.time.minutes > 59) {
      this.time.hours++;
      this.time.minutes = 0;
    }
  };

  run = () => {
    this._intervalID = setInterval(this.tick, 1000);
    this.isRunning = true;
  };

  pause = () => {
    clearInterval(this._intervalID);
    this.isRunning = false;
  };

  stop = () => {
    clearInterval(this._intervalID);
    this.time = { seconds: 0, minutes: null, hours: null };
    this.isRunning = false;
  };
}
