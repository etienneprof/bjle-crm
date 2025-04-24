import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  message : string[] = ["pouet"];
  visible : boolean[] = [false];

  constructor(private service: ToastService) {
    this.message = service.message;
    this.visible = service.visible;
  }
}
