---
title: Input/Output
position: 1.5
description: Test a component that has @Inputs and @Outputs
right_code: |
  ~~~ typescript
  import { Component, Input, Output, EventEmitter } from '@angular/core';
  
  @Component({
    selector: 'app-input-output',
    template: `
      <h1>Hello {{subject}}!</h1>
      <button (click)="depart()">We Out</button>
    `
  })
  export class InputOutputComponent {
    @Input('subject') subject: string;
    @Output('leave') leave: EventEmitter<string> = new EventEmitter();
    depart() {
      this.leave.emit(`Ciao ${this.subject}!`);
    }
  }
  ~~~
  {: title="Component" }

  ~~~ typescript
  import { ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';
  
  import { InputOutputComponent } from './input-output.component';
  
  describe('InputOutputComponent', () => {
    let component: InputOutputComponent;
    let fixture: ComponentFixture<InputOutputComponent>;
    let de: DebugElement;
    let button: DebugElement;
  
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ InputOutputComponent ]
      })
      .createComponent(InputOutputComponent);
  
      component = fixture.componentInstance;
      de = fixture.debugElement;
      button = de.query(By.css('button'));
  
      component.subject = 'galaxy';
      fixture.detectChanges();
    });
  
    it('has `subject` as an @Input', () => {
      expect(component.subject).toBe('galaxy');
    });
  
    it('greets the @Input `subject`', () => {
      const h1 = de.query(By.css('h1'));
      expect(h1.nativeElement.innerText).toBe('Hello galaxy!');
    });
  
    it('says goodbye to the `subject`', () => {
      let farewell;
      component.leave.subscribe(event => farewell = event);
  
      button.triggerEventHandler('click', null);
      expect(farewell).toBe('Ciao galaxy!');
    });
  });
  ~~~
  {: title="Spec" }
  
  ~~~ typescript
  import { ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement, Component } from '@angular/core';
  
  import { InputOutputComponent } from './input-output.component';
  
  @Component({
    template: `<app-input-output  
      [subject]="subject"  
      (leave)="onLeave($event)">
    </app-input-output>
    `
  })
  class TestInputOutputHostComponent {
    subject: string = 'galaxy';
    completeGreeting: string;
    onLeave(greeting: string) { this.completeGreeting = greeting; }
  }
  
  describe('HostComponent', () => {
    let component: TestInputOutputHostComponent;
    let fixture: ComponentFixture<TestInputOutputHostComponent>;
    let de: DebugElement;
    let button: DebugElement;
    let h1: DebugElement;
  
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ InputOutputComponent, TestInputOutputHostComponent ]
      })
      .createComponent(TestInputOutputHostComponent);
  
      component = fixture.componentInstance;
      de = fixture.debugElement;
      button = de.query(By.css('button'));
      h1 = de.query(By.css('h1'));
      fixture.detectChanges();
    });
  
    it('greets the @Input `subject`', () => {
      expect(h1.nativeElement.innerText).toBe('Hello galaxy!');
    });
  
    it('says goodbye to the `subject`', () => {
      button.triggerEventHandler('click', null);
      expect(component.completeGreeting).toBe('Ciao galaxy!');
    });
  });
  ~~~
  {: title="Spec with Host" }
---

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
  <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
    <div class="wistia_embed wistia_async_1j5bqrhc65 videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
  </div>
</div>

Bacon ipsum dolor amet chuck short ribs t-bone tenderloin. Meatloaf rump alcatra swine filet mignon corned beef tongue leberkas tail salami shoulder venison strip steak shankle hamburger. Pork loin leberkas brisket, frankfurter pig corned beef tongue beef ribs swine jerky tenderloin. Andouille brisket swine, jowl cow jerky kevin sausage.