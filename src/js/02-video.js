import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
console.log(throttle);
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
    console.log(seconds);
  }, 1000)
);
console.log('jhgkjhgkjhg', localStorage.getItem('videoplayer-current-time'));
