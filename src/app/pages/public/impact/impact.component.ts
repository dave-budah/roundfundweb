import {Component, ElementRef, HostListener, inject, Renderer2} from '@angular/core';

@Component({
  selector: 'impact',
  standalone: true,
  imports: [],
  templateUrl: './impact.component.html',
})
export class ImpactComponent {
  renderer = inject(Renderer2)
  el = inject(ElementRef)
  private animationElements!: NodeListOf<Element>


  ngOnInit(): void {
    const scrollers = document.querySelectorAll('.scroller')

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation()
    }
    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', String(true))

        const scrollerInner = scroller.querySelector('.scroller__inner')
        const scrollerContent = Array.from(scrollerInner!.children)

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true)
          // @ts-ignore
          duplicatedItem.setAttribute('aria-hidden', String(true))
          scrollerInner!.appendChild(duplicatedItem)
        })
      })
    }
  }

  ngAfterViewInit(): void {
    this.animationElements = this.el.nativeElement.querySelectorAll('.animation-element');
    this.checkIfInView();
  }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowChange(): void {
    this.checkIfInView();
  }

  checkIfInView(): void {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;

    this.animationElements.forEach((element: any) => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.getBoundingClientRect().top + window.scrollY;
      const elementBottomPosition = elementTopPosition + elementHeight;

      if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
        this.renderer.addClass(element, 'in-view');
      } else {
        this.renderer.removeClass(element, 'in-view');
      }
    });
  }
}
