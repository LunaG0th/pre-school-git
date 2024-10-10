import React from 'react';
import Title from '../Title/Title';
import './Contact.css';

const key = '4ab17813-b3ae-4838-94a0-d0085dfca63e';

function Contact() {
  // Wb3Forms
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', `${key}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact' >
      <div className="container">
        <Title title="Let's Connect" sub='contact us' />
      </div>
      <div className='contact container-fluid'>
        <div className='contact__row '>
          <div className='contact__left'>
            <h4>Business Name</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum ea natus quas suscipit, adipisci ullam, rem delectus
              atque dolore mollitia sed ratione impedit facere numquam minima!
            </p>
            <ul>
              <li className='contact__info' ><span className='material-symbols-outlined contact__icon '>mail</span> mail@mail.com</li>
              <li className='contact__info' ><span className='material-symbols-outlined contact__icon '>call</span> +639 99-999-9999</li>
              <li className='contact__info' ><span className='material-symbols-outlined contact__icon '>where_to_vote</span> 9999 My St. Street, Sub City Zip</li>
            </ul>
            <hr style={{ width: '50%', margin: 'auto', opacity: '.5' }} />
          </div>
          <div className='contact__right'>
            <h4>Sent us a message</h4>
            <form onSubmit={onSubmit}>
              <input type='text' name='full_name' placeholder='Full Name*' />
              <input type='email' name='email' placeholder='Email*' />
              <textarea
                maxLength={200}
                rows='4'
                name='message'
                placeholder='Message*'
              ></textarea>
              <button type='submit' className='btn submit'>
                Send
              </button>
            </form>
            <span className='result'>{result}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
