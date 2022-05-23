import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../lib';
import InputMask from 'react-input-mask';

export default function FeedBack(props) {
  const { body, app } = props;
  const router = useRouter();
  const [formStatus, setFormStatus] = React.useState('show');
  const [formState, setFormState] = React.useState({
    clientName: '',
    clientPhone: '',
    body: body ? body : '',
    clientEmail: '',
  });
  const [checkFormStatus, setCheckFormStatus] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const classes = {
    inputWrapSm: (n) =>
      `w-full sm:w-1/2 flex relative ${
        checkFormStatus[n] ? `rounded-md border border-red-600` : `border `
      } rounded-md p-1 bg-white my-1`,
    inputSm: `w-full px-2 pt-2 bg-white`,
  };
  async function checkForm() {
    let res = false;
    let a = Promise.resolve(/^[а-я, А-Я, a-z, A-Z]{3,20}$/.test(formState.clientName));
    let b = Promise.resolve(
      /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(formState.clientPhone.replaceAll(' ', ''))
    );
    let c = formState.body === '' ? true : Promise.resolve(/.{3,500}/.test(formState.body));
    let d =
      formState.clientEmail === ''
        ? true
        : Promise.resolve(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
              formState.clientEmail
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
    setFormState({
      clientName: '',
      clientPhone: '',
      body: '',
      clientEmail: '',
    });
  }
  async function sendForm() {
    let check = await checkForm();
    if (!check) {
      return;
    }
    setFormStatus('pending');
    try {
      props.onFulfilled('loading');
    } catch (err) {}

    fetch(`${app.api.email}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formState,
        path: router.asPath,
        fromSite: app.url,
        to: app.contacts.emails[0],
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
          props.onFulfilled('success');
        } catch (err) {}
        setTimeout(() => {
          setFormStatus('show');
        }, 4000);
      })
      .catch((err) => {
        try {
          props.onFulfilled('error');
        } catch (err) {}
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('show');
        }, 3000);
      });
  }

  return (
    <div>
      <form id={'feedback'} className={`w-full mx-auto`}>
        {formStatus === 'show' && (
          <div className={`flex flex-col w-full relative items-center justify-center`}>
            <div className={`flex flex-col sm:flex-row sm:gap-2 w-full relative items-center justify-center`}>
              <div className={classes.inputWrapSm(0)}>
                {checkFormStatus[0] && (
                  <p className={`form-text-alert text-red-600 absolute right-2 top-0 text-sm`}>3 - 50 символов</p>
                )}
                <input
                  className={classes.inputSm}
                  required
                  id='FeedBackFormClientName'
                  placeholder='Имя'
                  value={formState.clientName}
                  type={'text'}
                  onChange={(e) =>
                    setFormState((state) => {
                      return { ...state, clientName: e.target.value };
                    })
                  }
                />
              </div>

              <div className={classes.inputWrapSm(1)}>
                {checkFormStatus[1] && (
                  <p className={`form-text-alert text-red-600 absolute right-2 top-0 text-sm`}>Не верный номер</p>
                )}
                <InputMask
                  className={classes.inputSm}
                  required
                  id='FeedBackFormClientPhone'
                  placeholder='Телефон'
                  value={formState.clientPhone}
                  type={'tel'}
                  onChange={(e) =>
                    setFormState((state) => {
                      return { ...state, clientPhone: e.target.value };
                    })
                  }
                  mask='+7\ (999) 999 99 99'
                  maskChar='_'
                />
              </div>
            </div>

            <div
              className={`w-full relative border rounded-md p-1 bg-white my-1 ${
                checkFormStatus[2] ? `border border-red-600` : ``
              }`}
            >
              {checkFormStatus[2] && (
                <p className={`form-text-alert text-red-600 right-2 top-0 text-sm`}>3 - 500 символов</p>
              )}
              <textarea
                style={{ resize: 'none' }}
                className={`w-full px-2 `}
                required
                id='FeedBackFormBody'
                placeholder='Сообщение'
                rows={5}
                value={formState.body}
                onChange={(e) =>
                  setFormState((state) => {
                    return { ...state, body: e.target.value };
                  })
                }
              />
            </div>

            <div className={`gap-2 flex flex-col sm:flex-row w-full relative items-center justify-between`}>
              <div className={classes.inputWrapSm(3)}>
                {checkFormStatus[3] && (
                  <p className={`form-text-alert text-red-600 absolute right-2 top-0 text-sm`}>
                    Введите корректный email
                  </p>
                )}
                <input
                  className={` w-full pt-2 px-2`}
                  required
                  id='FeedBackFormClientEmail'
                  placeholder='E-mail'
                  value={formState.clientEmail}
                  type={'email'}
                  onChange={(e) =>
                    setFormState((state) => {
                      return { ...state, clientEmail: e.target.value };
                    })
                  }
                />
              </div>
              <div
                onClick={sendForm}
                className={`bg-bp_red_2 text-center text-white rounded-md cursor-pointer px-4 py-2.5 w-full sm:w-1/2 active:scale-105 hover:scale-105 transition-all`}
              >
                Отправить
              </div>
            </div>
          </div>
        )}
        {formStatus === 'pending' && <p className={`text-center py-10`}>Отправка запроса</p>}
        {formStatus === 'complete' && (
          <p className={`text-center py-10`}>Запрос успешно отправлен. Спасибо за обращение!</p>
        )}
        {formStatus === 'error' && (
          <p className={`text-center py-10 text-zinc-100`}>
            Произошла ошибка. Попробуйте еще раз. Если ошибка повторится обратитесь к администрации сайта.
          </p>
        )}
      </form>
    </div>
  );
}
