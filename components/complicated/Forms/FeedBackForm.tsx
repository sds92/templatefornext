import React from 'react';
import { FormWrapper, FieldWrapper } from '../../lib';
import { useRouter } from 'next/router';
import styles from './FeedBack.module.css';

import InputMask from 'react-input-mask';

interface IFeedBackProps extends IFormProps {
  theme: ITheme;
  app?: IApp;
  readonly formType?: string;
  contacts: IApp['contacts'];
  onFullfilled?: (a: string) => void;
  readonly incol?: boolean;
}

type FormState = {
  [key in 'feedBackFormName' | 'feedBackFormPhone' | 'feedBackFormBody' | 'feedBackFormEmail']: string;
};

const defaultInput = {
  feedBackFormName: '',
  feedBackFormPhone: '',
  feedBackFormBody: '',
  feedBackFormEmail: '',
};

const FeedBackForm = (props: IFeedBackProps) => {
  const { theme, contacts, onFullfilled, app, incol } = props;
  const router = useRouter();
  const [formStatus, setFormStatus] = React.useState<string>('ready');
  const [userInput, setUserInput] = React.useState<FormState>(defaultInput);
  const [validation, setValidation] = React.useState({
    feedBackFormName: false,
    feedBackFormPhone: false,
    feedBackFormBody: false,
    feedBackFormEmail: false,
  });
  const [tooltips, setTooltips] = React.useState<boolean>(false);
  const [highlight, setHighlight] = React.useState<boolean>(false);

  const classNames = {
    textarea: (_a: boolean) =>
      ` w-full p-2 focus:outline ${
        _a ? `focus:outline-zinc-200` : `focus:outline-red-800`
      } focus:outline-1 rounded-sm shadow-inner transition-all duration-1000`,
    label: ``,
    input: (_a: boolean) =>
      ` w-full ${!_a ? `focus:outline-zinc-200` : `focus:outline-red-800`} ${
        incol ? `` : `md:w-1/2`
      } rounded-sm focus:outline focus:outline-1 h-10 px-2 shadow-sm transition-all duration-1000`,
    ff: `basis-full ${incol ? `` : `md:basis-1/2`} my-1 px-1`,
  };

  async function onChangeHandler(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    flag: keyof FormState
  ) {
    setUserInput({ ...userInput, [flag]: e.currentTarget.value });
    let check = await checkUserInput(flag as keyof FormState);
    setValidation({ ...validation, [flag]: check });
    if (!check) {
      setHighlight(true);
      setTimeout(() => {
        setHighlight(false);
      }, 1000);
    }

    return;
  }

  function checkUserInput(flag: keyof FormState) {
    const checker = {
      feedBackFormName: () =>
        Promise.resolve(/^[а-я, А-Я, a-z, A-Z]{3,20}$/.test(userInput.feedBackFormName)),
      feedBackFormPhone: () =>
        Promise.resolve(
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(
            userInput.feedBackFormPhone.replaceAll(' ', '')
          )
        ),
      feedBackFormBody: () =>
        userInput.feedBackFormBody === ''
          ? true
          : Promise.resolve(/.{3,500}/.test(userInput.feedBackFormBody)),
      feedBackFormEmail: () =>
        userInput.feedBackFormEmail === ''
          ? true
          : Promise.resolve(
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
                userInput.feedBackFormEmail
              )
            ),
    };
    return checker[flag]();
  }

  function resetForm() {
    setUserInput(defaultInput);
    return;
  }

  async function sendForm(e: React.FormEvent) {
    e.preventDefault();

    if (
      Object.values(validation).some((value) => {
        return !value;
      })
    ) {
      setTooltips(true);
      setTimeout(() => {
        setTooltips(false);
      }, 1000);
      return;
    }
    setFormStatus('pending');
    try {
      onFullfilled && onFullfilled('loading');
    } catch (err) {}

    fetch(`/api/sendform`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userInput,
        fromSite: app?.url,
        formType: props.formType,
        to: contacts.emails[0],
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Succeeded!');
          resetForm();
        }
        if (!res.ok) {
          console.log('Error!');
          resetForm();
        }
        setTimeout(() => {
          return res;
        }, 1000);
      })
      .then(() => {
        setFormStatus('complete');
        try {
          onFullfilled && onFullfilled('success');
        } catch (err) {}
        setTimeout(() => {
          setFormStatus('ready');
        }, 4000);
      })
      .catch((err) => {
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('ready');
        }, 3000);
      });
  }

  return (
    <div id={`feedbackform`}>
      {formStatus === 'ready' && (
        <FormWrapper
          onSubmit={sendForm}
          className={`flex flex-col justify-center items-center max-w-xl mx-auto px-2`}
          userSbmtButton
        >
          <div className={`flex flex-wrap ${incol ? `` : `md:flex-nowrap`} w-full gap-1 my-1`}>
            <FieldWrapper
              className={[
                classNames.label,
                classNames.input(!validation['feedBackFormName'] && highlight),
              ]}
              id={'feedBackFormName'}
              placeholder={`Имя`}
              type='text'
              name='feedBackFormName'
              value={userInput.feedBackFormName}
              onChange={onChangeHandler}
              required
              showTooltip={!validation['feedBackFormName'] && tooltips}
            >
              <p className={styles.userFormAlert}>3 - 50 символов</p>
            </FieldWrapper>

            <FieldWrapper
              inputType='tel'
              className={[
                classNames.label,
                classNames.input(!validation['feedBackFormName'] && highlight),
              ]}
              id={'feedBackFormPhone'}
              placeholder={`Телефон`}
              type='text'
              name='feedBackFormPhone'
              value={userInput.feedBackFormPhone}
              onChange={onChangeHandler}
              showTooltip={!validation['feedBackFormPhone'] && tooltips}
              required
            >
              <p className={styles.userFormAlert}>Не верный номер</p>
            </FieldWrapper>
          </div>

          <FieldWrapper
            inputType='textarea'
            className={[
              classNames.label,
              classNames.textarea(!validation['feedBackFormBody'] && highlight),
            ]}
            id={'feedBackFormBody'}
            placeholder={`Сообщение`}
            type='text'
            name=''
            value={userInput.feedBackFormBody}
            onChange={onChangeHandler}
            rows={4}
            showTooltip={!validation['feedBackFormBody'] && tooltips}
            required
          >
            <p className={styles.userFormAlert}>3 - 500 символов или оставьте поле пустым</p>
          </FieldWrapper>
          <div className={`flex flex-wrap ${incol ? ` ` : `md:flex-nowrap`} w-full gap-1 my-1`}>
            <FieldWrapper
              className={[
                classNames.label,
                classNames.input(!validation['feedBackFormEmail'] && highlight),
              ]}
              id={'feedBackFormEmail'}
              placeholder={`E-mail`}
              type='text'
              name=''
              value={userInput.feedBackFormEmail}
              onChange={onChangeHandler}
              showTooltip={!validation['feedBackFormEmail'] && tooltips}
              required
            >
              <p className={styles.userFormAlert}>Введите корректный email или оставьте поле пустым</p>{' '}
            </FieldWrapper>
            <button
              type='submit'
              style={{
                textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)`,
              }}
              className={`whitespace-nowrap shadow-md text-xl text-centercursor-pointer font-bold uppercase w-full h-10 rounded-sm ${
                incol ? ` ` : `md:w-1/2`
              } hover:scale-105 transition-all duration-75 bg-${theme.bg.contacts.color.s1} text-${
                theme.text.contacts.color.s2
              }`}
            >
              Отправить
            </button>
          </div>
        </FormWrapper>
      )}
      {/* {formStatus === 'show' && (
        <div className={`flex flex-wrap`}>
          <div className={classes.ff}>
            <div className={`form-wrap`} style={{ position: 'relative' }}>
              {checkFormStatus[0] && <p className={styles.userFormAlert}>3 - 50 символов</p>}
              <input
                className={`${styles.userFormInput} ${
                  checkFormStatus[0] ? `${styles.userFormAlertBorders}` : ``
                }`}
                required
                id='FeedBackFormClientName'
                placeholder='Имя'
                value={formState.clientName}
                onChange={(e) =>
                  setFormState((state) => {
                    return { ...state, clientName: e.target.value };
                  })
                }
              />
            </div>
          </div>
          <div className={classes.ff}>
            <div className={`form-wrap`} style={{ position: 'relative' }}>
              {checkFormStatus[1] && <p className={styles.userFormAlert}>Не верный номер</p>}
              <InputMask
                className={`${styles.userFormInput} ${
                  checkFormStatus[1] ? `${styles.userFormAlertBorders}` : ``
                }`}
                required
                id='FeedBackFormClientPhone'
                placeholder='Телефон'
                type='tel'
                value={formState.clientPhone}
                onChange={(e) => {
                  setFormState((state) => {
                    return { ...state, clientPhone: e.target.value };
                  });
                }}
                mask='+7\ (999) 999 99 99'
                maskChar='_'
              />
            </div>
          </div>
          <div className={`w-full px-1 my-1`}>
            <div className={`form-wrap`} style={{ position: 'relative' }}>
              {checkFormStatus[2] && (
                <p className={styles.userFormAlert}>3 - 500 символов или оставьте поле пустым</p>
              )}
              <textarea
                className={`${styles.userFormInput} ${
                  checkFormStatus[2] ? `${styles.userFormAlertBorders}` : ``
                }`}
                id='FeedBackFormBody'
                placeholder='Сообщение'
                rows={4}
                value={formState.body}
                onChange={(e) =>
                  setFormState((state) => {
                    return { ...state, body: e.target.value };
                  })
                }
              />
            </div>
          </div>

          <div className={classes.ff}>
            <div className={`form-wrap`} style={{ position: 'relative' }}>
              {checkFormStatus[3] && (
                <p className={styles.userFormAlert}>Введите корректный email или оставьте поле пустым</p>
              )}
              <input
                className={`h-14 ${styles.userFormInput} ${
                  checkFormStatus[3] ? `${styles.userFormAlertBorders}` : ``
                }`}
                type='email'
                id='FeedBackFormClientEmail'
                placeholder='E-mail'
                value={formState.clientEmail}
                onChange={(e) =>
                  setFormState((state) => {
                    return { ...state, clientEmail: e.target.value };
                  })
                }
              />
            </div>
          </div>
          <div className={`${classes.ff} cursor-pointer`}>
            <div
              onClick={sendForm}
              className={`cursor-pointer font-bold w-full whitespace-nowrap rounded-md shadow-md py-3.5 px-4 uppercase text-xl text-center text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`}
            >
              Отправить
            </div>
          </div>
        </div>
      )} */}
      {formStatus === 'pending' && <p className={`text-center py-10 text-zinc-800`}>Отправка запроса</p>}
      {formStatus === 'complete' && (
        <p className={`text-center py-10 text-zinc-800`}>Запрос успешно отправлен. Спасибо за обращение!</p>
      )}
      {formStatus === 'error' && (
        <p className={`text-center py-10 text-zinc-800`}>
          Произошла ошибка. Попробуйте еще раз. Если ошибка повторится обратитесь к администрации сайта.
        </p>
      )}
    </div>
  );
};

export default FeedBackForm;
