import { Injectable, OnDestroy } from '@angular/core';
import { Subject, fromEvent, BehaviorSubject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BreakpointState {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  current: Breakpoint;
}

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService implements OnDestroy {
  private destroy$ = new Subject<void>();

  // Define breakpoints (you can customize these values)
  private readonly breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  };

  private breakpointState$ = new BehaviorSubject<BreakpointState>(this.getBreakpointState());

  constructor() {
    console.log('ResponsiveService initialized');

    // Listen to window resize events
    fromEvent(window, 'resize')
      .pipe(debounceTime(150), takeUntil(this.destroy$))
      .subscribe(() => {
        const newState = this.getBreakpointState();
        const prevState = this.breakpointState$.value;

        // Only update if breakpoint has changed
        if (newState.current !== prevState.current) {
          console.log('Breakpoint changed from', prevState.current, 'to', newState.current);
          this.breakpointState$.next(newState);
        }
      });
  }

  get breakpointState() {
    return this.breakpointState$.asObservable();
  }

  get currentBreakpoint(): Breakpoint {
    return this.breakpointState$.value.current;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getBreakpointState(): BreakpointState {
    const width = window.innerWidth;

    let current: Breakpoint = 'xs';
    if (width >= this.breakpoints.xl) current = 'xl';
    else if (width >= this.breakpoints.lg) current = 'lg';
    else if (width >= this.breakpoints.md) current = 'md';
    else if (width >= this.breakpoints.sm) current = 'sm';

    return {
      xs: width >= this.breakpoints.xs,
      sm: width >= this.breakpoints.sm,
      md: width >= this.breakpoints.md,
      lg: width >= this.breakpoints.lg,
      xl: width >= this.breakpoints.xl,
      current
    };
  }

  // Helper method to check if column should be hidden
  shouldHideColumn(hideBelow?: Breakpoint, hideAbove?: Breakpoint): boolean {
    const current = this.currentBreakpoint;
    const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl'];
    const currentIndex = breakpointOrder.indexOf(current);

    if (hideBelow) {
      const hideBelowIndex = breakpointOrder.indexOf(hideBelow);
      if (currentIndex < hideBelowIndex) {
        return true;
      }
    }

    if (hideAbove) {
      const hideAboveIndex = breakpointOrder.indexOf(hideAbove);
      if (currentIndex > hideAboveIndex) {
        return true;
      }
    }

    return false;
  }
}
