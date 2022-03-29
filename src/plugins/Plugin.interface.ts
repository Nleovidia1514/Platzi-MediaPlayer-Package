import MediaPlayer from '../MediaPlayer';

interface Plugin {
    run: (player: MediaPlayer) => void;
}

export default Plugin;