import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CreateNewContactsComponent } from './create-new-contacts.part-component';
import { CommonModule } from '@angular/common';
import { ViewSalesInvoiceComponent } from './view-sales-invoice.part-component';

@NgModule({
  imports: [SharedModule, CommonModule],
        declarations: [
            CreateNewContactsComponent,
            ViewSalesInvoiceComponent
        ],
        providers: [],
        exports: [
            CreateNewContactsComponent,
            ViewSalesInvoiceComponent
        ],
        entryComponents: [
            CreateNewContactsComponent,
            ViewSalesInvoiceComponent
        ]
    })
export class ModalsParts {}
