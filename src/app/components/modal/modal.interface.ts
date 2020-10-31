export const ModalCodeBlocks = [
  {
    html: `
        <div class="modal nao-modal nao-modal-1" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header text-white bg-primary flex-column">
                        <h6 class="modal-subtitle mb-1">Descriptor</h6>
                        <h6 class="modal-title">Subject</h6>
                    </div>
                    <div class="modal-body">
                        Modal body text goes here. After deleting this you won't be able to recover it.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-simple-dark-blue btn-sm" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-simple-primary btn-sm">Confirm</button>
                    </div>
                </div>
            </div>
        </div>`,
    ts1: `
        constructor(private readonly modalService: NgbModal) {}
        `,
    ts2: `
        // -->Open: the modal
        const modalRef = this.modalService.open(ModalComponent, {
            centered: true, windowClass: 'nao-modal-window-class', backdropClass: 'nao-modal-backdrop', size: 'lg',
        });
        // -->Set: data
        modalRef.componentInstance.data = data || {};
        modalRef.componentInstance.mode = 'id';
        // -->Await: result
        modalRef.result
        .then(modalRes => {
            if (modalRes && modalRes.ok) {
            // -->Refresh
            this.refresh();
            }
        })
        .catch(err => {
            this.status.error();
            this.contactsService.sharedService.swalApiError(err);
        });`
  },
  {
    html: `
    <div class="modal nao-modal nao-modal-1" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header flex-column bg-primary text-white">
            <h6 class="modal-subtitle mb-1">Create</h6>
            <h6 class="modal-title">New user</h6>
          </div>
          <div class="modal-body">
            <form>
              <div [formGroup]="formGroup">

                <div formGroupName="info">
                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column no-gutters">
                      <label class="nao-label-sm-1">
                        First Name
                        <sup>*</sup>
                      </label>
                      <input [ngClass]="{'is-invalid': !(formGroup.get('info.firstName').pristine || formGroup.get('info.firstName').disabled || formGroup.get('info.firstName').valid)}" autocomplete="false" class="form-control form-control-sm mb-1"
                             formControlName="firstName" placeholder="First name"
                             type="text"/>
                    </div>
                    <div class="d-flex flex-column no-gutters">
                      <div
                        [hidden]="formGroup.get('info.firstName').pristine || formGroup.get('info.firstName').disabled || formGroup.get('info.firstName').valid">

                        <span [innerHtml]="formGroup.get('info.firstName').errors | formTranslateErrorsHTML"
                              class="nao-label-sm-1 text-danger"></span>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <!-- Input field-->
                    <div class="d-flex flex-column no-gutters">
                      <label class="nao-label-sm-1">
                        Last name
                        <sup>*</sup>
                      </label>
                      <input [ngClass]="{'is-invalid': !(formGroup.get('info.lastName').pristine || formGroup.get('info.lastName').disabled || formGroup.get('info.lastName').valid)}" autocomplete="false" class="form-control form-control-sm mb-1"
                             formControlName="lastName" placeholder="Last name"
                             type="text"/>
                    </div>
                    <div class="d-flex flex-column no-gutters">
                      <div
                        [hidden]="formGroup.get('info.lastName').pristine || formGroup.get('info.lastName').disabled || formGroup.get('info.lastName').valid">

                        <span [innerHtml]="formGroup.get('info.lastName').errors | formTranslateErrorsHTML"
                              class="nao-label-sm-1 text-danger"></span>
                      </div>
                    </div>
                  </div>


                </div>

                <div class="mb-3">
                  <!-- Input field-->
                  <div class="d-flex flex-column no-gutters">
                    <label class="nao-label-sm-1">
                      Email
                      <sup>*</sup>
                    </label>
                    <input [ngClass]="{'is-invalid': !(formGroup.get('email').pristine || formGroup.get('email').disabled || formGroup.get('email').valid)}" [placeholder]="'words.email' | flowTranslate" autocomplete="false"
                           class="form-control form-control-sm mb-1" formControlName="email"
                           type="text"/>
                  </div>
                  <div class="d-flex flex-column no-gutters">
                    <div
                      [hidden]="formGroup.get('email').pristine || formGroup.get('email').disabled || formGroup.get('email').valid">
                      <span [innerHtml]="formGroup.get('email').errors | formTranslateErrorsHTML"
                            class="nao-label-sm-1 text-danger"></span>
                    </div>
                  </div>
                </div>


                <div class="mb-2">
                  <!-- Input field-->
                  <div class="d-flex flex-column no-gutters">
                    <label class="nao-label-sm-1">
                      Password
                      <sup>*</sup>
                    </label>
                    <input [ngClass]="{'is-invalid': !(formGroup.get('password').pristine || formGroup.get('password').disabled || formGroup.get('password').valid)}" autocomplete="false" class="form-control form-control-sm mb-1"
                           formControlName="password"
                           type="password"/>
                  </div>
                  <div class="d-flex flex-column no-gutters">
                    <div
                      [hidden]="formGroup.get('password').pristine || formGroup.get('password').pristine || formGroup.get('password').disabled || formGroup.get('password').valid">
                      <span [innerHtml]="formGroup.get('password').errors | formTranslateErrorsHTML"
                            class="nao-label-sm-1 text-danger"></span>
                    </div>
                    <div class="nao-field-explanation nao-label-sm-1">Must have at least 8 characters</div>
                  </div>
                </div>

                <div formGroupName="settings">
                  <div class="d-flex custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" name="checkbox" id="checkbox1" formControlName="askPasswordOnNextLogin">
                    <label class="custom-control-label align-self-center fix-checkbox-center" for="checkbox1">
                      Require password change on next sign in
                      </label>
                  </div>

                  <div class="pt-1" [hidden]="formGroup.get('settings.askPasswordOnNextLogin').disabled || formGroup.get('settings.askPasswordOnNextLogin').valid">
                    <span [innerHtml]="formGroup.get('settings.askPasswordOnNextLogin').errors | formTranslateErrorsHTML" class="nao-label-sm-1 text-danger"></span>
                  </div>
                </div>


              </div>
            </form>
          </div>
          <div class="modal-footer">
        <button (click)="dismiss()" class="btn btn-sm btn-simple-dark-blue nao-btn-transition" type="button">
          Cancel
        </button>
        <button (click)="saveDocuserData()" [disabled]="formGroup.pristine || !formGroup.valid" class="btn btn-sm btn-simple-primary nao-btn-transition ml-2" type="button">
          Confirm
        </button>
      </div>
      </div>
     </div>
    </div>

    `
  },
  {
    html: `
        <div class="modal nao-modal nao-modal-2" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header flex-column">
                        <h5 class="modal-subtitle mb-1">Descriptor</h5>
                        <h5 class="modal-title">Subject</h5>
                    </div>
                    <div class="modal-body">
                        <p>A few things to keep in mind when suspending users:</p>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>User subscription fees still apply to the suspended users</p>
                        </div>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>The user’s data will remain intact but they won’t be able to sign-in as long as they’re suspended</p>
                        </div>
                        <div class="d-flex">
                            <i class="nao-icon-information mr-1"></i>
                            <p>The user’s data will remain intact but they won’t be able to sign-in as long as they’re suspended</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-simple-dark-blue btn-sm" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-simple-primary btn-sm">Create</button>
                    </div>
                </div>
            </div>
        </div>`
  },
  {
    html: `
<div class="nao-modal-fs-content d-flex flex-column">
  <!--Modal header-->
  <div class="nao-modal-header d-flex align-items-center bg-white">
    <!--Close button-->

    <button type="button" (click)="dismiss()" class="btn btn-box-shadow-none min-width-0 nao-cancel-btn"><i class="nao-icon-cancel"></i></button>
    <span class="vertical-separator"></span>

    <span class="mr-auto ">
         Create Singular
    </span>

    <!--Action buttons-->

    <button type="button" class="btn btn-simple-dark-blue" (click)="dismiss()">
      Cancel
    </button>



    <button type="button" (click)="saveDoc()" class="btn btn-primary ml-2" [disabled]="formGroup.invalid">
      Create Singular
    </button>

  </div>

  <!--Modal body-->
  <div class="nao-modal-body d-flex flex-grow-1">
    <div class="col-12 p-50 pb-3 pl-xl-100  w-100">
      <div [formGroup]="formGroup">

        <!-- Form section -->
        <h1 class="nao-text-uppercase-first text-primary font-size-18 mb-20 nao-mw-400 ">
          Basics
        </h1>
        <hr class="m-0 mb-20 nao-mw-400 border-text-6">

        <!-- Radio buttons -->
        <div class="d-flex mb-20 nao-mw-400">
          <label class="nao-custom-radio mr-30">
            <input type="radio" name="type" value="person" formControlName="type">
            <span class="radio-label">Person</span>
            <span class="checkmark"></span>
          </label>
          <label class="nao-custom-radio ">
            <input type="radio" name="type" value="company" formControlName="type">
            <span class="radio-label">Company</span>
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="mb-20">

          <!-- Input field-->
          <div class="d-flex flex-column">
            <label class="text-primary-light font-weight-semibold text-uppercase nao-label-sm-1">
              Full name
            </label>
            <input type="text" class="form-control form-control-sm nao-mw-400" formControlName="name" autocomplete="off" placeholder="Elon Musk' " [ngClass]="{'is-invalid': !formGroup.get('name').pristine && formGroup.get('name').invalid }" />
          </div>

          <!-- Message below -->
          <div class="d-flex flex-column">

            <!-- Error messages -->
            <div [hidden]="formGroup.get('name').pristine || formGroup.get('name').disabled || formGroup.get('name').valid">
              <div [innerHtml]="formGroup.get('name').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="mb-20">

          <!-- Input field-->
          <div class="d-flex flex-column">
            <label class="text-primary-light font-weight-semibold text-uppercase nao-label-sm-1">
              Email
            </label>
            <input type="text" class="form-control form-control-sm nao-mw-400" formControlName="email" autocomplete="off" placeholder="elon@spacex.com'" [ngClass]="{'is-invalid': !formGroup.get('email').pristine && formGroup.get('email').invalid }" />
          </div>

          <!-- Message below -->
          <div class="d-flex flex-column">

            <!-- Error messages -->
            <div [hidden]="formGroup.get('email').pristine || formGroup.get('email').disabled || formGroup.get('email').valid">
              <div [innerHtml]="formGroup.get('email').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="mb-20">

          <!-- Input field-->
          <div class="d-flex flex-column">
            <label class="text-primary-light font-weight-semibold text-uppercase nao-label-sm-1">
              Phone
            </label>
            <input type="text" class="form-control form-control-sm nao-mw-400" formControlName="phoneNo" autocomplete="off" placeholder="+1 (628) 219 2009" [ngClass]="{'is-invalid': !formGroup.get('phoneNo').pristine && formGroup.get('phoneNo').invalid }" />
          </div>

          <!-- Message below -->
          <div class="d-flex flex-column">

            <!-- Error messages -->
            <div [hidden]="formGroup.get('phoneNo').pristine || formGroup.get('phoneNo').disabled || formGroup.get('phoneNo').valid">
              <div [innerHtml]="formGroup.get('phoneNo').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="mb-20">

          <!-- Input field-->
          <div class="d-flex flex-column">
            <label class="text-primary-light font-weight-semibold text-uppercase nao-label-sm-1">
              Mobile phone
            </label>
            <input type="text" class="form-control form-control-sm nao-mw-400" formControlName="mobilePhoneNo" autocomplete="off" placeholder="+1 (628) 219 2009" [ngClass]="{'is-invalid': !formGroup.get('mobilePhoneNo').pristine && formGroup.get('mobilePhoneNo').invalid }" />
          </div>

          <!-- Message below -->
          <div class="d-flex flex-column">

            <!-- Error messages -->
            <div [hidden]="formGroup.get('mobilePhoneNo').pristine || formGroup.get('mobilePhoneNo').disabled || formGroup.get('mobilePhoneNo').valid">
              <div [innerHtml]="formGroup.get('mobilePhoneNo').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="mb-50"></div>

        <!-- Form section -->
        <h1 class="nao-text-uppercase-first text-primary font-size-18 mb-20 nao-mw-400 ">
          Address
        </h1>
        <hr class="m-0 mb-20 nao-mw-400 border-text-6">
        <div class="position-relative">
          <div class="overflow-auto">
            <table *ngIf="getAddresses().length > 0" style="min-width: 672px; max-width: 1205px;">
              <tbody>

              <!-- Header -->
              <tr class="font-size-12 font-weight-semibold text-primary-light border-bottom border-bg-2 text-uppercase">
                <td class="  p-0 pb-2" style="min-width: 180px; width: 265px;">
                  Address line 1
                </td>
                <td class="  p-0 pb-2" style="min-width: 180px; width: 265px;">
                  Address line 2
                </td>
                <td class="  p-0 pb-2" style="min-width: 150px; width: 210px;">
                  City
                </td>
                <td class="  p-0 pb-2" style="min-width: 72px; width: 72px;">
                  State
                </td>
                <td class="  p-0 pb-2" style="min-width: 92px; width: 92px;">
                  ZIP
                </td>
                <td class="  p-0 pb-2" style="min-width: 150px; width: 210px;">
                  Country
                </td>
                <td class="  p-0 pb-2" style=" width: 90px;">
                </td>
              </tr>

              <!-- Rows -->
              <ng-container formArrayName="addresses" *ngFor="let item of getAddresses().controls; let i = index;">
                <tr style="height: 62px" class="font-size-12 font-weight-semibold text-primary-light border-bottom border-bg-2 show-on-hover-container" [formGroupName]="i">
                  <td class=" p-0 pr-2 py-3" style="min-width: 180px; width: 265px;">
                    <input type="text" class="form-control form-control-sm" formControlName="line_1" autocomplete="off" placeholder="123 Market St" [ngClass]="{'is-invalid': !formGroup.get('addresses.' + i + '.line_1').pristine && formGroup.get('addresses.' + i + '.line_1').invalid }" />
                  </td>
                  <td class=" p-0 pr-2 py-3" style="min-width: 180px; width: 265px;">
                    <input type="text" class="form-control form-control-sm" formControlName="line_2" autocomplete="off" placeholder="Apt 903" [ngClass]="{'is-invalid': !formGroup.get('addresses.' + i + '.line_2').pristine && formGroup.get('addresses.' + i + '.line_2').invalid }" />
                  </td>
                  <td class=" p-0 pr-2 py-3" style="min-width: 150px; width: 210px;">
                    <input type="text" class="form-control form-control-sm" formControlName="city" autocomplete="off" placeholder="San Francisco" [ngClass]="{'is-invalid': !formGroup.get('addresses.' + i + '.city').pristine && formGroup.get('addresses.' + i + '.city').invalid }" />
                  </td>
                  <td class=" p-0 pr-2 py-3" style="min-width: 72px; width: 72px;">
                    <input type="text" class="form-control form-control-sm" formControlName="state" autocomplete="off" placeholder="CA" [ngClass]="{'is-invalid': !formGroup.get('addresses.' + i + '.state').pristine && formGroup.get('addresses.' + i + '.state').invalid }" />
                  </td>
                  <td class=" p-0 pr-2 py-3" style="min-width: 92px; width: 92px;">
                    <input type="text" class="form-control form-control-sm" formControlName="zip" autocomplete="off" placeholder="94103" [ngClass]="{'is-invalid': !formGroup.get('addresses.' + i + '.zip').pristine && formGroup.get('addresses.' + i + '.zip').invalid }" />
                  </td>
                  <td class=" p-0 pr-2 py-3" style="min-width: 150px; width: 210px;">
                    <ng-select class="nao-ng-select-sm nao-mw-400" bindLabel="name" bindValue="alpha3Code" placeholder="United States" [notFoundText]="'select not found'" [searchable]="true" [multiple]="false" [clearable]="false" [virtualScroll]="true" clearAllText="" formControlName="country" [items]="[{name: 'Denmark', alpha3Code: 'DNK'}, {name: 'United states', alpha3Code: 'USA'}]" appendTo=".position-relative" [ngClass]="{'ng-select-invalid': !formGroup.get('addresses.' + i + '.country').pristine && formGroup.get('addresses.' + i + '.country').invalid }">
                      <ng-template ng-label-tmp let-item="item" let-clear="clear">
                        {{ item.name }}
                      </ng-template>
                      <ng-template ng-option-tmp let-item="item" let-index="index" let-search="searchTerm">
                        {{ item.name }}
                      </ng-template>
                    </ng-select>
                  </td>
                  <td class=" text-center show-on-hover" style=" width: 90px;">
                    <button type="button" class="btn btn-simple-primary btn-sm" (click)="removeAddresses(i)">
                      Delete
                    </button>
                  </td>
                </tr>
              </ng-container>
              </tbody>
            </table>
          </div>

          <!--Add Button-->
          <a href="javascript:void(0)" class="d-inline-flex align-items-center text-color-primary font-size-14 p-1 mt-2" (click)="addAddresses()"><i class="nao-icon-add mr-1" style="font-size: 9px"></i>Add additional address</a>
        </div>
        <div class="mb-50"></div>


        <!-- Form section -->
        <h1 class="nao-text-uppercase-first text-primary font-size-18 mb-20 nao-mw-400 ">
          Financial details
        </h1>
        <div class="position-relative mb-20">
          <div class="d-flex flex-column">
            <label class="nao-label-sm-1 text-primary-light font-weight-semibold text-uppercase">
              Bill due date
            </label>
            <ng-select class="nao-ng-select-sm nao-mw-400" bindLabel="name" bindValue="value" placeholder="phrases.pick_a_due_date" [notFoundText]="'Select not found'" [searchable]="false" [multiple]="false" [clearable]="false" clearAllText="" formControlName="dueDays" appendTo=".position-relative" [ngClass]="{'ng-select-invalid': !(formGroup.get('dueDays').pristine || formGroup.get('dueDays').disabled || formGroup.get('dueDays').valid)}">
              <ng-option value="10">
                Net 10 days
              </ng-option>
              <ng-option value="15">
                Net 15 days
              </ng-option>
              <ng-option value="20">
                Net 20 days
              </ng-option>
              <ng-option value="30">
                Net 30 days
              </ng-option>
              <ng-option value="45">
                Net 45 days
              </ng-option>
              <ng-option value="60">
                Net 60 days
              </ng-option>
              <ng-option value="90">
                Net 90 days
              </ng-option>
            </ng-select>

            <!--Error message-->
            <div [hidden]="formGroup.get('dueDays').pristine || formGroup.get('dueDays').disabled || formGroup.get('dueDays').valid">
              <div [innerHtml]="formGroup.get('dueDays').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="position-relative mb-20">
          <div class="d-flex flex-column">
            <label class="text-primary-light font-weight-semibold text-uppercase nao-label-sm-1">
              Allowed payment methods
            </label>
            <ng-select class="nao-ng-select-sm nao-mw-400" bindLabel="name" bindValue="value" placeholder="phrases.pick_payment_methods" [searchable]="false" [multiple]="true" [clearable]="false" clearAllText="" formControlName="allowedPaymentMethods" [items]="[
  { name: 'Cheque', value: 'cheque' },
  { name: 'Credit card', value: 'card' },
  { name: 'Ach wire transfer', value: 'wire' }
]" [ngClass]="{'ng-select-invalid': !(formGroup.get('allowedPaymentMethods').pristine || formGroup.get('allowedPaymentMethods').disabled || formGroup.get('allowedPaymentMethods').valid)}" appendTo=".position-relative">
              <ng-template let-clear="clear" let-item="item" ng-label-tmp>
          <span class="nao-badge-select d-flex align-items-center">
                    <div class="mr-1">{{ item.name  }}</div>
                    <div class="d-flex" (click)="clear(item)"><img src="assets/icons/delete-filled.svg" width="9"></div>
                </span>
              </ng-template>
              <ng-template ng-option-tmp let-item="item" let-index="index" let-search="searchTerm">
                {{ item.name  }}
              </ng-template>
            </ng-select>

            <!--Error message-->
            <div [hidden]="formGroup.get('allowedPaymentMethods').pristine || formGroup.get('allowedPaymentMethods').disabled || formGroup.get('allowedPaymentMethods').valid">
              <div [innerHtml]="formGroup.get('allowedPaymentMethods').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="mb-50"></div>

        <!-- Form section -->
        <h1 class="nao-text-uppercase-first text-primary font-size-18 mb-20 nao-mw-400 ">
          Socials
        </h1>
        <hr class="m-0 mb-20 nao-mw-400 border-text-6">
        <div class="mb-20">

          <!-- Input field-->
          <div class="d-flex flex-column">
            <label class="text-primary-light font-weight-semibold text-uppercase nao-label-sm-1">
              Linkedin
            </label>
            <input type="text" class="form-control form-control-sm nao-mw-400" formControlName="linkedin" autocomplete="off" placeholder="linkedin.com/12213" [ngClass]="{'is-invalid': !formGroup.get('linkedin').pristine && formGroup.get('linkedin').invalid }" />
          </div>

          <!-- Message below -->
          <div class="d-flex flex-column">

            <!-- Error messages -->
            <div [hidden]="formGroup.get('linkedin').pristine || formGroup.get('linkedin').disabled || formGroup.get('linkedin').valid">
              <div [innerHtml]="formGroup.get('linkedin').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="mb-20">

          <!-- Input field-->
          <div class="d-flex flex-column">
            <label class="text-primary-light font-weight-semibold text-uppercase nao-label-sm-1">
              Twitter
            </label>
            <input type="text" class="form-control form-control-sm nao-mw-400" formControlName="twitter" autocomplete="off" placeholder="twitter.com/12213" [ngClass]="{'is-invalid': !formGroup.get('twitter').pristine && formGroup.get('twitter').invalid }" />
          </div>

          <!-- Message below -->
          <div class="d-flex flex-column">

            <!-- Error messages -->
            <div [hidden]="formGroup.get('twitter').pristine || formGroup.get('twitter').disabled || formGroup.get('twitter').valid">
              <div [innerHtml]="formGroup.get('twitter').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="mb-20">

          <!-- Input field-->
          <div class="d-flex flex-column">
            <label class="text-primary-light font-weight-semibold text-uppercase nao-label-sm-1">
              Facebook
            </label>
            <input type="text" class="form-control form-control-sm nao-mw-400" formControlName="facebook" autocomplete="off" placeholder="facebook.com/12213" [ngClass]="{'is-invalid': !formGroup.get('facebook').pristine && formGroup.get('facebook').invalid }" />
          </div>

          <!-- Message below -->
          <div class="d-flex flex-column">

            <!-- Error messages -->
            <div [hidden]="formGroup.get('facebook').pristine || formGroup.get('facebook').disabled || formGroup.get('facebook').valid">
              <div [innerHtml]="formGroup.get('facebook').errors" class="nao-label-xs-1 text-danger mt-1"></div>
            </div>
          </div>
        </div>
        <div class="mb-50"></div>

        <!-- Form section -->
        <h1 class="nao-text-uppercase-first text-primary font-size-18 mb-20 nao-mw-400 ">
          Additional
        </h1>
        <hr class="m-0 mb-20 nao-mw-400 border-text-6">
        <div class="mb-3">
          <div class="d-flex flex-column">
            <label class="nao-label-sm-1 text-primary-light font-weight-semibold text-uppercase">
              Notes
            </label>
            <textarea class="form-control form-control-sm mb-1 nao-mw-400" formControlName="notes" rows="4" placeholder="Insert a description..." [ngClass]="{'is-invalid': !formGroup.get('notes').pristine && formGroup.get('notes').invalid }"></textarea>

            <!-- Error messages -->
            <div [hidden]="formGroup.get('notes').pristine || formGroup.get('notes').disabled || formGroup.get('notes').valid">
              <span [innerHtml]="formGroup.get('notes').errors" class="nao-label-sm-1 text-danger"></span>
            </div>
          </div>
        </div>
        <div class="mb-50"></div>
      </div>
    </div>


  </div>
</div>

`,
    ts1: `
    constructor(private readonly modalService: NgbModal) { }

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
    `
  },
  {
    html: `
<div class="nao-modal-fs-content-2 d-flex flex-column bg-3">
  <!--Modal header-->
  <div class="nao-modal-header d-flex align-items-center bg-white">
    <!--Back button-->
    <div class="nao-back-btn-container">
      <button type="button" (click)="dismiss()" class="btn btn-simple-dark-blue min-width-0">Back</button>
    </div>

    <!--Info and pdf actions-->
    <div class="d-flex align-items-center mx-auto w-100 nao-modal-header-md">
        <span class="pr-40 font-size-18 font-weight-semibold">
          Elon Musk Invoice
      </span>

      <button type="button" class="btn btn-simple-dark-blue btn-sm ml-auto">
        Download pdf
      </button>

      <!--Price and currency-->
      <span class="pl-30 font-size-18 ">29600$</span>


    </div>

    <!--Fixes Centering the info-->
    <div class="nao-back-btn-container">
    </div>

  </div>

  <!--Modal body-->
  <div class="nao-modal-body d-flex flex-grow-1">
    <div class="text-center p-20">
      Content
    </div>

  </div>
</div>


`,
    ts1: `
    constructor(private readonly modalService: NgbModal) { }

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
    `
  },
];
