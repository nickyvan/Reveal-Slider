import { TweenMax } from 'gsap/TweenMax';
import Slide from './Slide';
export default class SlideShow {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.slides = this.DOM.el.querySelectorAll('.slide');
    this.slides = [];
    this.DOM.slides.forEach((el) => this.slides.push(new Slide(el)));
    this.DOM.navPrev = this.DOM.el.querySelector('.nav--prev');
    this.DOM.navNext = this.DOM.el.querySelector('.nav--next');
    this.current = 0;
    this.init();
  }
  init = () => {
    this.DOM.navPrev.addEventListener(
      'click',
      () => this.navigator(false),
      false
    );
    this.DOM.navNext.addEventListener(
      'click',
      () => this.navigator(true),
      false
    );
  };
  navigator = (next) => {
    if (this.slides[this.current].animation) return;
    this.slides[this.current].hide(next).then((r)=>{
      if (next) {
        this.current =
          this.current === this.slides.length - 1 ? 0 : this.current + 1;
        this.slides[this.current].show(next);
      } else {
        this.current =
          this.current === 0 ? this.slides.length - 1 : this.current - 1;
        this.slides[this.current].show(next);
      }
    });
    
  };
}
