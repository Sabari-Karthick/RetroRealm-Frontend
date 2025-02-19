import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { InputIconModule } from 'primeng/inputicon';

@NgModule({
  declarations: [],
  imports: [AutoCompleteModule,FormsModule,InputIconModule,DropdownModule],
  exports: [AutoCompleteModule,FormsModule,InputIconModule,DropdownModule],
})
export class SharedModule {}
