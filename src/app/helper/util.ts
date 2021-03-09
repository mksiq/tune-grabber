export class Util {
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
}