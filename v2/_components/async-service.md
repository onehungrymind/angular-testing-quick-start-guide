---
title: Async Service
position: 1.4
description: Test a component with an asynchronous service dependency
right_code: |
  ~~~ typescript
  import { Component, OnInit } from '@angular/core';
  import { GreetingService } from '../greeting-service/greeting.service';
  
  @Component({
    selector: 'app-async-service',
    template: '<h1>{{greeting}} {{subject}}{{punctuation}}</h1>'
  })
  export class AsyncServiceComponent implements OnInit {
    greeting: string;
    subject: string;
    punctuation: string;
    constructor(private service: GreetingService) { }
  
    ngOnInit() {
      this.service.getGreeting()
        .then(res => this.greeting = res);
      this.service.getSubject()
        .then(res => this.subject = res);
      this.service.getPunctuation()
        .then(res => this.punctuation = res);
    }
  }
  ~~~
  {: title="Component" }

  ~~~ typescript
  import { Injectable } from '@angular/core';
  
  @Injectable()
  export class GreetingService {
    subject: {name: string} = { name: 'world' };
    getGreeting() { return Promise.resolve('Hello'); }
    getSubject() { return Promise.resolve(this.subject.name); }
    getPunctuation() { return Promise.resolve('!'); }
  }
  ~~~
  {: title="Service" }
  
  ~~~ typescript
  import { tick, async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';
  
  import { AsyncServiceComponent } from './async-service.component';
  import { GreetingService } from '../greeting-service/greeting.service';
  
  describe('AsyncServiceComponent', () => {
    let component: AsyncServiceComponent;
    let fixture: ComponentFixture<AsyncServiceComponent>;
    let de: DebugElement;
    let greetingService: GreetingService;
  
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ AsyncServiceComponent ],
        providers: [ GreetingService ]
      })
      .createComponent(AsyncServiceComponent);
  
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('h1'));
      greetingService = de.injector.get(GreetingService);
    });
  
    it('should ensure `greeting`, `subject`, or `punctuation` are initially undefined', () => {
      fixture.detectChanges();
      expect(component.greeting).toBeUndefined();
      expect(component.subject).toBeUndefined();
      expect(component.punctuation).toBeUndefined();
    });
  
    it('gets `greeting` after promise (async)', async(() => {
      spyOn(greetingService, 'getGreeting')
        .and.returnValue(Promise.resolve('Greetings'));
  
      fixture.detectChanges();
  
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(component.greeting).toBe('Greetings');
      });
    }));
  
    it('gets `subject` after promise (fakeAsync)', fakeAsync(() => {
      spyOn(greetingService, 'getSubject')
        .and.returnValue(Promise.resolve('universe'));
  
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(component.subject).toBe('universe');
    }));
  
    it('gets `punctuation` after promise (done) – use with caution', done => {
      spyOn(greetingService, 'getPunctuation')
        .and.returnValue(Promise.resolve(' :)'));
  
      fixture.detectChanges();
      greetingService.getPunctuation().then(() => {
        fixture.detectChanges();
        expect(component.punctuation).toBe(' :)');
        done();
      });
    });
  });
  ~~~
  {: title="Spec" }
---

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
  <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
    <div class="wistia_embed wistia_async_1j5bqrhc65 videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
  </div>
</div>

Bacon ipsum dolor amet chuck short ribs t-bone tenderloin. Meatloaf rump alcatra swine filet mignon corned beef tongue leberkas tail salami shoulder venison strip steak shankle hamburger. Pork loin leberkas brisket, frankfurter pig corned beef tongue beef ribs swine jerky tenderloin. Andouille brisket swine, jowl cow jerky kevin sausage.
