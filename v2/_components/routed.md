---
title: Routed
position: 1.6
description: Test a component that does route navigation and has route params
right_code: |
  ~~~ typescript
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute } from "@angular/router";
  
  @Component({
    selector: 'app-routed',
    template: '<h1>Hello {{subject}}!</h1>'
  })
  export class RoutedComponent implements OnInit{
    subject: string;
    constructor(
      private router: Router,
      private route: ActivatedRoute
    ) { }
  
    ngOnInit() {
      this.route.params
        .map(p => p && p['subject'])
        .forEach(subject => this.subject = subject);
    }
  
    goToItems() {
      this.router.navigateByUrl('/items');
    }
  }
  ~~~
  {: title="Component" }

  ~~~ typescript
  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs/BehaviorSubject';
  
  @Injectable()
  export class ActivatedRouteStub {
    private subject = new BehaviorSubject({subject: 'planet'});
    params = this.subject.asObservable();
  }
  ~~~
  {: title="Activated Route Stub" }
  
  ~~~ typescript
  import { ComponentFixture, TestBed } from '@angular/core/testing';
  import { Router, ActivatedRoute } from '@angular/router';
  
  import { ActivatedRouteStub } from './activated-route-stub';
  import { RoutedComponent } from './routed.component';
  
  class RouterStub {
    navigateByUrl(url) { return url; }
  }
  
  describe('RoutedComponent', () => {
    let component: RoutedComponent;
    let fixture: ComponentFixture<RoutedComponent>;
    let router: Router;
    let activatedRoute: ActivatedRouteStub;
  
    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [ RoutedComponent ],
        providers: [
          { provide: Router, useClass: RouterStub },
          { provide: ActivatedRoute, useClass: ActivatedRouteStub }
        ]
      })
      .createComponent(RoutedComponent);
  
      component = fixture.componentInstance;
      router = fixture.debugElement.injector.get(Router);
      activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
  
      fixture.detectChanges();
    });
  
    it('#goToItems navigates to `/items`', () => {
      spyOn(router, 'navigateByUrl');
      component.goToItems();
      expect(router.navigateByUrl).toHaveBeenCalledWith('/items');
    });
  
    it('sets the `subject` based on route parameters', () => {
      expect(component.subject).toBe('planet');
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
