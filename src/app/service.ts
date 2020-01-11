import { EventEmitter } from '@angular/core';

export class DataPassingService {
    data = 'default';
    dataUpdateEventEmitter= new EventEmitter<any>();

    updateData(update : any) {
        this.dataUpdateEventEmitter.emit(update);
    }
}