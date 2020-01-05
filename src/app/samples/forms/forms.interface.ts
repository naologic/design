export const FormsCodeBlocks = [
    {
        html: `
        <div class="modal nao-modal-2" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header flex-column">
              <h6 class="modal-title">
                Add contact <br />
              </h6>
              <div>Create a new contact</div>
            </div>
            <div class="modal-body nao-modal-body-2">
              <form>
                <div [formGroup]="formGroup">
                  <div formGroupName="info">
                    <div class="d-flex mb-3">
                      <div class="col-5 text-right">
                        <label class="nao-form-label-inline">
                          First name
                          <sup class="text-danger">*</sup>
                        </label>
                      </div>
                      <div class="col">
                        <input type="text" autocomplete="off" class="form-control nao-input-mw-210 "
                          formControlName="firstName" placeholder="First name" />
                        <div class="pt-2 pb-2"
                          [hidden]="formGroup.get('info.firstName').pristine || formGroup.get('info.firstName').disabled || formGroup.get('info.firstName').valid">
                          <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                          <span *ngIf="formGroup.get('info.firstName').errors" class="text-danger">
                            First name is required.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <div class="col-5 text-right">
                        <label class="nao-form-label-inline">
                          Last name
                          <sup class="text-danger">*</sup>
                        </label>
                      </div>
                      <div class="col">
                        <input type="text" autocomplete="off" class="form-control nao-input-mw-210 "
                          formControlName="lastName" placeholder="Last name" />
                        <div class="pt-2 pb-2"
                          [hidden]="formGroup.get('info.lastName').pristine || formGroup.get('info.lastName').disabled || formGroup.get('info.lastName').valid">
                          <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                          <span *ngIf="formGroup.get('info.lastName').errors" class="text-danger">
                            Last name is required.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-3">
                    <div class="col-5 text-right">
                      <label class="nao-form-label-inline">
                        Company
                      </label>
                    </div>
                    <div class="col pb-2">
                      <ng-select class="nao-input-mw-210" [searchable]="true" bindLabel="name" bindValue="value"
                        [multiple]="false" placeholder="Type to search" clearAllText="Clear" notFoundText="Not found"
                        [clearable]="false" formControlName="companyId">
                        <ng-option value="1">
                          First company
                        </ng-option>
                        <ng-option value="2">
                          Second company
                        </ng-option>
                        <ng-option value="3">
                          Third company
                        </ng-option>
                      </ng-select>
                      <div class="pt-2">
                        <!-- todo: add this bullet -->
                        <a href="javascript:void(0)" class="text-primary"><i class="fas fa-plus-circle"></i>Create</a>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-3">
                    <div class="col-5 text-right">
                      <label class="nao-form-label-inline">
                        Email
                        <sup class="text-danger">*</sup>
                      </label>
                    </div>
                    <div class="col">
                      <input type="text" autocomplete="off" class="form-control nao-input-mw-210"
                        formControlName="email" placeholder="Email" />
                      <div class="pt-2 pb-2"
                        [hidden]="formGroup.get('email').pristine || formGroup.get('email').disabled || formGroup.get('email').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('email').errors" class="text-danger">
                          Email is required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div class="d-flex mb-3">
                    <div class="col-5 text-right">
                      <label class="nao-form-label-inline">
                        Language
                      </label>
                    </div>
                    <div class="col pb-2">
                      <ng-select class="nao-input-mw-210" [searchable]="true" bindLabel="name" bindValue="value"
                        [multiple]="false" clearAllText="Clear" notFoundText="Not found" [clearable]="false"
                        formControlName="languageId">
                        <ng-option value="1">
                          English
                        </ng-option>
                        <ng-option value="2">
                          German
                        </ng-option>
                        <ng-option value="3">
                          France
                        </ng-option>
                      </ng-select>
                      <div class="pt-2 pb-2"
                        [hidden]="formGroup.get('languageId').pristine || formGroup.get('languageId').disabled || formGroup.get('languageId').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('languageId').errors" class="text-danger">
                          Invalid language.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-3">
                    <div class="col-5 text-right">
                      <label class="nao-form-label-inline">
                        Country
                        <sup class="text-danger">*</sup>
                      </label>
                    </div>
                    <div class="col pb-2">
                      <ng-select class="nao-input-mw-210" [searchable]="true" bindLabel="name" bindValue="value"
                        [multiple]="false" clearAllText="Clear" notFoundText="Not found" [clearable]="false"
                        formControlName="countryId">
                        <ng-option value="1">
                          USA
                        </ng-option>
                        <ng-option value="2">
                          Germany
                        </ng-option>
                        <ng-option value="3">
                          France
                        </ng-option>
                      </ng-select>
                      <div class="pt-2 pb-2"
                        [hidden]="formGroup.get('countryId').pristine || formGroup.get('countryId').disabled || formGroup.get('countryId').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('countryId').errors" class="text-danger">
                          Country error
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-3">
                    <div class="col-5 text-right">
                      <label class="nao-form-label-inline">
                        Facebook
                      </label>
                    </div>
                    <div class="col">
                      <input type="text" autocomplete="off" class="form-control nao-input-mw-210"
                        formControlName="facebook" placeholder="Facebook" />
                      <div class="pt-2 pb-2"
                        [hidden]="formGroup.get('facebook').pristine || formGroup.get('facebook').disabled || formGroup.get('facebook').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('facebook').errors" class="text-danger"></span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-3">
                    <div class="col-5 text-right">
                      <label class="nao-form-label-inline">
                        Linkedin
                      </label>
                    </div>
                    <div class="col">
                      <input type="text" autocomplete="off" class="form-control nao-input-mw-210"
                        formControlName="linkedin" placeholder="Linkedin" />
                      <div class="pt-2 pb-2"
                        [hidden]="formGroup.get('linkedin').pristine || formGroup.get('linkedin').disabled || formGroup.get('linkedin').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('linkedin').errors" class="text-danger"></span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-3">
                    <div class="col-5 text-right">
                      <label class="nao-form-label-inline">
                        Twitter
                      </label>
                    </div>
                    <div class="col">
                      <input type="text" autocomplete="off" class="form-control nao-input-mw-210"
                        formControlName="twitter" placeholder="twitter" />
                      <div class="pt-2 pb-2"
                        [hidden]="formGroup.get('twitter').pristine || formGroup.get('twitter').disabled || formGroup.get('twitter').valid">
                        <span class="badge badge-pill badge-danger-light"><strong>!</strong></span>
                        <span *ngIf="formGroup.get('twitter').errors" class="text-danger"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-only-dark-blue nao-btn-transition">
                Cancel
              </button>
              <button type="button" data-style="expand-right" class="btn btn-primary nao-btn-transition ml-2"
                [disabled]="formGroup.pristine || !formGroup.valid">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
        `,
    ts1: `
    public formGroup = new FormGroup({
        companyId: new FormControl(''),
        countryId: new FormControl('', { validators: [Validators.required] }),
        email: new FormControl('', { validators: [Validators.required, Validators.email] }),
        gender: new FormControl(''),
        info: new FormGroup({
          firstName: new FormControl('', { validators: [Validators.required] }),
          lastName: new FormControl('', { validators: [Validators.required] }),
        }),
        languageId: new FormControl(''),
        linkedin: new FormControl(''),
        facebook: new FormControl(''),
        twitter: new FormControl(''),
        website: new FormControl(''),
      });`},
];
