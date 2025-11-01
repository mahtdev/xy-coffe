import type { ContactFormData } from '../../shared/types';
import './contact.css';

export class Contact {
  private contactForm: HTMLFormElement | null;

  constructor() {
    this.contactForm = document.getElementById(
      'contactForm'
    ) as HTMLFormElement;
    this.init();
  }

  private init(): void {
    this.setupFormSubmission();
  }

  private setupFormSubmission(): void {
    this.contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmission();
    });
  }

  private handleFormSubmission(): void {
    const formData = new FormData(this.contactForm!);
    const contactData: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: (formData.get('message') as string) || undefined,
    };

    // Here you would typically send the data to a server
    console.log('Contact form submitted:', contactData);

    alert(
      '¡Gracias por suscribirte! Te mantendremos informado de nuestras novedades.'
    );
    this.contactForm?.reset();
  }
}
