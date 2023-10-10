import { useForm, ValidationError } from '@formspree/react';
import '../css/form.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvojdolw");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className='formContainer'>
    <div className='contactForm'>
        <h2>Please feel free to contact me!</h2>
    <form method="POST" onSubmit={handleSubmit} className="formContent">
      <label htmlFor="name">Hi whats your name?</label>
      <input id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <br />

      <label htmlFor="email">May i have your email address?</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <br />
      <label htmlFor="message">Any message?</label>
      <textarea id="message" name="message" required></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <br />
      <br />
      <button type="submit" disabled={state.submitting}>
        Contact me
      </button>
      <ValidationError errors={state.errors} />
    </form>
    </div>
    </div>
  );
}