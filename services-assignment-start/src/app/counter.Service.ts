import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter ++;
    }
    
    incrementInactiveToActive() {
        this.inactiveToActiveCounter ++;
    }
}