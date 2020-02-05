import { fromEvent } from 'rxjs'
import { buffer, debounceTime, filter } from 'rxjs/operators';

export const clicks$ = fromEvent(document.querySelector('.click-container'), 'click');

export const trippleClicks$ = clicks$.pipe(
  buffer(clicks$.pipe(debounceTime(400))),
  filter((clicks: MouseEvent[]) => clicks.length === 3)
);
