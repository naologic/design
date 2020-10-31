import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-sales-invoice',
  templateUrl: './view-sales-invoice.part-component.html',
  styleUrls: ['./view-sales-invoice.part-component.scss']
})
export class ViewSalesInvoiceComponent implements OnInit, OnDestroy {

  constructor(
    public readonly activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
  }

  /**
   * Dismiss the modal
   */
  public dismiss(): void {
    this.activeModal.dismiss({ok: true});
  }

  ngOnDestroy(): void {
  }
}
