import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [],
  imports: [
    AutoCompleteModule,
    FormsModule,
    InputIconModule,
    DropdownModule,
    InputNumberModule,
  ],
  exports: [
    AutoCompleteModule,
    FormsModule,
    InputIconModule,
    DropdownModule,
    InputNumberModule,
  ],
})
export class SharedModule {}
