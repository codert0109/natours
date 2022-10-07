import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userLogin } from '../../api/auth';
import { setPageTitle } from '../../utils/pageHead';
import User from '../../context/userContext';
import FormGroup from '../formGroup/formGroup.component';

const Login = () => {
  const { setUserInfo } = User();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();

    const res = await userLogin(email, password);
    if (res) {
      setUserInfo(res);
      history.push('/');
    }
  };

  useEffect(() => setPageTitle('Natours | Log in to your account'), []);

  return (
    <main className='main'>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
        <form className='form form--login' onSubmit={handleLogin}>
          <FormGroup
            label='Email Address'
            id='email'
            type='email'
            placeholder='you@example.com'
            required
            onChange={e => setEmail(e.target.value)}
          />

          <FormGroup
            label='Your Password'
            id='password'
            type='password'
            placeholder='••••••••'
            required
            minLength='8'
            onChange={e => setPassword(e.target.value)}
          />

          <div className='form__group'>
            <button className='btn btn--green'>Login</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
