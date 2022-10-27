import { Injectable } from '@angular/core';
import profile from '../../../database/profile.json';
import resource from '../../../database/resource.json';
import { TableElement, UserDetails } from '../../common/models/resources.model';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

  getProfile(id: string) {
    return profile.find(obj => obj.resourceId === id);
  }

  getUserDetails(id: string): UserDetails {
    const prof = this.getProfile(id);
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

  getResources(resourceId: string): TableElement[] {
    const resources = resource.filter(obj => obj.id !== resourceId);

    const ELEMENT_DATA: TableElement[] = resources.map(resource => {
      const prof = this.getProfile(resource.id);

      return {
        name: prof!.firstName + prof!.lastName,
        workday: resource.workdayId,
        title: resource.title,
        project: resource.project,
        date: resource.date_hired
      }
    })

    return ELEMENT_DATA;
  }
}
