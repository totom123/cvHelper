import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <input matInput placeholder="a" value=""  [formControl]="formControl" [formlyAttributes]="field">
 `,
})
export class InputTypeComponent extends FieldType { }
