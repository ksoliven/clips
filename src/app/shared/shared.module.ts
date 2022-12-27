import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
import { EventBlockDirective } from './directives/event-block.directive';



@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventBlockDirective
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent,
    AlertComponent,
    EventBlockDirective
  ]
})
export class SharedModule { }
