import {LogService, LocalStorageService, UUIDService} from './share';
export {LogService, LocalStorageService, UUIDService} from './share';

import {AppService} from './app';
export {AppService} from './app';

import {HttpService} from './http';
export {HttpService} from './http';

import {NavService} from './nav';
export {NavService} from './nav';

import {TreeFilterService} from './treeFilter';
export {TreeFilterService} from './treeFilter';

import {SettingService} from './setting';
export {SettingService} from './setting';

import {ViewService} from './view';
export {ViewService} from './view';

export const AllServices = [
  LogService,
  LocalStorageService,
  UUIDService,
  AppService,
  HttpService,
  NavService,
  TreeFilterService,
  SettingService,
  ViewService,
];

