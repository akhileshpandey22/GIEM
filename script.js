const apiKey = 'YOUR_YOUTUBE_API_KEY';
const videoId = 'YOUR_UNLISTED_VIDEO_ID';

function loadYouTubeApi() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: videoId,
    playerVars: {
      'rel': 0, // Disable related videos
    },
    events: {
      'onReady': onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

loadYouTubeApi();
