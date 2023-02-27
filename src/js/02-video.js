import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time')
  ? localStorage.getItem('videoplayer-current-time')
  : 0;
player.setCurrentTime(currentTime);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
