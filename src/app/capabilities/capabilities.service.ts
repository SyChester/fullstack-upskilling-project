import { Injectable } from '@angular/core';
import profile from '../../../database/profile.json';
import resource from '../../../database/resource.json';

export interface UserDetails {
  firstName: string;
  lastName: string;
  workday: string;
  title: string;
  project: string;
  date_hired: string;
}

@Injectable({
  providedIn: 'root'
})
export class CapabilitiesService {

  constructor() { }

  getUserDetails(id: string): UserDetails {
    const prof = profile.find(obj => obj.resourceId = id);
    const user = resource.find(obj => obj.id === id);

    return {
      firstName: prof!.firstName,
      lastName: prof!.lastName,
      workday: user!.workdayId,
      title: user!.title,
      project: user!.project,
      date_hired: user!.date_hired
    }
  }
}

/**
 * import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { CapabilitiesService } from './capabilities.service';

export interface UserDetails {
  firstName: string;
  lastName: string;
  workday: string;
  title: string;
  project: string;
  date_hired: string;
}

@Injectable({
  providedIn: 'root'
})
export class CapabilitiesResolver implements Resolve<UserDetails> {

  constructor(private capabilities: CapabilitiesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.capabilities.getUserDetails('3642eb0e-48b9-47f0-ab53-29208511a0bd');
  }
}
 */
