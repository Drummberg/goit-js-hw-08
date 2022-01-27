
import throttle from 'lodash.throttle'
import vimeoPlayer from '@vimeo/player'

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds === event.duration ? 0 : event.seconds)
}