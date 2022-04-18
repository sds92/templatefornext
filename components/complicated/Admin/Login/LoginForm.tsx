import Link from 'next/link';
import React from 'react';
import { FieldWrapper, FormWrapper } from '../../../lib';

const classNames = {
  label: `py-0.5`,
  input: `border rounded-sm border-zinc-500`,
};
const defaultInput = {
  email: '',
  password: '',
};

const LoginForm = (props: any) => {
  const { onSubmit, buttonText, redirectButton } = props;
  const [userInput, setUserInput] = React.useState<LoginFormUserData>(defaultInput);

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
    await onSubmit(userInput).then(resetForm);
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
      </FormWrapper>
    </React.Fragment>
  );
};

export default LoginForm;
