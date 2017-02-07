---
title: Service Dependency
position: 1.3
description: Test a component with a service dependency
right_code: |
  ~~~ typescript
  import { Component, OnInit } from '@angular/core';
  import { GreetingService } from '../greeting-service/greeting.service';
  @Component({
    selector: 'app-service',
    template: '<h1>Hello {{subject.name}}!</h1>'
  })
  export class ServiceComponent implements OnInit {
    subject: {name: string} = this.service.subject;
    constructor(private service: GreetingService) { }
    ngOnInit() { }
  }
  ~~~
  {: title="Component"}
  
  ~~~ typescript
  import { Injectable } from '@angular/core';
  
  @Injectable()
  export class GreetingService {
    subject: {name: string} = { name: 'world' };
  }
  ~~~
  {: title="Service"}
  
  ~~~ typescript
  import { ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';
  
  import { ServiceComponent } from './service.component';
  import { GreetingService } from '../greeting-service/greeting.service';
  
  describe('ServiceComponent', () => {
    let component: ServiceComponent;
    let fixture: ComponentFixture<ServiceComponent>;
    let de: DebugElement;
    let greetingServiceStub;
    let greetingService;
  
    beforeEach(() => {
      greetingServiceStub = {
        subject: {name: 'world'},
      };
  
      fixture = TestBed.configureTestingModule({
        declarations: [ ServiceComponent ],
        providers: [{ provide: GreetingService, useValue: greetingServiceStub }]
      })
      .createComponent(ServiceComponent);
  
      component = fixture.componentInstance;
      de = fixture.debugElement;
      fixture.detectChanges();
  
      greetingService = de.injector.get(GreetingService);
    });
  
    it('sets the default `subject` to service `subject`', () => {
      expect(component.subject.name).toBe('world');
    });
  
    it('greets the default service `subject`', () => {
      const h1 = de.query(By.css('h1')).nativeElement;
      expect(h1.innerText).toBe('Hello world!');
    });
  
    it('updates component `subject` when service `subject` is changed', () => {
      greetingService.subject.name = 'cosmos';
      fixture.detectChanges();
      expect(component.subject.name).toBe('cosmos');
      const h1 = de.query(By.css('h1')).nativeElement;
      expect(h1.innerText).toBe('Hello cosmos!');
    });
  });
  ~~~
  {: title="Spec"}
---

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
  <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
    <div class="wistia_embed wistia_async_1j5bqrhc65 videoFoam=true" style="height:100%;width:100%">&nbsp;</div>
  </div>
</div>

Bacon ipsum dolor amet chuck short ribs t-bone tenderloin. Meatloaf rump alcatra swine filet mignon corned beef tongue leberkas tail salami shoulder venison strip steak shankle hamburger. Pork loin leberkas brisket, frankfurter pig corned beef tongue beef ribs swine jerky tenderloin. Andouille brisket swine, jowl cow jerky kevin sausage.
