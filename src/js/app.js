import 'normalize.css';
import '../css/main.css';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

new p5((p) => {
  let song;
  let video;

  p.preload = () => {
    song = p.loadSound('assets/time.mp3');
    video = p.createVideo(['assets/bees.mp4', 'assets/bees.webm']);
  }

	p.setup = () => {
    p.noCanvas();
    song.play();
    video.loop();

    const secondHand = p.select('.second');
    const secondHand2 = p.select('.second2');
    let startHand2 = false;
    let secondsDegrees2 = 90;

    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style('transform', `rotate(${secondsDegrees}deg)`);

      if (secondsDegrees === 90) startHand2 = true;

      if (startHand2) {
        secondHand2.style('transform', `rotate(${secondsDegrees2}deg)`);
        secondsDegrees2 -= 6;
      }
    }

    setInterval(setDate, 1000);
    setDate();
  }

}, document.body);
