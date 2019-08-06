import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {UserComponent} from '../../pages/user/user.component';
import {TableComponent} from '../../pages/table/table.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {UpgradeComponent} from '../../pages/upgrade/upgrade.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomerComponent} from '../../pages/customer/customer.component';
import {InvoiceComponent} from '../../pages/invoice/invoice.component';
import {OrdersComponent} from '../../pages/orders/orders.component';
import {VendorComponent} from '../../pages/vendor/vendor.component';
import {ProductComponent} from '../../pages/product/product.component';
import {ChartComponent} from '../../pages/chart/chart.component';
// import {ButtonModule, DialogModule, DropdownModule, InputTextModule, MessagesModule, RadioButtonModule} from 'primeng/primeng';
import {ChartsModule} from 'ng2-charts';
import {ToastModule} from 'primeng/toast';
import {VendorListComponent} from '../../pages/vendor-list/vendor-list.component';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/components/button/button';
import {DialogModule, DropdownModule, InputTextModule, MessagesModule, RadioButtonModule} from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    DropdownModule,
    ChartsModule,
    RadioButtonModule,
    MessagesModule,
    ToastModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
  ],
  declarations: [
  // we should add pages here
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CustomerComponent,
    InvoiceComponent,
    OrdersComponent,
    VendorComponent,
    ProductComponent,
    ChartComponent,
    VendorListComponent
  ]
})

export class AdminLayoutModule {
}
