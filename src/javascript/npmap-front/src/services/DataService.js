import { BehaviorSubject } from 'rxjs';

const dataSubject = new BehaviorSubject(null);

const fetchData = async () => {
  const response = await fetch('/data/areas.json');
  const data = await response.json();
  dataSubject.next(data.zones); // Émet les données à chaque changement
};

export const dataService = {
  fetchData,
  data$: dataSubject.asObservable(), // Expose l'Observable
};
