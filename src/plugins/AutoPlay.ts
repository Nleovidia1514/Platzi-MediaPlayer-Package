import MediaPlayer from '../MediaPlayer';
import Plugin from './Plugin.interface';

class AutoPlay implements Plugin {
    constructor() {
    }
    run(player: MediaPlayer) {
        if (!player.media.muted)
            player.media.muted = true;
        player.play();
    }
}


export default AutoPlay;