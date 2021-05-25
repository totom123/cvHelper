import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {

  form = new FormGroup({});
  model = {
    "listOfStrings": [
      "foo",
      "bar"
    ],
  };
  fields: FormlyFieldConfig[] = []

  constructor(
    private formlyJsonschema: FormlyJsonschema,
  ) {
  }

  ngOnInit(): void {
    this.fields = [this.formlyJsonschema.toFieldConfig({
      "type": "object",
      "properties": {
        "listOfStrings": {
          "type": "array",
          "title": "A list of strings",
          "items": {
            "type": "string",
            "default": "bazinga"
          }
        }
      }
    })]
  }

  onSubmit() {
    console.log(this.model);
  }
}
