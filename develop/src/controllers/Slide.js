import TimeLineMax from 'gsap/TimelineMax';
import { TweenMax, Power4 } from 'gsap/TweenMax';

export default class Slide {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.slideImg = this.DOM.el.querySelector('.slide__img');
    this.length = 5;
    this.direction = true;
    this.animation = false;
    this.layout();
  }
  layout = () => {
    this.coverSlides = '';
    for (let i = 0; i < this.length; i++) {
      this.coverSlides += `<div class="slide__cover__slide"></div>`;
    }
    this.cover = document.createElement('div');
    this.cover.classList.add('slide__cover');
    this.cover.innerHTML = this.coverSlides;
    this.DOM.el.insertBefore(this.cover, this.DOM.slideImg);
    this.DOM.coverSlides = [];
    this.DOM.el.querySelectorAll('.slide__cover__slide').forEach((element) => {
      this.DOM.coverSlides.push(element);
    });
    this.DOM.coverSlides.forEach((el) => TweenMax.set(el, { x: '100%' }));
  };
  show = (direction) => {
    this.animation = true;
    for (let i = 0; i < this.DOM.coverSlides.length; i++) {
      let coverSlide = this.DOM.coverSlides[i];
      TweenMax.set(coverSlide, { x: '0%' });
    }
    this.DOM.el.classList.add('slide--current');
    let showtl = new TimeLineMax({
      onComplete: () => {
        this.animation = false;
        showtl.kill();
      }
    });
    for (let i = 0; i < this.DOM.coverSlides.length; i++) {
      let coverSlide = this.DOM.coverSlides[i];
      showtl.to(
        coverSlide,
        0.5,
        {
          x: '-100%',
          ease: Power4.easeIn
        },
        '-=0.3'
      );
    }
  };
  hide = (direction) =>
    new Promise((resolve, err) => {
      this.animation = true;
      for (let i = 0; i < this.DOM.coverSlides.length; i++) {
        let coverSlide = this.DOM.coverSlides[i];
        TweenMax.set(coverSlide, { x: '100%' });
      }
      let showtl = new TimeLineMax({
        onComplete: () => {
          this.animation = false;
          this.DOM.el.classList.remove('slide--current');
          showtl.kill();
          resolve();
        }
      });
      for (let i = 0; i < this.DOM.coverSlides.length; i++) {
        let coverSlide = this.DOM.coverSlides[i];
        showtl.to(coverSlide, 0.5, { x: '0%', ease: Power4.easeIn }, '-=0.3');
      }
    });
}
