import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService, Breakpoint } from '../services/responsive.service';
import { filter, Subscription, take } from 'rxjs';

export interface ResponsiveColumnConfig {
  hideBelow?: Breakpoint;
  hideAbove?: Breakpoint;
}

@Directive({
  selector: '[responsiveColumn]'
})
export class ResponsiveColumnDirective implements OnInit, OnDestroy {
  private config: ResponsiveColumnConfig = {};
  private hasView = false;
  private sub: Subscription | undefined;
  private initShow = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private responsiveService: ResponsiveService
  ) {}

  @Input()
  set responsiveColumn(config: ResponsiveColumnConfig) {
    this.config = config;
    this.updateView();
  }

  ngOnInit() {
    if (this.initShow) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    this.sub = this.responsiveService.breakpointState.subscribe(() => {
      this.updateView();
    });
  }

  private updateView() {
    const shouldHide = this.responsiveService.shouldHideColumn(
      this.config.hideBelow,
      this.config.hideAbove
    );

    this.responsiveService.startHide$
      .pipe(
        filter(startHide => startHide === true),
        take(1) // Only execute once
      )
      .subscribe(() => {
        if (this.initShow) {
          this.viewContainer.clear();
          this.initShow = false;
        }
        if (shouldHide && this.hasView) {
          this.viewContainer.clear();
          this.hasView = false;
        } else if (!shouldHide && !this.hasView) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.hasView = true;
        }
      });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
