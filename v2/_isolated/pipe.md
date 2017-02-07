---
title: Pipe
position: 2.2
description: Test a pipe transform
right_code: |
  ~~~ typescript
  import { Pipe, PipeTransform } from '@angular/core';
  
  @Pipe({name: 'exclaim'})
  export class ExclaimPipe implements PipeTransform {
  
    transform(value: any, args?: any): any {
      return value && `${value}!`;
    }
  
  }
  ~~~
  {: title="Pipe" }

  ~~~ typescript
  import { ExclaimPipe } from './exclaim.pipe';
  
  describe('ExclaimPipe', () => {
    const pipe = new ExclaimPipe();
    it('adds an exclamation mark to input', () => {
      expect(pipe.transform('Hello universum magna'))
        .toBeTruthy('Hello universum magna!');
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