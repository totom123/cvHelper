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
    // listOfStrings: [
    //   "",
    // ],
    // game: '',
    // tasks: [
    //   {
    //     title: "",
    //     details: "",
    //   },
    // ],
    // place: {
    //   title: "",
    //   details: "",
    // }
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'yoyo',
      type: 'string',
      templateOptions: {
        label: 'A yoyo'
      },
    },
    {
      key: 'list',
      type: 'array',
      templateOptions: {
        label: 'A A list of strings',

      },
      fieldArray: {
        type: "string",
      }
    },
    {
      key: 'task',
      type: 'object',
      templateOptions: {
        label: 'A A task',
      },
      fieldGroup: [
        {
          type: "string",
          key: 'title',
          templateOptions: {
            label: 'A A task',
          },
        },
        {
          key: 'details',
          type: "string",
          templateOptions: {
            label: 'detailsdetailsk',
          },
        },
      ]
    },
  ]

  constructor(
    private formlyJsonschema: FormlyJsonschema,
  ) {
  }

  ngOnInit(): void {
    // this.fields = [this.formlyJsonschema.toFieldConfig({
    //   type: "object",
    //   properties: {
    //     listOfStrings: {
    //       type: "array",
    //       title: "A list of strings",
    //       items: {
    //         type: "string",
    //         default: "bazinga"
    //       }
    //     },
    //     game: {
    //       type: "string",
    //       title: "A game",
    //     },
    //     tasks: {
    //       type: "array",
    //       title: "Tasks",
    //       items: {
    //         type: "object",
    //         properties: {
    //           title: {
    //             type: "string",
    //             title: "Title",
    //             description: "A sample title"
    //           },
    //           details: {
    //             type: "string",
    //             title: "Task details",
    //             description: "Enter the task details"
    //           },
    //         }
    //       }
    //     },
    //     place: {
    //       type: "object",
    //       title: "a place",
    //       properties: {
    //         title: {
    //           type: "string",
    //           title: "Title",
    //           description: "A sample title"
    //         },
    //         details: {
    //           type: "string",
    //           title: "Task details",
    //           description: "Enter the task details"
    //         },
    //       }
    //     },
    //     food: {
    //       type: "object",
    //       title: "a food",
    //       properties: {
    //         title: {
    //           type: "string",
    //           title: "Title",
    //           description: "A sample title"
    //         },
    //         tasks: {
    //           type: "array",
    //           title: "Tasks",
    //           items: {
    //             type: "object",
    //             required: [
    //               "title"
    //             ],
    //             properties: {
    //               title: {
    //                 type: "string",
    //                 title: "Title",
    //                 description: "A sample title"
    //               },
    //               details: {
    //                 type: "string",
    //                 title: "Task details",
    //                 description: "Enter the task details"
    //               },
    //             }
    //           }
    //         },
    //       }
    //     }
    //   }
    // })]
  }

  onSubmit() {
    console.log(this.model);
  }
}
