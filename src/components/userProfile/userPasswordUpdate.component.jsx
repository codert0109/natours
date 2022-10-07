import { useState } from 'react';
import { updateSettings } from '../../api/userSettings';
import FormGroup from '../formGroup/formGroup.component';

const UserPasswordUpdate = () => {
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [updatingPassword, setUpdatingPassword] = useState(false);

  const handleUpdatePassword = async e => {
    e.preventDefault();
    setUpdatingPassword(true);
    const updatedData = await updateSettings(
      { passwordCurrent, newPassword, newPasswordConfirm },
      'password'
    );

    if (updatedData) {
      setPasswordCurrent('');
      setNewPassword('');
      setNewPasswordConfirm('');
      setUpdatingPassword(false);
    }
  };

  return (
    <div className='user-view__form-container'>
      <h2 className='heading-secondary ma-bt-md'>Password change</h2>
      <form className='form form-user-settings' onSubmit={handleUpdatePassword}>
        <FormGroup
          label='Current Password'
          id='password-current'
          type='password'
          placeholder='••••••••'
          minLength='8'
          required
          value={passwordCurrent}
          onChange={e => setPasswordCurrent(e.target.value)}
        />

        <FormGroup
          label='New Password'
          id='password'
          type='password'
          placeholder='••••••••'
          minLength='8'
          required
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />

        <FormGroup
          label='Confirm password'
          id='password-confirm'
          type='password'
          placeholder='••••••••'
          minLength='8'
          required
          value={newPasswordConfirm}
          onChange={e => setNewPasswordConfirm(e.target.value)}
        />

        <div className='form__group right'>
          <button className='btn btn--small btn--green'>
            {updatingPassword === true ? 'Updating...' : 'Save password'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserPasswordUpdate;
