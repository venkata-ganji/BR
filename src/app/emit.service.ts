import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()
export class MissionService {
 
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
 
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
 
  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
    console.log('misisis', mission);
  }
}