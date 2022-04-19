import React from 'react';
import { FieldWrapper, FormWrapper } from '../../../lib';

const classNames = {
  label: `py-0.5`,
  input: `border rounded-sm border-zinc-500`,
};
const defaultInput = {
  token: '',
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
          id={'token'}
          placeholder={`token`}
          type='text'
          name='token'
          value={userInput.token}
          onChange={onChangeHandler}
          required
        />
      </FormWrapper>
    </React.Fragment>
  );
};

export default LoginForm;
