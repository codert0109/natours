const FormGroup = props => {
  const { id, label, ...inputAttributes } = props;
  return (
    <div className='form__group ma-bt-md'>
      <label className='form__label' htmlFor={id}>
        {label}
      </label>
      <input className='form__input' id={id} {...inputAttributes} />
    </div>
  );
};

export default FormGroup;
