import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { OwncenterModule } from './components/owncenter/owncenter.module';

export const rootRouter: Routes = [
    {path: 'home', loadChildren: () => HomeModule},
    {path: 'owncenter', loadChildren: () => OwncenterModule}
];
