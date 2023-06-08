import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  types: any[] = [{ name: 'Type 1' }, { name: 'Type 2' }, { name: 'Type 3' }];
  conditions: any[] = [
    { name: 'Condition 1' },
    { name: 'Condition 2' },
    { name: 'Condition 3' },
  ];
  districts: any[] = [
    { name: 'District 1' },
    { name: 'District 2' },
    { name: 'District 3' },
  ];
}
