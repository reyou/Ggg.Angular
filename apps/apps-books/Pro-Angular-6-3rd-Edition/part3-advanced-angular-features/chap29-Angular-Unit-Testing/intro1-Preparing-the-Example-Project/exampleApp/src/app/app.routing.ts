import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';
import { NotFoundComponent } from './core/notFound.component';
import { TermsGuard } from './terms.guard';
import { UnsavedGuard } from './core/unsaved.guard';

const routes: Routes = [
  { path: 'ondemand', loadChildren: './ondemand/ondemand.module#OndemandModule' },
  { path: '', redirectTo: '/ondemand', pathMatch: 'full' }
];
export const routing = RouterModule.forRoot(routes);
