import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent, // we should add pages here
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
    ProductComponent
  ]
})

export class AdminLayoutModule {
}
