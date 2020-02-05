import { clicks$, trippleClicks$ } from './examples/clicks';

// clicks$.subscribe((event: MouseEvent) => {
//   console.log(event.target);
// });

trippleClicks$.subscribe((clicks: MouseEvent[]) => {
  console.log(clicks);
})

