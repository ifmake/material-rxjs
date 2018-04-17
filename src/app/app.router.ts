import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { OwncenterModule } from './owncenter/owncenter.module';

export const rootRouter: Routes = [
    {path: 'home', loadChildren: () => HomeModule},
    {path: 'owncenter', loadChildren: () => OwncenterModule}
];
