import {Observable, Subscriber, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente: ', value),
    error: error => console.error('error: ', error),
    complete: () => console.info('completado')
};

