import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [
    PdfViewerModule,
    SidebarModule,
    ButtonModule,
    InputNumberModule,
    FileUploadModule
  ],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent {
  isOpen: boolean = false;
  filePaths: string[] = [];
  fileSelectedPath: string = '';
  currentPage: any = 1;
  fileZoom: any = 1;

  fileSelected(filePath: string) {
    this.fileSelectedPath = filePath;
  }

  fileUploaded(event: FileUploadEvent) {
    console.log(event.files);
    event.files.map(file => {
    this.filePaths.push(URL.createObjectURL(file));
  })
    this.fileSelectedPath = this.filePaths[0];
  }
}
