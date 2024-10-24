import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  formBuilder = inject(FormBuilder)
  http = inject(HttpClient)
  toastr = inject(ToastrService)

  contactForm = this.formBuilder.group({
    subject: this.formBuilder.control('Email from Round Money website'),
    name: this.formBuilder.control('', [Validators.required]),
    email: this.formBuilder.control('', [Validators.required]),
    message: this.formBuilder.control('', [Validators.required]),
  })

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = {
        subject: this.contactForm.get('subject')!.value,
        body: `
          <html lang="en">
          <p><strong>Name:</strong> ${this.contactForm.get('name')?.value}</p>
          <p><strong>Email:</strong> ${this.contactForm.get('email')?.value}</p>
          <p><strong>Message:</strong> ${this.contactForm.get('message')?.value}</p>
           </html>
        `,
      };

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post('https://sendmail-rfetf4jfgq-uc.a.run.app/', formData, { headers })
        .subscribe({
          next: () => {
            this.toastr.success('Form submitted successfully:')
            this.contactForm.reset()
          },
          error: (error) => {
            this.toastr.error('Error submitting form:', error.message)
          },
        });
    }
  }
}
