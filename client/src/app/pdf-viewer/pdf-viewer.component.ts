import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SidebarModule } from 'primeng/sidebar'
import { ButtonModule } from 'primeng/button'
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload'

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [
    PdfViewerModule,
    SidebarModule,
    ButtonModule,
    FileUploadModule
  ],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent {
  isOpen: boolean = false;
  filePaths: string[] = [];
  fileSelectedPath: string = '';

  fileSelected(filePath: string) {
    this.fileSelectedPath = filePath;
  }

  async fileUploaded(event: FileUploadEvent) {
    await event.files.map(file => {
      this.filePaths.push(URL.createObjectURL(file));
    })
  }
}
