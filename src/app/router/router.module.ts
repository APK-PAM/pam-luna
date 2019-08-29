/**
 * app路由
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesBlankComponent} from '../pages/blank/blank.component';
import {TestPageComponent} from '../test-page/test-page.component';
import {PagesConnectComponent} from '../pages/connect/connect.component';
import {PagesReplayComponent} from '../pages/replay/replay.component';
import {PageMainComponent} from '../pages/main/main.component';
import {PagesControlComponent} from '../pages/control/control.component';
import {PagesNotFoundComponent} from '../pages/not-found/not-found.component';
import {PagesMonitorComponent} from '../pages/monitor/monitor.component';
import {SftpComponent} from '../elements/sftp/sftp.component';


const appRoutes: Routes = [
  {path: 'replay/:token', component: PagesReplayComponent},
  {path: 'monitor/:token', component: PagesMonitorComponent},
  {path: 'test', component: TestPageComponent},
  {path: 'connect', component: PagesConnectComponent},
  {path: 'sftp', component: SftpComponent},
  {path: 'undefined', component: PagesBlankComponent},
  {path: '', component: PageMainComponent},
  {path: '**', component: PagesNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
      // {enableTracing: !environment.production} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
