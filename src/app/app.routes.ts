import { Routes } from '@angular/router';
import { CenteredLayoutComponent } from './layouts/centered-layout/centered-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SidebarLayoutComponent } from './layouts/sidebar-layout/sidebar-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
    {
        path: "",
        component: CenteredLayoutComponent, 
        children: [
            {path: "login", component: LoginPageComponent}
        ]},
        {
            path: "",
            component: SidebarLayoutComponent,
            children: [
                { path: "dashboard", component: DashboardComponent },
                { path: "categories", component: CategoriesComponent }
            ]
        }
];
