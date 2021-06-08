import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class PageObject<T> {
  protected readonly fixture: ComponentFixture<T>;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  protected getByAutomationId(automationId: string): DebugElement | null {
    return this.fixture.debugElement.query(By.css(`[automation-id="${automationId}"]`)) ?? null;
  }

  protected getByAutomationIdNative(automationId: string): Node | null {
    return this.fixture.nativeElement.querySelector(`[automation-id="${automationId}"]`) ?? null;
  }

  protected getAllByAutomationId(automationId: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(`[automation-id="${automationId}"]`));
  }

  protected getAllByAutomationIdNative(automationId: string): Node[] {
    const node: NodeList = this.fixture.nativeElement.querySelectorAll(`[automation-id="${automationId}"]`) ?? null;

    const arr: Node[] = [];
    node.forEach((item) => {
      arr.push(item);
    });

    return arr;
  }

  protected text(element: DebugElement | string): string | null {
    const el = element instanceof DebugElement ? element : this.getByAutomationId(element);

    if (!el) {
      return null;
    }

    return el.nativeElement.textContent.trim();
  }

  protected textNative(element: Node | DebugElement | string): string | null {
    let el: Node | null;

    if (typeof element === 'string') {
      el = this.getByAutomationIdNative(element);
    } else if (element instanceof DebugElement) {
      el = element.nativeElement;
    } else {
      el = element;
    }

    if (!el) {
      return null;
    }

    return el.textContent?.trim() ?? null;
  }

  protected triggerEventHandler(
    element: DebugElement | string | null,
    eventName: string,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    eventObj: any = null
  ): void {
    if (element !== null) {
      const el = element instanceof DebugElement ? element : this.getByAutomationId(element);

      el?.triggerEventHandler(eventName, eventObj);
    } else {
      console.warn('Element on triggerEventHandler is NULL');
    }
  }
}
