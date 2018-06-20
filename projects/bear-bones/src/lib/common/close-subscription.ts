import { Subscription } from 'rxjs';

export function closeSubscription(sub: Subscription) {
    if(sub && !sub.closed) {
        sub.unsubscribe();
    }
}