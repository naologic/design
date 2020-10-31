export const TableCodeBlocks = [
  {
    html: `
    <div class="card nao-card-table-1 mb-5" [ngClass]="{'nao-condensed-table': paging.tableCondensed$.value}">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent btn-no-min-width btn-no-box-shadow" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title mb-0">
                {{ noSelectedRows() }} {{ (noSelectedRows() === 1 ? 'selected contact' : 'selected contacts') }}
              </div>
            </div>
            <div class="">
              <button class="btn btn-simple-primary nao-btn-transition">
                Delete multiple
              </button>
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="mr-3">
              <div class="card-header-title">
                Contacts&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pr-3">
              <span class="nao-table-info">
                3 contacts
              </span>
            </div>
            <div class="">
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 1
              </button>
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 2
              </button>
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 3
              </button>
            </div>
            <div class="nao-condensed-btn-group">
              <div class="nao-condensed-btn-group">
                <button type="button" class="btn btn-flip btn-condensed"
                  [ngClass]="paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(true)">Condensed</button>
                <button type="button" class="btn btn-flip btn-relaxed"
                  [ngClass]="!paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(false)">Relaxed</button>
              </div>
            </div>
          </div>
          <div class="card-search d-flex align-items-center justify-content-between">
            <div class="col-7 align-middle">
              <ng-select bindValue="query" [multiple]="true" placeholder="Add filter" [clearable]="false"
                clearAllText="Clear">
                <ng-template ng-label-tmp let-item="item" let-clear="clear">
                  <span class="ng-value-label">
                    {{ item.fieldName }}: <strong>'{{ item.term }}'</strong>
                  </span>
                  <span class="ng-value-icon right" aria-hidden="true">×</span>
                </ng-template>
                <ng-option *ngFor="let item of searchFor" [value]="item">{{ item.value }}
                </ng-option>
              </ng-select>
            </div>
            <div class="">
              <button type="button" class="btn btn-transparent text-dark-blue btn-no-box-shadow" (click)="searchFormGroup.empty()">
                Clear filter
              </button>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" class="nao-th-checkbox">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="nao-th" style="width: 20%">Name</th>
                  <th scope="col" class="nao-th" style="width: 20%">Email</th>
                  <th scope="col" class="nao-th" style="width: 20%">Company</th>
                  <th scope="col" class="nao-th"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <td colspan="100">
                  <loader-table checkbox="true" icon="true" numberOfRows="10"
                    [condensed]="paging.tableCondensed$.value"></loader-table>
                </td>
              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex flex-row align-items-center justify-content-between nao-pagination">
            <div>
              Rows per page:
              <ng-select (change)="paging.perPage$.next($event);"
                         [clearable]="false"
                         [disabled]="false"
                         [items]="[5, 10, 20, 50, 100]"
                         [ngModel]="paging.perPage$.getValue()"
                         [searchable]="false"
                         class="nao-ng-select-sm d-inline-block w-auto">
              </ng-select>

            </div>

            <div class="ml-auto d-flex align-items-center">
              <ngb-pagination [(page)]="paging.currentPage"
                              [boundaryLinks]="true"
                              [collectionSize]="paging.totalRows"
                              [directionLinks]="true"
                              [disabled]="false"
                              [maxSize]="paging.maxSize"
                              [pageSize]="paging.perPage$.getValue()">
                <ng-template ngbPaginationPrevious><i class="nao-icon-arrow-back-1"></i></ng-template>
                <ng-template ngbPaginationFirst>
                  <div class="d-flex" style="padding-top: 4px">
                    <div class="nao-line-pagination"></div>
                    <i class="nao-icon-arrow-back-1"></i>
                  </div>
                </ng-template>
                <ng-template ngbPaginationNext><i class="nao-icon-arrow-next-1"></i></ng-template>
                <ng-template ngbPaginationLast>
                  <div class="d-flex" style="padding-top: 4px">
                    <i class="nao-icon-arrow-next-1"></i>
                    <div class="nao-line-pagination"></div>
                  </div>
                </ng-template>
              </ngb-pagination>

              <div class="pagination-separator"></div>
              <div>
                page {{ paging.currentPage }} of {{ paging.totalPages !== 0 ? paging.totalPages : 1 }}
              </div>
            </div>


          </div>
        </div>`
  },
  {
    html: `
      <ng-template #rowOverlay let-item let-i="i">
          <div class="d-flex justify-content-end align-items-center nao-row-overlay">
            <div>
              <button class="btn btn-sm btn-simple-primary">
                Edit
              </button>
              <button class="btn btn-sm btn-simple-primary">
                Delete
              </button>
              <div ngbDropdown class="d-inline-block btn-group dropdown-remove-arrow" container="body">
                <button class="btn btn-no-box-shadow btn-sm" ngbDropdownToggle>
                  <i class="nao-icon-additional-options"></i>
                </button>
                <div ngbDropdownMenu class="nao-dropdown-1">
                  <a class="dropdown-item" href="javascript:void(0)" >Edit name</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Change access level</a>
                  <a class="dropdown-item" href="javascript:void(0)">Change password</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Deactivate
                    Account</a>
                  <a class="dropdown-item dropdown-item-danger" href="javascript:void(0)">Delete
                    Account</a>
                </div>
              </div>
            </div>
          </div>
        </ng-template>

      <div class="card nao-card-table-1 mb-5" [ngClass]="{'nao-condensed-table': paging.tableCondensed$.value}">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent btn-no-min-width btn-no-box-shadow" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title mb-0">
                {{ noSelectedRows() }} {{ (noSelectedRows() === 1 ? 'selected contact' : 'selected contacts') }}
              </div>
            </div>
            <div class="">
              <button class="btn btn-simple-primary nao-btn-transition">
                Delete multiple
              </button>
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="mr-3">
              <div class="card-header-title">
                Contacts&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pr-3">
              <span class="nao-table-info">
                3 contacts
              </span>
            </div>
            <div class="">
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 1
              </button>
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 2
              </button>
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 3
              </button>
            </div>
            <div class="nao-condensed-btn-group">
              <div class="nao-condensed-btn-group">
                <button type="button" class="btn btn-flip btn-condensed"
                  [ngClass]="paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(true)">Condensed</button>
                <button type="button" class="btn btn-flip btn-relaxed"
                  [ngClass]="!paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(false)">Relaxed</button>
              </div>
            </div>
          </div>
          <div class="card-search d-flex align-items-center justify-content-between">
            <div class="col-7 align-middle">
              <ng-select bindValue="query" [multiple]="true" placeholder="Add filter" [clearable]="false"
                clearAllText="Clear">
                <ng-template ng-label-tmp let-item="item" let-clear="clear">
                  <span class="ng-value-label">
                    {{ item.fieldName }}: <strong>'{{ item.term }}'</strong>
                  </span>
                  <span class="ng-value-icon right" aria-hidden="true">×</span>
                </ng-template>
                <ng-option *ngFor="let item of searchFor" [value]="item">{{ item.value }}
                </ng-option>
              </ng-select>
            </div>
            <div class="">
              <button type="button" class="btn btn-transparent text-dark-blue btn-no-box-shadow" (click)="searchFormGroup.empty()">
                Clear filter
              </button>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" class="nao-th-checkbox">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="nao-th" style="width: 20%">Name</th>
                  <th scope="col" class="nao-th" style="width: 20%">Email</th>
                  <th scope="col" class="nao-th" style="width: 20%">Company</th>
                  <th scope="col" class="nao-th"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr *ngFor="let item of dataTable; let i = index; let last = last"
                  [ngClass]="{'selected': item.selected}">
                  <td class="align-middle">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectChange($event, i)"
                        [(ngModel)]="item.selected">
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.name.status === 'success', 'td-danger': item.name.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.name.value }}</div>
                    </div>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.email.status === 'success', 'td-danger': item.email.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.email.value }}</div>
                    </div>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.company.status === 'success', 'td-danger': item.company.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.company.value }}</div>
                    </div>
                  </td>
                  <td class="py-0" style="position: relative;">
                    <div class="nao-row-overlay-container show-on-hover mr-4" *ngIf="noSelectedRows() === 0">
                      <ng-template *ngTemplateOutlet="rowOverlay; context: { $implicit: item, i: i }"></ng-template>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex flex-row align-items-center justify-content-between nao-pagination">
            <div>
              Rows per page:
              <ng-select (change)="paging.perPage$.next($event);"
                         [clearable]="false"
                         [disabled]="false"
                         [items]="[5, 10, 20, 50, 100]"
                         [ngModel]="paging.perPage$.getValue()"
                         [searchable]="false"
                         class="nao-ng-select-sm d-inline-block w-auto">
              </ng-select>

            </div>

            <div class="ml-auto d-flex align-items-center">
              <ngb-pagination [(page)]="paging.currentPage"
                              [boundaryLinks]="true"
                              [collectionSize]="paging.totalRows"
                              [directionLinks]="true"
                              [disabled]="false"
                              [maxSize]="paging.maxSize"
                              [pageSize]="paging.perPage$.getValue()">
                <ng-template ngbPaginationPrevious><i class="nao-icon-arrow-back-1"></i></ng-template>
                <ng-template ngbPaginationFirst>
                  <div class="d-flex" style="padding-top: 4px">
                    <div class="nao-line-pagination"></div>
                    <i class="nao-icon-arrow-back-1"></i>
                  </div>
                </ng-template>
                <ng-template ngbPaginationNext><i class="nao-icon-arrow-next-1"></i></ng-template>
                <ng-template ngbPaginationLast>
                  <div class="d-flex" style="padding-top: 4px">
                    <i class="nao-icon-arrow-next-1"></i>
                    <div class="nao-line-pagination"></div>
                  </div>
                </ng-template>
              </ngb-pagination>

              <div class="pagination-separator"></div>
              <div>
                page {{ paging.currentPage }} of {{ paging.totalPages !== 0 ? paging.totalPages : 1 }}
              </div>
            </div>


          </div>
        </div>`,
    ts1: `
    public paging = {
      currentPage: 1, totalPages: 1, currentRows: 0, totalRows: 0, maxSize: 5,
      perPage$: new BehaviorSubject<number>(20), selectAll: false, someSelected: false,
      tableCondensed$: new BehaviorSubject<boolean>(false)
    };
    public filter = {
      search: new BehaviorSubject(''), searchType: new BehaviorSubject<string>('$or'),
      query: new BehaviorSubject<string>(null), searchFields: ['name'], sub: null
    };
    public sort = { lastSort: '', by: new BehaviorSubject(null), reverse: true, sub: null };
    public subs: { search$: Subscription, sort$: Subscription } = { search$: null, sort$: null };
    public searchFormGroup;
    public searchFor = [];
    public dataTable = [
         {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: 'success' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: ''},
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon', status: 'fail' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: 'fail' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: 'success' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon', status: 'fail' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: 'fail' }, selected: false
    },
    ];`,
    ts2: `
    /**
     * Has any selected rows
     */
    public noSelectedRows(): number {
      // -->Cut: the results to new size
      return this.dataTable.filter(r => r.selected).length;
    }
    /**
     * De-Select all
     */
    public deselectAll() {
      // -->Cut: the results to new size
      this.dataTable.map(d => {
        d.selected = false;
        return d;
      });
      this.paging.selectAll = false;
    }

    /**
     * Select all
     */
    public selectAllChange() {
      // -->Cut: the results to new size
      this.dataTable.map(d => {
        d.selected = !this.paging.selectAll;
        return d;
      });
    }

    /**
     * Select any other
     */
    public selectChange($ev, i) {
      // -->Set: the selected
      this.dataTable[i].selected = $ev;
      // -->Cut: the results to new size
      this.paging.selectAll = every(this.dataTable.map(d => d.selected));
      // -->Check: some
      this.paging.someSelected = some(this.dataTable.map(d => d.selected));
    }`
  },
  {
    html: `
      <ng-template #rowOverlay let-item let-i="i">
          <div class="d-flex justify-content-end align-items-center nao-row-overlay">
            <div>
              <button class="btn btn-sm btn-simple-primary">
                Edit
              </button>
              <button class="btn btn-sm btn-simple-primary">
                Delete
              </button>
              <div ngbDropdown class="d-inline-block btn-group dropdown-remove-arrow" container="body">
                <button class="btn btn-no-box-shadow btn-sm" ngbDropdownToggle>
                  <i class="nao-icon-additional-options"></i>
                </button>
                <div ngbDropdownMenu class="nao-dropdown-1">
                  <a class="dropdown-item" href="javascript:void(0)" >Edit name</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Change access level</a>
                  <a class="dropdown-item" href="javascript:void(0)">Change password</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Deactivate
                    Account</a>
                  <a class="dropdown-item dropdown-item-danger" href="javascript:void(0)">Delete
                    Account</a>
                </div>
              </div>
            </div>
          </div>
        </ng-template>

      <div class="card nao-card-table-1 mb-5" [ngClass]="{'nao-condensed-table': paging.tableCondensed$.value}">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent btn-no-min-width btn-no-box-shadow" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title mb-0">
                {{ noSelectedRows() }} {{ (noSelectedRows() === 1 ? 'selected contact' : 'selected contacts') }}
              </div>
            </div>
            <div class="">
              <button class="btn btn-simple-primary nao-btn-transition">
                Delete multiple
              </button>
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="mr-3">
              <div class="card-header-title">
                Contacts&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pr-3">
              <span class="nao-table-info">
                3 contacts
              </span>
            </div>
            <div class="">
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 1
              </button>
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 2
              </button>
              <button class="btn btn-simple-primary nao-btn-transition">
                Option 3
              </button>
            </div>
            <div class="nao-condensed-btn-group">
              <div class="nao-condensed-btn-group">
                <button type="button" class="btn btn-flip btn-condensed"
                  [ngClass]="paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(true)">Condensed</button>
                <button type="button" class="btn btn-flip btn-relaxed"
                  [ngClass]="!paging.tableCondensed$.value ? 'flipped' : ''"
                  (click)="paging.tableCondensed$.next(false)">Relaxed</button>
              </div>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" class="nao-th-checkbox">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="nao-th" style="width: 20%">Name</th>
                  <th scope="col" class="nao-th" style="width: 20%">Email</th>
                  <th scope="col" class="nao-th" style="width: 20%">Company</th>
                  <th scope="col" class="nao-th"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr *ngFor="let item of dataTable; let i = index; let last = last"
                  [ngClass]="{'selected': item.selected}">
                  <td class="align-middle">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectChange($event, i)"
                        [(ngModel)]="item.selected">
                      <span class="custom-control-label"></span>
                    </label>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.name.status === 'success', 'td-danger': item.name.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.name.value }}</div>
                    </div>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.email.status === 'success', 'td-danger': item.email.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.email.value }}</div>
                    </div>
                  </td>
                  <td class="align-middle"
                    [ngClass]="{'td-success': item.company.status === 'success', 'td-danger': item.company.status === 'fail'}">
                    <div class="d-flex align-items-center">
                      <div class="cell-multiline-header">{{ item.company.value }}</div>
                    </div>
                  </td>
                  <td class="py-0" style="position: relative;">
                    <div class="nao-row-overlay-container show-on-hover mr-4" *ngIf="noSelectedRows() === 0">
                      <ng-template *ngTemplateOutlet="rowOverlay; context: { $implicit: item, i: i }"></ng-template>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex flex-row align-items-center justify-content-between nao-pagination">
            <div>
              Rows per page:
              <ng-select (change)="paging.perPage$.next($event);"
                         [clearable]="false"
                         [disabled]="false"
                         [items]="[5, 10, 20, 50, 100]"
                         [ngModel]="paging.perPage$.getValue()"
                         [searchable]="false"
                         class="nao-ng-select-sm d-inline-block w-auto">
              </ng-select>

            </div>

            <div class="ml-auto d-flex align-items-center">
              <ngb-pagination [(page)]="paging.currentPage"
                              [boundaryLinks]="true"
                              [collectionSize]="paging.totalRows"
                              [directionLinks]="true"
                              [disabled]="false"
                              [maxSize]="paging.maxSize"
                              [pageSize]="paging.perPage$.getValue()">
                <ng-template ngbPaginationPrevious><i class="nao-icon-arrow-back-1"></i></ng-template>
                <ng-template ngbPaginationFirst>
                  <div class="d-flex" style="padding-top: 4px">
                    <div class="nao-line-pagination"></div>
                    <i class="nao-icon-arrow-back-1"></i>
                  </div>
                </ng-template>
                <ng-template ngbPaginationNext><i class="nao-icon-arrow-next-1"></i></ng-template>
                <ng-template ngbPaginationLast>
                  <div class="d-flex" style="padding-top: 4px">
                    <i class="nao-icon-arrow-next-1"></i>
                    <div class="nao-line-pagination"></div>
                  </div>
                </ng-template>
              </ngb-pagination>

              <div class="pagination-separator"></div>
              <div>
                page {{ paging.currentPage }} of {{ paging.totalPages !== 0 ? paging.totalPages : 1 }}
              </div>
            </div>


          </div>
        </div>`,
    ts1: `
    public paging = {
      currentPage: 1, totalPages: 1, currentRows: 0, totalRows: 0, maxSize: 5,
      perPage$: new BehaviorSubject<number>(20), selectAll: false, someSelected: false,
      tableCondensed$: new BehaviorSubject<boolean>(false)
    };
    public sort = { lastSort: '', by: new BehaviorSubject(null), reverse: true, sub: null };
    public subs: { search$: Subscription, sort$: Subscription } = { search$: null, sort$: null };
    public searchFormGroup;
    public searchFor = [];
    public dataTable = [
         {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: 'success' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: ''},
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon', status: 'fail' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: 'fail' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: 'success' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon Doe', status: '' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: '' }, selected: false
    },
    {
      name: { value: 'Jon', status: 'fail' },
      email: { value: 'jon@doe.com', status: '' },
      company: { value: 'DoeCompany', status: 'fail' }, selected: false
    },
    ];`,
    ts2: `
    /**
     * Has any selected rows
     */
    public noSelectedRows(): number {
      // -->Cut: the results to new size
      return this.dataTable.filter(r => r.selected).length;
    }
    /**
     * De-Select all
     */
    public deselectAll() {
      // -->Cut: the results to new size
      this.dataTable.map(d => {
        d.selected = false;
        return d;
      });
      this.paging.selectAll = false;
    }

    /**
     * Select all
     */
    public selectAllChange() {
      // -->Cut: the results to new size
      this.dataTable.map(d => {
        d.selected = !this.paging.selectAll;
        return d;
      });
    }

    /**
     * Select any other
     */
    public selectChange($ev, i) {
      // -->Set: the selected
      this.dataTable[i].selected = $ev;
      // -->Cut: the results to new size
      this.paging.selectAll = every(this.dataTable.map(d => d.selected));
      // -->Check: some
      this.paging.someSelected = some(this.dataTable.map(d => d.selected));
    }`
  },
  {
    html: `
    <ng-template #rowOverlay let-item let-i="i">
          <div class="d-flex justify-content-end align-items-center nao-row-overlay">
            <div>
              <button class="btn btn-sm btn-simple-primary">
                Edit
              </button>
              <button class="btn btn-sm btn-simple-primary">
                Delete
              </button>
              <div ngbDropdown class="d-inline-block btn-group dropdown-remove-arrow" container="body">
                <button class="btn btn-no-box-shadow btn-sm" ngbDropdownToggle>
                  <i class="nao-icon-additional-options"></i>
                </button>
                <div ngbDropdownMenu class="nao-dropdown-1">
                  <a class="dropdown-item" href="javascript:void(0)" >Edit name</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Change access level</a>
                  <a class="dropdown-item" href="javascript:void(0)">Change password</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="javascript:void(0)">Deactivate
                    Account</a>
                  <a class="dropdown-item dropdown-item-danger" href="javascript:void(0)">Delete
                    Account</a>
                </div>
              </div>
            </div>
          </div>
        </ng-template>

        <div class="card nao-card-table-1 mb-5">
          <div class="d-flex flex-row card-header selected align-items-center" *ngIf="noSelectedRows() > 0">
            <div class="pr-3">
              <a href="javascript:void(0)" class="btn btn-transparent btn-no-min-width btn-no-box-shadow" (click)="deselectAll()">X</a>
            </div>
            <div class="pl-3 mr-3">
              <div class="card-header-title mb-0">
                {{ noSelectedRows() }} {{ (noSelectedRows() === 1 ? 'selected contact' : 'selected contacts') }}
              </div>
            </div>
            <div class="">
              <button class="btn btn-simple-primary nao-btn-transition">
                Delete multiple
              </button>
            </div>
          </div>
          <div class="d-flex flex-row card-header align-items-center" *ngIf="noSelectedRows() === 0">
            <div class="mr-3">
              <div class="card-header-title">
                Nestead&nbsp;&nbsp;|
              </div>
            </div>
            <div class="pr-3">
              <span class="nao-table-info">
                3 contacts
              </span>
            </div>
          </div>

          <div class="card-search d-flex align-items-center justify-content-between">
            <div class="col-7 align-middle">
              <ng-select bindValue="query" [multiple]="true" placeholder="Add filter" [clearable]="false"
                         clearAllText="Clear">
                <ng-template ng-label-tmp let-item="item" let-clear="clear">
                  <span class="ng-value-label">
                    {{ item.fieldName }}: <strong>'{{ item.term }}'</strong>
                  </span>
                  <span class="ng-value-icon right" aria-hidden="true">×</span>
                </ng-template>
                <ng-option *ngFor="let item of searchFor" [value]="item">{{ item.value }}
                </ng-option>
              </ng-select>
            </div>
            <div class="">
              <button type="button" class="btn btn-transparent text-dark-blue btn-no-box-shadow" (click)="searchFormGroup.empty()">
                Clear filter
              </button>
            </div>
          </div>

          <div class="card-body p-0 table-responsive">
            <table class="table mb-0 table-borderless">
              <thead class="table-header">
                <tr>
                  <th scope="col" class="nao-th-checkbox">
                    <label class="custom-control custom-checkbox m-0">
                      <input type="checkbox" class="custom-control-input" (ngModelChange)="selectAllChange()"
                        [(ngModel)]="paging.selectAll">
                      <span class="custom-control-label"></span>
                    </label>
                  </th>
                  <th scope="col" class="nao-th" style="width: 20%">Deployment</th>
                  <th scope="col" class="nao-th" style="width: 20%">Status</th>
                  <th scope="col" class="nao-th" style="width: 20%">Number of users</th>
                  <th scope="col" class="nao-th" style="width: 20%">Date Created</th>
                  <th scope="col" class="nao-th"></th>
                </tr>
              </thead>
              <tbody class="table-body">
                <ng-template #tableRow let-item let-i="i" let-level="level">

                  <tr [ngClass]="{'selected': item.selected}">
                    <td class="align-middle">
                      <label class="custom-control custom-checkbox m-0">
                        <input type="checkbox" class="custom-control-input" (ngModelChange)="selectChange($event, i)"
                          [(ngModel)]="item.selected">
                        <span class="custom-control-label"></span>
                      </label>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex align-items-center">
                        <div class="cell-multiline-header" [ngStyle]="{'padding-left': 30*level+'px'}">
                          <button class="btn btn-sm btn-no-box-shadow pl-0 btn-no-min-width"
                            *ngIf="item.childRows?.length>0"
                            (click)="item.expandChildren ? item.expandChildren = !item.expandChildren : item.expandChildren = true">
                            <i class="nao-icon-arrow-next-1 nao-icon-rotate" [ngClass]="{'rotate-90': item.expandChildren}"></i></button>
                          {{ item.deployment.value }}
                        </div>
                      </div>
                    </td>
                    <td class=" align-middle">
                      <div class="d-flex align-items-center">
                        <div class="cell-multiline-header d-flex flex-wrap">
                          <span class="nao-pill-lg text-white mr-1 mb-1" *ngFor="let status of item.status.value"
                            [ngClass]="{'bg-success': status === 'Production', 'bg-tertiary': status === 'Staging', 'bg-primary': status === 'Demo'}">{{ status }}</span>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex align-items-center">
                        <div class="cell-multiline-header">{{ item.numberOfUsers.value }}</div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex align-items-center">
                        <div class="cell-multiline-header">{{ item.dateCreated.value }}</div>
                      </div>
                    </td>
                    <td class="py-0" style="position: relative;">
                      <div class="nao-row-overlay-container show-on-hover mr-4" *ngIf="noSelectedRows() === 0">
                        <ng-template *ngTemplateOutlet="rowOverlay; context: { $implicit: item, i: i }"></ng-template>
                      </div>
                    </td>
                  </tr>

                  <ng-container
                    *ngIf="item.expandChildren && item.childRows && item.childRows.length > 0">
                    <ng-container *ngFor="let childItem of item.childRows; let index_child = index">
                      <ng-template
                        *ngTemplateOutlet="tableRow; context: { $implicit: childItem, i: index_child, level: 1+level}">
                      </ng-template>
                    </ng-container>
                  </ng-container>

                </ng-template>


                <ng-container *ngFor="let item of dataTableNested; let i = index; let last = last">
                  <ng-template *ngTemplateOutlet="tableRow; context: { $implicit: item, i: i, level: 0}"></ng-template>
                </ng-container>

              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex flex-row align-items-center justify-content-between nao-pagination">
            <div>
              Rows per page:
              <ng-select (change)="paging.perPage$.next($event);"
                         [clearable]="false"
                         [disabled]="false"
                         [items]="[5, 10, 20, 50, 100]"
                         [ngModel]="paging.perPage$.getValue()"
                         [searchable]="false"
                         class="nao-ng-select-sm d-inline-block w-auto">
              </ng-select>

            </div>

            <div class="ml-auto d-flex align-items-center">
              <ngb-pagination [(page)]="paging.currentPage"
                              [boundaryLinks]="true"
                              [collectionSize]="paging.totalRows"
                              [directionLinks]="true"
                              [disabled]="false"
                              [maxSize]="paging.maxSize"
                              [pageSize]="paging.perPage$.getValue()">
                <ng-template ngbPaginationPrevious><i class="nao-icon-arrow-back-1"></i></ng-template>
                <ng-template ngbPaginationFirst>
                  <div class="d-flex" style="padding-top: 4px">
                    <div class="nao-line-pagination"></div>
                    <i class="nao-icon-arrow-back-1"></i>
                  </div>
                </ng-template>
                <ng-template ngbPaginationNext><i class="nao-icon-arrow-next-1"></i></ng-template>
                <ng-template ngbPaginationLast>
                  <div class="d-flex" style="padding-top: 4px">
                    <i class="nao-icon-arrow-next-1"></i>
                    <div class="nao-line-pagination"></div>
                  </div>
                </ng-template>
              </ngb-pagination>

              <div class="pagination-separator"></div>
              <div>
                page {{ paging.currentPage }} of {{ paging.totalPages !== 0 ? paging.totalPages : 1 }}
              </div>
            </div>


          </div>
        </div>
`,
    ts1: `
      public dataTableNested = [
    {
      deployment: { value: 'Demo to tech team', },
      status: { value: ['Demo'], },
      numberOfUsers: { value: '1', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
    {
      deployment: { value: 'Demo PR', },
      status: { value: ['Demo'], },
      numberOfUsers: { value: '5', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
    {
      deployment: { value: 'Exec Demo', },
      status: { value: ['Demo', 'Staging', 'Production'], },
      numberOfUsers: { value: '12', },
      dateCreated: { value: '01 Jan 2020', },
      childRows: [
        {
          deployment: { value: 'Exec Demo', },
          status: { value: ['Demo'], },
          numberOfUsers: { value: '4', },
          dateCreated: { value: '01 Jan 2020', },
          selected: false
        },
        {
          deployment: { value: 'Exec Demo', },
          status: { value: ['Staging'], },
          numberOfUsers: { value: '4', },
          dateCreated: { value: '01 Jan 2020', },
          selected: false
        },
        {
          deployment: { value: 'Exec Demo', },
          status: { value: ['Production'], },
          numberOfUsers: { value: '4', },
          dateCreated: { value: '01 Jan 2020', },
          childRows: [
            {
              deployment: { value: 'Exec Demo', },
              status: { value: ['Demo'], },
              numberOfUsers: { value: '4', },
              dateCreated: { value: '01 Jan 2020', },
              selected: false
            },
            {
              deployment: { value: 'Exec Demo', },
              status: { value: ['Staging'], },
              numberOfUsers: { value: '4', },
              dateCreated: { value: '01 Jan 2020', },
              selected: false
            },
            {
              deployment: { value: 'Exec Demo', },
              status: { value: ['Production'], },
              numberOfUsers: { value: '4', },
              dateCreated: { value: '01 Jan 2020', },
              selected: false
            },
          ],
          selected: false
        },
      ],
      selected: false
    },
    {
      deployment: { value: 'Demo to tech team', },
      status: { value: ['Demo'], },
      numberOfUsers: { value: '4', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
    {
      deployment: { value: 'Marketing prod', },
      status: { value: ['Production'], },
      numberOfUsers: { value: '3', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
    {
      deployment: { value: 'Demo PR', },
      status: { value: ['Demo'], },
      numberOfUsers: { value: '12', },
      dateCreated: { value: '01 Jan 2020', },
      selected: false
    },
  ];
`
  },
  {
    html: `
     <div class="card nao-card-table-2 flex-grow-1">
          <div class="card-header d-flex flex-column">
            <h6 class="mb-1 font-size-18">Job status</h6>
            <h6 class="font-size-14">Check the status of your active integrations, local imports, uploads and exports to make sure your data is flowing as it should.</h6>
          </div>
          <div class="card-body pt-0">
            <div class="overflow-auto">
              <table class="w-100">
                <thead>
                <!-- Header -->
                <tr class="font-size-12 font-weight-semibold text-primary-lightest border-bottom border-bg-2 text-uppercase">

                  <th class="p-0 pb-2 pt-20" scope="col" style="min-width: 100px; width: 140px">Job name</th>
                  <th class="p-0 pb-2 pt-20" scope="col" style="min-width: 150px; width: 200px">Description</th>
                  <th class="p-0 pb-2 pt-20" scope="col" style="min-width: 190px; width: 240px">Started</th>
                  <th class="p-0 pb-2 pt-20" scope="col" style="min-width: 190px; width: 240px">Ended</th>
                  <th class="p-0 pb-2 pt-20" scope="col" style="min-width: 60px; width: 100px">Retries</th>
                </tr>
                </thead>
                <tbody>
                <!-- Rows -->
                <tr style="height: 55px" class="font-size-14 border-bottom border-bg-2">
                  <td class="p-0 pr-2" style="min-width: 100px; width: 140px;">
                    Job name 1
                  </td>
                  <td class="p-0 pr-2" style="min-width: 150px; width: 200px;">
                    Job description 1
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 60px; width: 100px;">
                    0
                  </td>
                  <td class="p-0 pr-2" style="min-width: 80px; width: 100px;">
                    20%
                  </td>
                </tr>
                <tr style="height: 55px" class="font-size-14 border-bottom border-bg-2">
                  <td class="p-0 pr-2" style="min-width: 100px; width: 140px;">
                    Job name 2
                  </td>
                  <td class="p-0 pr-2" style="min-width: 150px; width: 200px;">
                    Job description 2
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 60px; width: 100px;">
                    5
                  </td>
                  <td class="p-0 pr-2" style="min-width: 80px; width: 100px;">
                    20%
                  </td>
                </tr>
                <tr style="height: 55px" class="font-size-14 border-bottom border-bg-2">
                  <td class="p-0 pr-2" style="min-width: 100px; width: 140px;">
                    Job name 3
                  </td>
                  <td class="p-0 pr-2" style="min-width: 150px; width: 200px;">
                    Job description 3
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 60px; width: 100px;">
                    2
                  </td>
                  <td class="p-0 pr-2" style="min-width: 80px; width: 100px;">
                    10%
                  </td>
                </tr>
                <tr style="height: 55px" class="font-size-14 border-bottom border-bg-2">
                  <td class="p-0 pr-2" style="min-width: 100px; width: 140px;">
                    Job name 4
                  </td>
                  <td class="p-0 pr-2" style="min-width: 150px; width: 200px;">
                    Job description 4
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 60px; width: 100px;">
                    0
                  </td>
                  <td class="p-0 pr-2" style="min-width: 80px; width: 100px;">
                    100%
                  </td>
                </tr>
                <tr style="height: 55px" class="font-size-14 border-bottom border-bg-2">
                  <td class="p-0 pr-2" style="min-width: 100px; width: 140px;">
                    Job name 5
                  </td>
                  <td class="p-0 pr-2" style="min-width: 150px; width: 200px;">
                    Job description 5
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 60px; width: 100px;">
                    0
                  </td>
                  <td class="p-0 pr-2" style="min-width: 80px; width: 100px;">
                    100%
                  </td>
                </tr>
                <tr style="height: 55px" class="font-size-14 border-bottom border-bg-2">
                  <td class="p-0 pr-2" style="min-width: 100px; width: 140px;">
                    Job name 6
                  </td>
                  <td class="p-0 pr-2" style="min-width: 150px; width: 200px;">
                    Job description 6
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 60px; width: 100px;">
                    0
                  </td>
                  <td class="p-0 pr-2" style="min-width: 80px; width: 100px;">
                    100%
                  </td>
                </tr>
                <tr style="height: 55px" class="font-size-14 border-bottom border-bg-2">
                  <td class="p-0 pr-2" style="min-width: 100px; width: 140px;">
                    Job name 7
                  </td>
                  <td class="p-0 pr-2" style="min-width: 150px; width: 200px;">
                    Job description 7
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 190px; width: 240px;">
                    {{ 1604154371674 | date: 'medium' }}
                  </td>
                  <td class="p-0 pr-2" style="min-width: 60px; width: 100px;">
                    0
                  </td>
                  <td class="p-0 pr-2" style="min-width: 80px; width: 100px;">
                    100%
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`
  }
];
