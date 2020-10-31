import { Component, OnInit } from '@angular/core';
import { ModalCodeBlocks } from './modal.interface';
import { AppService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateNewContactsComponent } from '../_parts/create-new-contacts.part-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ViewSalesInvoiceComponent} from "../_parts/view-sales-invoice.part-component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  public data = ModalCodeBlocks;
  public formGroup = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    info: new FormGroup({
      firstName: new FormControl('', {validators: [Validators.required]}),
      lastName: new FormControl('', {validators: [Validators.required]}),

    }),
    inviteId: new FormControl(''),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
      ]
    }),

  });
  constructor(public readonly appService: AppService, private readonly modalService: NgbModal) { }

  ngOnInit() { }

  /**
   * Copy to clipboard
   */
  public copyToClipboard(code): void {
    this.appService.copyToClipboard(code);
  }


  /**
   * Event triggered when you click the create button
   */
  public onCreate(): void {
    // -->Open: the modal-ish
    const modalRef = this.modalService.open(CreateNewContactsComponent, {
      windowClass: 'nao-full-screen-modal', keyboard: false

    });
    // -->Await: result
    modalRef.result
      .then(modalRes => {
        if (modalRes && modalRes.ok) {
          // -->End: action
        }
      })
      .catch(err => {
      });
  }

  /**
   * Event triggered when you click the pdf button
   */
  public onPdf(): void {
    // -->Open: the modal-ish
    const modalRef = this.modalService.open(ViewSalesInvoiceComponent, {
      windowClass: 'nao-full-screen-modal', keyboard: false

    });
    // -->Await: result
    modalRef.result
      .then(modalRes => {
        if (modalRes && modalRes.ok) {
          // -->End: action
        }
      })
      .catch(err => {
      });
  }
}
