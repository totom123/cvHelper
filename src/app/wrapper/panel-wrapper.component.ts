import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
   <h3 >{{ to.label }}</h3>
   <!-- <ng-container #fieldComponent></ng-container> -->
`,
})
export class PanelWrapperComponent extends FieldWrapper {
}
