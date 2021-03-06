export const DropdownCodeBlocks = [
  {
    html: `
        <div class="btn-group" ngbDropdown container="body" [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
          <button type="button" class="btn p-0 btn-no-box-shadow" ngbDropdownToggle>
            Menu
          </button>
          <div class="nao-dropdown-1" ngbDropdownMenu>
            <a class="dropdown-item" href="javascript:void(0)">Delete</a>
          </div>
        </div>`
  },
  {
    html: `
        <div class="btn-group" ngbDropdown container="body" [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
            <button type="button" class="btn btn-simple-primary" ngbDropdownToggle>
                Menu
            </button>
            <div class="nao-dropdown-1" ngbDropdownMenu>
                <a class="dropdown-item" href="javascript:void(0)">Menu item 1</a>
                <a class="dropdown-item" href="javascript:void(0)">Menu item 2</a>
                <a class="dropdown-item" href="javascript:void(0)">Menu item 3</a>
                <a class="dropdown-item" href="javascript:void(0)">Menu item 4</a>
            </div>
        </div>`
  },
  {
    html: `
        <div ngbDropdown class="btn-group dropdown-remove-arrow"
          [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
          <a ngbDropdownToggle href="javascript:void(0)">
            <span class="d-inline-flex align-items-center nao-dropdown-avatar-container">
              <img class="d-block nao-dropdown-avatar rounded-circle"
                src="assets-local/images/placeholder/default-avatar.png" />
                <span class="dot" [ngClass]="{ 'dot_disconnected': false, 'dot_connected': true }"></span>
            </span>
          </a>
          <div ngbDropdownMenu class="nao-dropdown-1">
            <div class="nao-dropdown-profile">
              <div class="d-flex">
              <span class="d-inline-flex align-items-center nao-dropdown-avatar-container mr-2">
              <img class="d-block nao-dropdown-avatar rounded-circle"
                src="assets-local/images/placeholder/default-avatar.png" />
              <span class="dot" [ngClass]="{ 'dot_disconnected': false, 'dot_connected': true }"></span>
            </span>
                <div class="d-flex flex-column">
                  <span class="font-weight-bold">Jon Doe</span>
                  <span class="nao-dropdown-small-text">jon@naologic.com</span>
                </div>
              </div>
            </div>
            <a href="javascript:void(0)" class="dropdown-item">
              Your account
            </a>
            <a href="javascript:void(0)" class="dropdown-item">
              Invite People
            </a>
            <a href="javascript:void(0)" class="dropdown-item">
              Log Out
            </a>
          </div>
        </div>`
  },
  {
    html: `
        <div class="btn-group" ngbDropdown [placement]="$flow.isRTL() ? 'bottom-left' : 'bottom-right'">
          <button class="btn nao-btn-dropdown-menu-1 btn-no-box-shadow" ngbDropdownToggle>
            Currency
          </button>
          <div class="nao-dropdown-2" ngbDropdownMenu>
            <a class="dropdown-item" href="javascript:void(0)">Currency</a>
            <a class="dropdown-item" href="javascript:void(0)">Percentage</a>
          </div>
        </div>`
  },
  {
    html: `
        <div class="dropdown-remove-arrow" ngbDropdown container="body" [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
            <button type="button" class="btn btn-outline-primary" ngbDropdownToggle>
                Include
            </button>
            <div class="p-0 nao-dropdown-3" ngbDropdownMenu>
                <div class="dropdown-item dropdown-item-header">Header example
                </div>
                <a class="dropdown-item" href="javascript:void(0)">Menu item 1</a>
                <a class="dropdown-item disabled" href="javascript:void(0)">Menu disabled</a>
                <a class="dropdown-item disabled" href="javascript:void(0)">Menu disabled</a>
                <a class="dropdown-item" href="javascript:void(0)">Menu item 4</a>
            </div>
        </div>`
  },
  {
    html: `
        <div class="dropdown-remove-arrow" ngbDropdown container="body" [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
            <button type="button" class="btn btn-outline-primary" ngbDropdownToggle>
                Include
            </button>
            <div class="p-0 nao-dropdown-3" ngbDropdownMenu>
                <div class="dropdown-item dropdown-item-header">Header example
                </div>
                <a class="dropdown-item" href="javascript:void(0)" style="min-width: 300px">Menu item 1</a>
                <a class="dropdown-item" href="javascript:void(0)" style="min-width: 300px">Menu item 2</a>
                <a class="dropdown-item" href="javascript:void(0)" style="min-width: 300px">Menu item 3</a>
            </div>
        </div>`
  },
  {
    html: `
        <label class="nao-label-1">Simple ng-select</label>
        <ng-select class="nao-mw-210" placeholder="Select a value" [searchable]="false">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-label-1">Ng-select where you can't clear the selected value.</label>
        <ng-select class="nao-mw-210" placeholder="Select a value" [clearable]="false" [clearOnBackspace]="false">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-label-1">Ng-select that has the dropdown position above and you could select multiple values.</label>
        <ng-select class="nao-mw-210" placeholder="Select a value" dropdownPosition="top" [multiple]="true">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-label-1">Ng-select that is loading</label>
        <ng-select class="nao-mw-210" placeholder="Select a value" loading="true" loadingText="Nao loading">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-label-1">Ng-select with custom <code>not found</code> search message</label>
        <ng-select class="nao-mw-210" placeholder="Select a value" searchable="true" notFoundText="Sorry no matching options">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>`
  },
  {
    html: `
        <label class="nao-label-1">Default ng-select</label>
        <ng-select class="nao-mw-210" placeholder="Default">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-label-1">Small ng-select</label>
        <ng-select class="nao-ng-select-sm nao-mw-210" placeholder="Small">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>`
  },
  {
    html: `
        <label class="nao-label-1">Nao ng-select 2</label>
        <ng-select class="nao-ng-select-sm-2" [clearable]="false" [searchable]="false" placeholder="Choose type of measurement">
          <ng-option value="cm">
            Cm</ng-option>
          <ng-option value="in">
            In</ng-option>
        </ng-select>`
  },
  {
    html: `
    <div class="btn-group dropdown-remove-arrow" container="body" ngbDropdown placement="bottom">
          <button class="btn btn-no-box-shadow btn-no-min-width btn-sm p-1" ngbDropdownToggle type="button">
            <i class="nao-icon-help text-primary-lightest"></i> Helper tool
          </button>
          <div class="nao-helper-tool" ngbDropdownMenu>
            <div class="title mb-3 text-uppercase">Helper tool</div>
            <div class="d-flex">
              <i class="nao-icon-information"></i>
              <div>PiedPiper Deployment 1 currently has 8 active business apps. You can add or remove apps from the
                deployment right here and take the changes live immediately
              </div>
            </div>
            <div class="d-flex">
              <i class="nao-icon-information"></i>
              <div>It might take 10-15 minutes for the new functionality to be live in some cases.</div>
            </div>
          </div>
        </div>`
  },
  {
    html: `
      <div class="nao-sort-select-container">
          <ng-select bindLabel="name" bindValue="id" [clearable]="false" [searchable]="false" [multiple]="false" clearAllText="" [readonly]="false">
            <ng-option value="7">Last 7 days</ng-option>
            <ng-option value="28">Last 28 days</ng-option>
            <ng-option value="90">Last 90 days</ng-option>
          </ng-select>
          <div class="nao-sort-text">Period</div>
        </div>`
  }, {
    html: `
      <div class="btn-group" ngbDropdown container="body"
             [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
          <button type="button" class="btn btn-simple-primary" ngbDropdownToggle>
            Menu
          </button>
          <div class="nao-dropdown-checkboxes" ngbDropdownMenu>
            <!--Iterate over checkboxes-->
            <div class="nao-dropdown-item">

              <div class="d-flex custom-control custom-checkbox nao-custom-checkbox-sm">
                <input id="checkbox1" class="custom-control-input" type="checkbox">
                <label for="checkbox1" class="custom-control-label"></label>
                <label for="checkbox1" class="align-self-center mb-0 label-option-checkbox">Checkbox 1</label>
              </div>
              <div class="d-flex custom-control custom-checkbox nao-custom-checkbox-sm">
                <input id="checkbox2" class="custom-control-input" type="checkbox">
                <label for="checkbox2" class="custom-control-label"></label>
                <label for="checkbox2" class="align-self-center mb-0 label-option-checkbox">Checkbox 2</label>
              </div>
              <div class="d-flex custom-control custom-checkbox nao-custom-checkbox-sm">
                <input id="checkbox3" class="custom-control-input" type="checkbox">
                <label for="checkbox3" class="custom-control-label"></label>
                <label for="checkbox3" class="align-self-center mb-0 label-option-checkbox">Checkbox 3</label>
              </div>
              <div class="d-flex custom-control custom-checkbox nao-custom-checkbox-sm">
                <input id="checkbox4" class="custom-control-input" type="checkbox">
                <label for="checkbox4" class="custom-control-label"></label>
                <label for="checkbox4" class="align-self-center mb-0 label-option-checkbox">Checkbox 4</label>
              </div>
              <div class="d-flex custom-control custom-checkbox nao-custom-checkbox-sm">
                <input id="checkbox5" class="custom-control-input" type="checkbox">
                <label for="checkbox5" class="custom-control-label"></label>
                <label for="checkbox5" class="align-self-center mb-0 label-option-checkbox">Checkbox 5</label>
              </div>
            </div>
          </div>
        </div>
        `
  }
];
