import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  EmbeddedViewRef,
  OnDestroy,
  inject,
  input,
} from '@angular/core';

const styles = {
  'position': 'fixed',
  'background': '#333',
  'color': '#fff',
  'padding': '6px 10px',
  'border-radius': '4px',
  'font-size': '12px',
  'pointer-events': 'none',
  'z-index': '1000',
  'white-space': 'nowrap',
  'max-width': '300px',
};

@Directive({
  selector: '[sdkHint]',
})
export class HintDirective implements OnDestroy {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private vcr = inject(ViewContainerRef);

  sdkHint = input<string | TemplateRef<any>>('');
  sdkHintPosition = input<'left' | 'right'>('left');

  private tooltipEl: HTMLElement | null = null;
  private embeddedViewRef: EmbeddedViewRef<any> | null = null;

  @HostListener('mouseenter')
  showTooltip() {
    const tooltip = this.sdkHint();

    if (!tooltip) return;

    this.tooltipEl = this.renderer.createElement('div');
    for (const [key, value] of Object.entries(styles)) {
      this.renderer.setStyle(this.tooltipEl, key, value);
    }

    if (typeof tooltip === 'string') {
      const text = this.renderer.createText(tooltip);
      this.renderer.appendChild(this.tooltipEl, text);
    }

    if (tooltip instanceof TemplateRef) {
      this.embeddedViewRef = this.vcr.createEmbeddedView(tooltip);
      this.embeddedViewRef.detectChanges();
      this.embeddedViewRef.rootNodes.forEach((node) => {
        this.renderer.appendChild(this.tooltipEl!, node);
      });
    }

    this.renderer.appendChild(document.body, this.tooltipEl);
    this.positionTooltip();
  }

  @HostListener('mouseleave')
  hideTooltip() {
    this.removeTooltip();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  positionTooltip() {
    if (!this.tooltipEl) return;

    const hostRect = this.el.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltipEl.getBoundingClientRect();

    let top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
    let left = hostRect.left;

    if (this.sdkHintPosition() === 'right') {
      left = hostRect.right + 8;

      // если не влезает справа — показать слева
      if (left + tooltipRect.width > window.innerWidth) {
        left = hostRect.left - tooltipRect.width - 8;
      }
    } else {
      // default: left
      left = hostRect.left - tooltipRect.width - 8;

      // если не влезает слева — показать справа
      if (left < 0) {
        left = hostRect.right + 8;
      }
    }

    // вертикальная коррекция
    if (top + tooltipRect.height > window.innerHeight) {
      top = window.innerHeight - tooltipRect.height - 10;
    }
    if (top < 0) top = 10;

    this.renderer.setStyle(this.tooltipEl, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${left}px`);
  }

  private removeTooltip() {
    if (this.tooltipEl) {
      this.renderer.removeChild(document.body, this.tooltipEl);
      this.tooltipEl = null;
    }
    if (this.embeddedViewRef) {
      this.embeddedViewRef.destroy();
      this.embeddedViewRef = null;
    }
  }

  ngOnDestroy(): void {
    this.removeTooltip();
  }
}
