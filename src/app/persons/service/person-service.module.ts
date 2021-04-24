import { NgModule } from '@angular/core';

import { PersonService } from './person.service';

@NgModule({
  providers: [PersonService],
})
export class PersonServiceModule {}
