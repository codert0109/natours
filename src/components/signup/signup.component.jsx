import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userSignup } from '../../api/auth';
import User from '../../context/userContext';
import { setPageTitle } from '../../utils/pageHead';
import FormGroup from '../formGroup/formGroup.component';

const Signup = () => {
  const { setUserInfo } = User();

  const history = useHistory();

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleInputChange = (e, key) => {
    const val = e.target.value;

    setSignupData(prev => ({ ...prev, [key]: val }));
  };

  const handleSignup = async e => {
    e.preventDefault();

    const res = await userSignup(signupData);

    if (res) {
      setUserInfo(res);

      history.push('/');
    }
  };

  useEffect(() => setPageTitle('Natours | Register'), []);

  return (
    <main className='main'>
      <div className='singup-form'>
        <h2 className='heading-secondary ma-bt-lg'>create your account!</h2>
        <form className='form form--signup' onSubmit={handleSignup}>
          <FormGroup
            label='Your Name'
            id='name'
            type='text'
            placeholder='John Doe'
            required
            onChange={e => handleInputChange(e, 'name')}
          />
          <FormGroup
            label='Email Address'
            id='email'
            type='email'
            placeholder='you@example.com'
            required
            onChange={e => handleInputChange(e, 'email')}
          />
          <FormGroup
            label='Password'
            id='password'
            type='password'
            placeholder='••••••••'
            required
            minLength='8'
            onChange={e => handleInputChange(e, 'password')}
          />
          <FormGroup
            label='Confirm Password'
            id='confirm-password'
            type='password'
            placeholder='••••••••'
            required
            minLength='8'
            onChange={e => handleInputChange(e, 'passwordConfirm')}
          />

          <div className='form__group'>
            <button className='btn btn--green'>Sign up</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
