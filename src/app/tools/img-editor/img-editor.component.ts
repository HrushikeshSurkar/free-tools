import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageService } from '../servises/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-img-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-editor.component.html',
  styleUrls: ['./img-editor.component.scss'],
})
export class ImgEditorComponent {
  image: string | null = null;
  croppedImage: string | null = null;

  // Define the crop box dimensions and position
  cropBox = { x: 50, y: 50, width: 200, height: 150 }; // Change these values as needed

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>;

  constructor(private imageService: ImageService, private router: Router) {}

  ngOnInit() {
    this.imageService.currentImage.subscribe((image) => {
      this.image = image;
    });
  }

  ngAfterViewInit() {
    this.drawImage();
  }

  drawImage() {
    const img = this.imageElement.nativeElement;
    const ctx = this.canvas.nativeElement.getContext('2d')!;

    img.onload = () => {
      this.canvas.nativeElement.width = img.width;
      this.canvas.nativeElement.height = img.height;
      ctx.drawImage(img, 0, 0);
      this.drawCropBox(ctx); // Draw the crop box
    };

    img.src = this.image!;
  }

  drawCropBox(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(
      this.cropBox.x,
      this.cropBox.y,
      this.cropBox.width,
      this.cropBox.height
    );
  }

  cropImage() {
    const ctx = this.canvas.nativeElement.getContext('2d')!;

    // Get the image data from the crop box
    const imageData = ctx.getImageData(
      this.cropBox.x,
      this.cropBox.y,
      this.cropBox.width,
      this.cropBox.height
    );

    // Create a new canvas for the cropped image
    const croppedCanvas = document.createElement('canvas');
    croppedCanvas.width = this.cropBox.width;
    croppedCanvas.height = this.cropBox.height;
    const croppedCtx = croppedCanvas.getContext('2d')!;

    // Put the cropped image data on the new canvas
    croppedCtx.putImageData(imageData, 0, 0);

    // Convert the cropped canvas to a data URL
    this.croppedImage = croppedCanvas.toDataURL();
  }

  clearCanvas() {
    const ctx = this.canvas.nativeElement.getContext('2d')!;
    ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    this.drawImage();
    this.croppedImage = null;
  }

  backButton() {
    this.router.navigate(['image-input']);
  }
}
