import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  items = [
    {
      value: 1,
      label: 'one',
    },
    {
      value: 2,
      label: 'two',
    },
    {
      value: 3,
      label: 'three',
    },
    {
      value: 4,
      label: 'four',
    },
    {
      value: 5,
      label: 'five',
    },
  ]

  tree = {
    value: '',
    label: 'root',
    children: [
      {
        value: '1',
        label: 'first child'
      },
      {
        value: '2',
        label: 'second child'
      },

      {
        value: '3',
        label: 'third child',
        children: [
          {
            value: '4',
            label: 'first sub-child',
          },
          {
            value: '5',
            label: 'second sub-child',
          },
          
          {
            value: '6',
            label: 'third sub-child',
          },
          
          {
            value: '7',
            label: 'fourth sub-child',
          },
          
        ]
      }
      
    ]
  }


  constructor() { }

  ngOnInit() {
  }

}
