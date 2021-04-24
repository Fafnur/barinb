import { NgModule } from '@angular/core';

import { PersonStorage } from './person.storage';

@NgModule({
  providers: [PersonStorage],
})
export class PersonStorageModule {}
