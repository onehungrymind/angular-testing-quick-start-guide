---
title: External Template
position: 1.2
description: Test a component that loads a template asynchronously
right_code: |
  ~~~ typescript
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-template',
    templateUrl: './template.component.html'
  })
  export class TemplateComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  ~~~
  {: title="Component" }

  ~~~ html
  <p>
    template works!
  </p>
  ~~~
  {: title="Template" }
  
  ~~~ typescript
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { TemplateComponent } from './template.component';
  
  describe('TemplateComponent', () => {
    let component: TemplateComponent;
    let fixture: ComponentFixture<TemplateComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ TemplateComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TemplateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
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
