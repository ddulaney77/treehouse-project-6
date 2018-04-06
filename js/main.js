$('video').mediaelementplayer({
  stretching: 'responsive',
  features: ['playpause',
    'progress',
    'tracks',
    'volume',
    'fullscreen'
  ],
});


// Get the <video> element
const vid = document.querySelector('video');
const span = document.querySelectorAll('span');


// Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
vid.ontimeupdate = function() {
  for (let i = 0; i < span.length; i += 1) {
    if (vid.currentTime > span[i].getAttribute('data-start') && vid.currentTime < span[i].getAttribute('data-end')) {
      span[i].style.color = "orange";
    } else {
      span[i].style.color = "#909090";
    }
  }
};
//looping through the span elements and assigning click handler for the span elements data-start time
for (let i = 0; i < span.length; i += 1) {
  span[i].addEventListener("click", function(event) {
    vid.currentTime = event.target.getAttribute('data-start');
    vid.play();
  });
}
