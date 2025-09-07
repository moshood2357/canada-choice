declare module "@emailjs/browser" {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  export function send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, unknown>,
    publicKey?: string
  ): Promise<EmailJSResponseStatus>;

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    publicKey?: string
  ): Promise<EmailJSResponseStatus>;

  export function init(publicKey: string): void;

  const emailjs: {
    send: typeof send;
    sendForm: typeof sendForm;
    init: typeof init;
  };

  export default emailjs;
}
