import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status = 'Stable';
  filterStatus = '';
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Environment Server',
      status: 'critical',
      started: new Date(15, 1, 2017)
    }
  ];
  getServerStatus(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-success': server.status === 'stable',
      'list-warning': server.status === 'offline',
      'list-danger': server.status === 'critical',
    };
  }
}
