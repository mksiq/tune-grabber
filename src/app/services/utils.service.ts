import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  convertDate(date: string): string {
    let converted = new Date(date);
    converted.setDate(converted.getDate() + 1);
    let dd = converted.getDate();
    let mm = converted.getMonth() + 1;
    let yyyy = converted.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }

  cropTitle(title: string, size: number): string {
    if (title.length > size) {
      title = title.substring(0, size - 3);
      title += '...';
    }
    return title;
  }

  displayTime(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return (
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0')
    );
  }
}
