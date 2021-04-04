export class Image {
  height?: number;
  width?: number;
  url?: string | undefined;

  constructor(height: number, width: number, url: string) {
    this.height = height;
    this.width = width;
    this.url = url;
  }
}
