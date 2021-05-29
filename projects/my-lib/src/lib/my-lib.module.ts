import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [MyLibComponent, CustomComponent],
  imports: [],
  exports: [MyLibComponent],
})
export class MyLibModule {}
