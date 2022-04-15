import React from 'react';
import { FormWrapper, FieldWrapper } from '../../../lib';

const classNames = {
  label: `py-0.5`,
  input: `border rounded-sm border-zinc-500`,
};
const defaultInput = {
  name: '',
  email: '',
  password: '',
  passwordR: '',
};

const RegForm: React.FC<IFormProps> = (props) => {
  const { onSubmit, buttonText, redirectButton } = props;
  const [userInput, setUserInput] = React.useState<RegFormUserData>(defaultInput);

  function resetForm() {
    setUserInput(defaultInput);
    return;
  }

  function onChangeHandler(e: React.FormEvent<HTMLInputElement>, flag: string) {
    setUserInput({ ...userInput, [flag]: e.currentTarget.value });
    return;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && userInput.password === userInput.passwordR) {
      await onSubmit(userInput).then(resetForm);
    } else return;
  };
  return (
    <React.Fragment>
      <FormWrapper
        onSubmit={handleSubmit}
        className={`flex flex-col justify-center items-center max-w-xl mx-auto`}
        buttonText={buttonText}
        redirectButton={redirectButton}
      >
        <FieldWrapper
          className={[classNames.label, classNames.input]}
          id={'name'}
          placeholder={`Имя`}
          type='text'
          name='name'
          value={userInput.name}
          onChange={onChangeHandler}
          required
        />
        <FieldWrapper
          className={[classNames.label, classNames.input]}
          id={'email'}
          placeholder={`email`}
          type='text'
          name='email'
          value={userInput.email}
          onChange={onChangeHandler}
          required
        />
        <FieldWrapper
          className={[classNames.label, classNames.input]}
          id={'password'}
          placeholder={`пароль`}
          type='password'
          name='password'
          value={userInput.password}
          onChange={onChangeHandler}
          required
        />
        <FieldWrapper
          className={[classNames.label, classNames.input]}
          id={'passwordR'}
          placeholder={`повторите пароль`}
          type='password'
          name='passwordR'
          value={userInput.passwordR}
          onChange={onChangeHandler}
          required
        />
      </FormWrapper>
    </React.Fragment>
  );
};

export default RegForm;
