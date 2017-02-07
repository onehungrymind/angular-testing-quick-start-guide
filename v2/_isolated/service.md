---
title: Service
position: 2.1
description: Test a service class
right_code: |
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
  import { GreetingService } from './greeting.service';
  
  describe('GreetingService', () => {
    let service = new GreetingService();
  
    it('#getGreeting returns a `greeting`', done => {
      service.getGreeting().then((res) => {
        expect(res).toBe('Hello');
        done();
      });
    });
  
    it('#getSubject returns current `subject`', done => {
      service.subject = {name: 'infinity'};
      service.getSubject().then((res) => {
        expect(res).toBe('infinity');
        done();
      });
    });
  
    it('#getPunctuation returns `punctuation`', done => {
      service.getPunctuation().then((res) => {
        expect(res).toBe('!');
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