import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  // A BehaviorSubject to hold the image data
  private imageSource = new BehaviorSubject<string | null>(null);
  currentImage = this.imageSource.asObservable();

  // Method to change the image data
  changeImage(image: string | null) {
    this.imageSource.next(image);
  }
}
