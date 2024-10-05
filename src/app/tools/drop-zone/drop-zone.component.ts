import { Component } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageService } from '../servises/image.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-zone',
  standalone: true,
  imports: [NgxDropzoneModule, CommonModule],
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss'],
})
export class DropZoneComponent {
  toggleEditor: boolean = false;
  selectedImageSrc: string | undefined;
  files: File[] = [];

  constructor(private imageService: ImageService, private router: Router) {} // Inject the service

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    if (event.addedFiles[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImageSrc = reader.result as string;

        // Use the service to change the image
        this.imageService.changeImage(this.selectedImageSrc);
      };
      reader.readAsDataURL(event.addedFiles[0]);
    }
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    if (this.files.length === 0) {
      this.imageService.changeImage(null);
    }
  }

  navigateToEditor() {
    if (!this.selectedImageSrc) {
      alert('Please select an image first');
      return;
    }
    this.router.navigate(['image-editor']);
  }
}
