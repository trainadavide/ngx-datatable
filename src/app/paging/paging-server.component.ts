import { Component, OnInit } from '@angular/core';
import { MockServerResultsService } from './mock-server-results-service';
import { Page } from './model/page';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
import { Employee } from '../data.model';

@Component({
  selector: 'server-paging-demo',
  providers: [MockServerResultsService],
  template: `
    <div>
      <h3>
        Server-side Paging
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/paging/paging-server.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        [pageSizeSelector]="true"
        [topPaging]="true"
        class="material"
        [rows]="rows"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [externalPaging]="true"
        [count]="page.totalElements"
        [offset]="page.pageNumber"
        [limit]="page.size"
        (page)="setPage($event)"
      >
        <ngx-datatable-column [flexGrow]="3" [name]="'Name'" [resizeable]="false" prop="name">
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column
          [flexGrow]="3"
          [name]="'Gender'"
          [resizeable]="false"
          *responsiveColumn="{ hideBelow: 'xl' }"
          prop="gender"
        >
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column
          [flexGrow]="3"
          [name]="'Company'"
          [resizeable]="false"
          *responsiveColumn="{ hideBelow: 'xl' }"
          prop="company"
        >
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            {{ value }}
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  standalone: false
})
export class ServerPagingComponent implements OnInit {
  page: Page = {
    pageNumber: 0,
    size: 20,
    totalElements: 0,
    totalPages: 0
  };
  rows: Employee[] = [];

  ColumnMode = ColumnMode;

  constructor(private serverResultsService: MockServerResultsService) {}

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    if (pageInfo.pageSize) {
      this.page.size = pageInfo.pageSize;
    }
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
}
