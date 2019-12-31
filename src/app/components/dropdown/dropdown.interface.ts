export const DropdownCodeBlocks = [
    {
        html: `
        <div class="btn-group" ngbDropdown container="body" [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
          <button type="button" class="btn p-0" ngbDropdownToggle>
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
            <button type="button" class="btn btn-text-only-2" ngbDropdownToggle>
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
        <div ngbDropdown class="btn-group dropdown-remove-arrow" [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
            <a ngbDropdownToggle class="nav" href="javascript:void(0)">
                <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                <img class="d-block nao-dropdown-avatar rounded-circle"
                src="https://d326ktrzuzy7hz.cloudfront.net/images/placeholder/default-avatar.png" />
                </span>
            </a>
            <div ngbDropdownMenu class="nao-dropdown-1">
                <div class="nao-dropdown-profile">
                    <div class="d-flex">
                    <img class="d-block nao-dropdown-avatar rounded-circle mr-2"
                        src="https://d326ktrzuzy7hz.cloudfront.net/images/placeholder/default-avatar.png" />
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
        <div class="btn-group" ngbDropdown [placement]="$flow.isRTL() ? 'bottom-right' : 'bottom-left'">
            <button class="btn nao-btn-dropdown-menu-1" ngbDropdownToggle>
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
        <label class="nao-form-label-above">Simple ng-select</label>
        <ng-select class="nao-input-mw-210" placeholder="Select a value">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-form-label-above">Ng-select where you can't clear the selected value.</label>
        <ng-select class="nao-input-mw-210" placeholder="Select a value" [clearable]="false" [clearOnBackspace]="false">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-form-label-above">Ng-select that has the dropdown position above and you could select multiple values.</label>
        <ng-select class="nao-input-mw-210" placeholder="Select a value" dropdownPosition="top" [multiple]="true">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-form-label-above">Ng-select that is loading</label>
        <ng-select class="nao-input-mw-210" placeholder="Select a value" loading="true" loadingText="Nao loading">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-form-label-above">Ng-select with custom <code>not found</code> search message</label>
        <ng-select class="nao-input-mw-210" placeholder="Select a value" searchable="true" notFoundText="Nao has nothing">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>`
    },
    {
        html: `
        <label class="nao-form-label-above">Default ng-select</label>
        <ng-select class="nao-input-mw-210" placeholder="Default">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>
        <label class="nao-form-label-above">Small ng-select</label>
        <ng-select class="nao-ng-select-sm nao-input-mw-210" placeholder="Small">
          <ng-option>Option 1</ng-option>
          <ng-option>Option 2</ng-option>
          <ng-option>Option 3</ng-option>
        </ng-select>`
    }
];
