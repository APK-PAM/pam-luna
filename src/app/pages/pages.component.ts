import {PageMainComponent} from './main/main.component';
import {PagesBlankComponent} from './blank/blank.component';
import {PagesConnectComponent} from './connect/connect.component';
// import {PagesControlComponent} from './control/control.component';
import {PagesMonitorComponent} from './monitor/monitor.component';
import {PagesReplayComponent} from './replay/replay.component';
// import {PagesSettingComponent} from './setting/setting.component';
import {PagesNotFoundComponent} from './not-found/not-found.component';
import {PagesLoginComponent} from './login/login.component';
// import {CleftbarComponent} from './control/cleftbar/cleftbar.component';
import {JsonComponent} from './replay/json/json.component';
// import {ControlComponent} from './control/control/control.component';
// import {PagesControlNavComponent} from './control/control/controlnav/nav.component';
// import {SearchComponent, SearchFilter} from './control/search/search.component';
import {PagesMonitorLinuxComponent} from './monitor/linux/linux.component';
import {PagesMonitorWindowsComponent} from './monitor/windows/windows.component';
import {ReplayGuacamoleComponent} from './replay/guacamole/guacamole.component';

export const PagesComponents = [
  PageMainComponent,
  PagesBlankComponent,
  PagesConnectComponent,
  // PagesControlComponent, ControlComponent, PagesControlNavComponent,
  // CleftbarComponent,
  PagesMonitorComponent,
  PagesReplayComponent, JsonComponent,
  // PagesSettingComponent,
  PagesNotFoundComponent,
  PagesLoginComponent,
  // SearchComponent,
  // SearchFilter,
  PagesMonitorLinuxComponent,
  PagesMonitorWindowsComponent,
  ReplayGuacamoleComponent
];
