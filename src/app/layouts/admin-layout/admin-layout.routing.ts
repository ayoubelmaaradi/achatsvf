import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import {CustomerComponent} from '../../pages/customer/customer.component';
import {InvoiceComponent} from '../../pages/invoice/invoice.component';
import {Component} from '@angular/core';
import {OrdersComponent} from '../../pages/orders/orders.component';
import {VendorComponent} from '../../pages/vendor/vendor.component';
import {ProductComponent} from '../../pages/product/product.component';
import {ChartComponent} from '../../pages/chart/chart.component';
import {VendorListComponent} from '../../pages/vendor-list/vendor-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'customer',        component: CustomerComponent },
    { path: 'invoice',        component: InvoiceComponent },
    { path: 'orders',         component: OrdersComponent },
    { path: 'vendor',         component: VendorComponent },
    { path: 'product',         component: ProductComponent },
    { path: 'chart',        component: ChartComponent },
    { path: 'Listvendors',        component: VendorListComponent},
    { path: 'upgrade',        component: UpgradeComponent },
];
