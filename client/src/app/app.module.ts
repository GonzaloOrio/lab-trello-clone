import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './card/modal/modal.component';
import { DragulaHandler } from './shared/dragula.service';
import { ListService } from './shared/list.service';
import { CardService } from './shared/card.service';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

const CustomToastrOption = {
  animate: 'fade',
  newestOnTop: false,
  showCloseButton: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    DragulaModule,
    ToastModule.forRoot()
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    DragulaHandler,
    ListService,
    CardService,
    { provide: ToastOptions, useValue: CustomToastrOption }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
