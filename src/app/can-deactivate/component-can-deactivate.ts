import {HostListener} from "@angular/core";

export abstract class ComponentCanDeactivate {
  abstract  canDeactivate(): boolean;

//   debugger

    @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
        debugger

        if (!this.canDeactivate()) {
            console.log($event.returnValue);
            
            $event.returnValue =true;
        }
    }
}