import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NgxDatatableModule,
  ResponsiveColumnDirective
} from '../../projects/swimlane/ngx-datatable/src/public-api';
import { AppComponent } from './app.component';

// -- Basic
import { BasicFixedComponent } from './basic/basic-fixed.component';
import { BasicAutoComponent } from './basic/basic-auto.component';
import { VirtualScrollComponent } from './basic/virtual.component';
import { InlineEditComponent } from './basic/inline.component';
import { HorzVertScrollingComponent } from './basic/scrolling.component';
import { MultipleTablesComponent } from './basic/multiple.component';
import { FullScreenComponent } from './basic/fullscreen.component';
import { RowDetailsComponent } from './basic/row-detail.component';
import { ResponsiveComponent } from './basic/responsive.component';
import { FilterComponent } from './basic/filter.component';
import { TabsDemoComponent } from './basic/tabs.component';
import { LiveDataComponent } from './basic/live.component';
import { RxDemoComponent } from './basic/rx.component';
import { ContextMenuDemoComponent } from './basic/contextmenu.component';
import { RowCssComponent } from './basic/css.component';
import { DynamicHeightComponent } from './basic/dynamic-height.component';
import { FooterDemoComponent } from './basic/footer.component';
import { RowGroupingComponent } from './basic/row-grouping.component';
import { BasicEmptyComponent } from './basic/empty.component';
import { DisabledRowsComponent } from './basic/disabled-rows.component';

// -- Themes
import { BootstrapThemeComponent } from './basic/bootstrap.component';
import { DarkThemeComponent } from './basic/dark-theme.component';

// -- Paging
import { ClientPagingComponent } from './paging/paging-client.component';
import { ServerPagingComponent } from './paging/paging-server.component';
import { ServerScrollingComponent } from './paging/scrolling-server.component';
import { VirtualPagingComponent } from './paging/paging-virtual.component';
import { PagingScrollingNoVirtualizationComponent } from './paging/paging-scrolling-novirtualization.component';

// -- Sorting
import { SortingComparatorComponent } from './sorting/sorting-comparator.component';
import { DefaultSortingComponent } from './sorting/sorting-default.component';
import { ServerSortingComponent } from './sorting/sorting-server.component';
import { ClientSortingComponent } from './sorting/sorting-client.component';

// -- Templates
import { InlineTemplatesComponent } from './templates/template-dom.component';
import { TemplateRefTemplatesComponent } from './templates/template-obj.component';

// -- Tree
import { FullScreenTreeComponent } from './tree/fullscreen.component';
import { ClientTreeComponent } from './tree/client-tree.component';

// -- Selection
import { CellSelectionComponent } from './selection/selection-cell.component';
import { MultiSelectionComponent } from './selection/selection-multi.component';
import { SingleSelectionComponent } from './selection/selection-single.component';
import { MultiDisableSelectionComponent } from './selection/selection-disabled.component';
import { CheckboxSelectionComponent } from './selection/selection-chkbox.component';
import { MultiClickSelectionComponent } from './selection/selection-multi-click.component';
import { MultiClickCheckboxSelectionComponent } from './selection/selection-multi-click-chkbox.component';
import { CustomCheckboxSelectionComponent } from './selection/selection-chkbox-template.component';

// -- Columns
import { ColumnToggleComponent } from './columns/column-toggle.component';
import { ColumnStandardComponent } from './columns/column-standard.component';
import { ColumnForceComponent } from './columns/column-force.component';
import { ColumnFlexComponent } from './columns/column-flex.component';
import { ColumnPinningComponent } from './columns/pinning.component';
import { ColumnReorderComponent } from './columns/column-reorder.component';

// -- Summary row
import { SummaryRowSimpleComponent } from './summary/summary-row-simple.component';
import { SummaryRowCustomTemplateComponent } from './summary/summary-row-custom-template.component';
import { SummaryRowServerPagingComponent } from './summary/summary-row-server-paging.component';
import { SummaryRowInlineHtmlComponent } from './summary/summary-row-inline-html.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ScrollingDynamicallyComponent } from './basic/scrolling-dynamically.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    BasicAutoComponent,
    BasicFixedComponent,
    DragDropComponent,
    FullScreenComponent,
    FullScreenTreeComponent,
    InlineEditComponent,
    VirtualScrollComponent,
    HorzVertScrollingComponent,
    ScrollingDynamicallyComponent,
    MultipleTablesComponent,
    RowDetailsComponent,
    ResponsiveComponent,
    ClientPagingComponent,
    ServerPagingComponent,
    PagingScrollingNoVirtualizationComponent,
    ServerScrollingComponent,
    ClientSortingComponent,
    DefaultSortingComponent,
    ServerSortingComponent,
    SortingComparatorComponent,
    CellSelectionComponent,
    MultiSelectionComponent,
    MultiClickCheckboxSelectionComponent,
    InlineTemplatesComponent,
    TemplateRefTemplatesComponent,
    ColumnFlexComponent,
    ColumnToggleComponent,
    ColumnStandardComponent,
    ColumnForceComponent,
    ColumnPinningComponent,
    ColumnReorderComponent,
    FilterComponent,
    VirtualPagingComponent,
    DarkThemeComponent,
    TabsDemoComponent,
    SingleSelectionComponent,
    LiveDataComponent,
    MultiDisableSelectionComponent,
    RxDemoComponent,
    ContextMenuDemoComponent,
    CheckboxSelectionComponent,
    CustomCheckboxSelectionComponent,
    MultiClickSelectionComponent,
    RowCssComponent,
    DynamicHeightComponent,
    FooterDemoComponent,
    RowGroupingComponent,
    BasicEmptyComponent,
    BootstrapThemeComponent,
    ClientTreeComponent,
    SummaryRowSimpleComponent,
    SummaryRowCustomTemplateComponent,
    SummaryRowServerPagingComponent,
    SummaryRowInlineHtmlComponent,
    DisabledRowsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ResponsiveColumnDirective,
    AppRoutingModule,
    DragDropModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
