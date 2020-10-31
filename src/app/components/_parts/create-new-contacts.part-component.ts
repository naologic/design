import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


export function newAddressForm(data?): FormGroup {
  return new FormGroup({
    city: new FormControl('', { validators: [Validators.required] }),
    country: new FormControl(null, { validators: [Validators.required] }),
    id: new FormControl(Math.floor(Math.random())),
    line_1: new FormControl('', { validators: [Validators.required] }),
    line_2: new FormControl(''),
    state: new FormControl('', { validators: [Validators.required] }),
    zip: new FormControl(null, { validators: [Validators.required] }),
  });
}

@Component({
  selector: 'app-create-new-contacts',
  templateUrl: './create-new-contacts.part-component.html',
  styleUrls: ['./create-new-contacts.part-component.scss']
})
export class CreateNewContactsComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup = new FormGroup({
    addresses: new FormArray([]),
    allowedPaymentMethods: new FormControl(null),
    dueDays: new FormControl('30'),
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    emailHash: new FormControl(''),
    facebook: new FormControl(null),
    gpoContracts: new FormControl(null),
    linkedin: new FormControl(null),
    mobilePhoneNo: new FormControl(null),
    name: new FormControl(null, { validators: [Validators.required] }),
    notes: new FormControl(null),
    phoneNo: new FormControl(null),
    priceLists: new FormControl(null),
    taxRate: new FormControl(0),
    twitter: new FormControl(null),
    type: new FormControl('person'),
  });

  constructor(
    public readonly activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
  }


  /**
   * Dismiss the modal
   */
  public dismiss(): void {
    this.activeModal.dismiss({ ok: true });
  }

  /**
   * Save the form data
   */
  public saveDoc(): void {
    this.activeModal.close({ok: true});
  }


  ngOnDestroy(): void {
  }

  /**
   * Add a new form group to the form array
   *
   */
  public addAddresses(): void {
    // -->Add
    (this.formGroup.get('addresses') as FormArray).push(newAddressForm());
  }

  public getAddresses(): FormArray {
    return (this.formGroup.get('addresses') as FormArray);
  }

  /**
   * Remove index from array
   *
   */
  public removeAddresses(i: number): void {
    // -->Mark: dirty to make the saving valid
    this.formGroup.get('addresses.' + i).markAsDirty();
    // -->Remove
    (this.formGroup.get('addresses') as FormArray).removeAt(i);
  }
}
