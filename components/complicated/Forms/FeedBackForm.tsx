import React from 'react';
import { FormWrapper, FieldWrapper } from '../../lib';
import { useRouter } from 'next/router';
import styles from './FeedBack.module.css';

import InputMask from 'react-input-mask';

interface IFeedBackProps extends IFormProps {
  theme: ITheme;
  app: IApp;
  readonly formType?: string;
  onFullfilled?: (a: string) => void;
}

type FormState = {
  feedBackFormName: string;
  feedBackFormPhone: string;
  feedBackFormBody: string;
  feedBackFormEmail: string;
};

const defaultInput = {
  feedBackFormName: '',
  feedBackFormPhone: '',
  feedBackFormBody: '',
  feedBackFormEmail: '',
};

const classNames = {
  textarea: `w-full`,
  label: ``,
  input: `w-1/2`,
  ff: `w-full md:w-1/2 my-1 px-1`,
};

const FeedBackForm: React.FC<IFeedBackProps> = (props) => {
  const { theme, app, onFullfilled } = props;
  const { contacts } = app;
  const router = useRouter();
  const [formStatus, setFormStatus] = React.useState<string>('show');
  const [userInput, setUserInput] = React.useState<FormState>(defaultInput);
  const [checkFormStatus, setCheckFormStatus] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  function onChangeHandler(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, flag: string) {
    setUserInput({ ...userInput, [flag]: e.currentTarget.value });
    return;
  }

  // TODO: beautify the logic of processing the unrequired fields
  async function checkForm() {
    let res = false;
    let a = Promise.resolve(/^[а-я, А-Я, a-z, A-Z]{3,20}$/.test(userInput.feedBackFormName));
    let b = Promise.resolve(
      /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(userInput.feedBackFormPhone.replaceAll(' ', ''))
    );
    let c =
      userInput.feedBackFormBody === '' ? true : Promise.resolve(/.{3,500}/.test(userInput.feedBackFormBody));
    let d =
      userInput.feedBackFormEmail === ''
        ? true
        : Promise.resolve(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
              userInput.feedBackFormEmail
            )
          );
    const values_1 = await Promise.all([a, b, c, d]);
    res = true;
    values_1.map((item, index) => {
      if (!item) {
        res = false;
        setCheckFormStatus((state) => {
          return { ...state, [index]: true };
        });
        setTimeout(() => {
          setCheckFormStatus((state_1) => {
            return { ...state_1, [index]: false };
          });
        }, 3000);
      }
    });
    return res;
  }

  function resetForm() {
    setUserInput(defaultInput);
    return;
  }

  async function sendForm() {
    let check = await checkForm();
    if (!check) {
      return;
    }
    setFormStatus('pending');
    try {
      onFullfilled && onFullfilled('loading');
    } catch (err) {}

    fetch(`${app.api.email}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userInput,
        fromSite: app.url,
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
          setFormStatus('show');
        }, 4000);
      })
      .catch((err) => {
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('show');
        }, 3000);
      });
  }

  return (
    <div>
      {formStatus === 'show' && (
        <FormWrapper
          onSubmit={sendForm}
          className={`flex flex-col justify-center items-center max-w-xl mx-auto`}
          userSbmtButton={
            <div>Отправить</div>
          }
        >
          <div className={`flex w-full`}>
            <FieldWrapper
              className={[classNames.label, classNames.input]}
              id={'feedBackFormName'}
              placeholder={`Имя`}
              type='text'
              name='feedBackFormName'
              value={userInput.feedBackFormName}
              onChange={onChangeHandler}
              required
            />
            <FieldWrapper
              className={[classNames.label, classNames.input]}
              id={'feedBackFormPhone'}
              placeholder={`Телефон`}
              type='text'
              name='feedBackFormPhone'
              value={userInput.feedBackFormPhone}
              onChange={onChangeHandler}
              required
            />
          </div>
          <FieldWrapper
            inputType='textarea'
            className={[classNames.label, classNames.textarea]}
            id={'feedBackFormBody'}
            placeholder={`Сообщение`}
            type='text'
            name='feedBackFormBody'
            value={userInput.feedBackFormBody}
            onChange={onChangeHandler}
            required
          />
          <FieldWrapper
            className={[classNames.label, classNames.input]}
            id={'feedBackFormEmail'}
            placeholder={`E-mail`}
            type='text'
            name='feedBackFormEmail'
            value={userInput.feedBackFormEmail}
            onChange={onChangeHandler}
            required
          />
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
      {formStatus === 'pending' && <p className={`text-center py-10 text-zinc-100`}>Отправка запроса</p>}
      {formStatus === 'complete' && (
        <p className={`text-center py-10 text-zinc-100`}>Запрос успешно отправлен. Спасибо за обращение!</p>
      )}
      {formStatus === 'error' && (
        <p className={`text-center py-10 text-zinc-100`}>
          Произошла ошибка. Попробуйте еще раз. Если ошибка повторится обратитесь к администрации сайта.
        </p>
      )}
    </div>
  );
};

export default FeedBackForm;
