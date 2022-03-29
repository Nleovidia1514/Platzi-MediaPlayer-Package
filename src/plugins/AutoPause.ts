import MediaPlayer from '../MediaPlayer';
import Plugin from './Plugin.interface';

class AutoPause implements Plugin {
  private threshold: number;
  private player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player: MediaPlayer) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(player.media);

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (entry.intersectionRatio >= this.threshold) this.player.play();
    else this.player.pause();
  }

  private handleVisibilityChange() {
    if (document.visibilityState === 'visible') this.player.play();
    else this.player.pause();
  }
}

export default AutoPause;
