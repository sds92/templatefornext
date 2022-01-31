import React from 'react';
import { useRouter } from 'next/router';

export default function FeedBack(props) {
  const router = useRouter();
  const [formStatus, setFormStatus] = React.useState('show');
  const [formState, setFormState] = React.useState({
    clientName: '',
    clientPhone: '',
    body: '',
    clientEmail: '',
  });
  const [checkFormStatus, setCheckFormStatus] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const classes = {
    ff: `w-full md:w-1/2 my-1 px-1`,
  };

  function checkForm() {
    let res = false;
    let a = Promise.resolve(/^[а-я, А-Я, a-z, A-Z]{3,20}$/.test(formState.clientName));
    let b = Promise.resolve(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(formState.clientPhone));
    let c = Promise.resolve(/.{3,500}/.test(formState.body));
    let d = Promise.resolve(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        formState.clientEmail
      )
    );
    return Promise.all([a, b, c, d]).then((values) => {
      console.log(values);
      res = true;
      values.map((item, index) => {
        if (!item) {
          res = false;
          setCheckFormStatus((state) => {
            return { ...state, [index]: true };
          });
          setTimeout(() => {
            setCheckFormStatus((state) => {
              return { ...state, [index]: false };
            });
          }, 3000);
        }
      });
      return res;
    });
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

    fetch(`${props.app.api.email}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formState,
        fromSite: props.app.url,
        to: props.app.contacts.emails[0],
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
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('show');
        }, 3000);
        
      })
  }

  return (
    <div>
      <form className={``}>
        {formStatus === 'show' && (
          <div className={`flex flex-wrap`}>
            <div className={classes.ff}>
              <div className={`form-wrap`} style={{ position: 'relative' }}>
                {checkFormStatus[0] && <p className={`user-form-alert`}>3 - 50 символов</p>}
                <input
                  className={`user-form-input ${checkFormStatus[0] ? `user-form-alert-borders` : ``}`}
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
                {checkFormStatus[1] && <p className={`user-form-alert`}>Не верный номер</p>}
                <input
                  className={`user-form-input ${checkFormStatus[1] ? `user-form-alert-borders` : ``}`}
                  required
                  id='FeedBackFormClientPhone'
                  placeholder='Телефон'
                  value={formState.clientPhone}
                  onChange={(e) =>
                    setFormState((state) => {
                      return { ...state, clientPhone: e.target.value };
                    })
                  }
                />
              </div>
            </div>
            <div className={`w-full px-1 my-1`}>
              <div className={`form-wrap`} style={{ position: 'relative' }}>
                {checkFormStatus[2] && <p className={`user-form-alert`}>3 - 500 символов</p>}
                <textarea
                  className={`user-form-input ${checkFormStatus[2] ? `user-form-alert-borders` : ``}`}
                  required
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
                {checkFormStatus[3] && <p className={`user-form-alert`}>Введите корректный email</p>}
                <input
                  className={`h-14 user-form-input ${checkFormStatus[3] ? `user-form-alert-borders` : ``}`}
                  required
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
                className={`w-full h-full pt-5 form-button bg-belplit24_2 rounded-md text-slate-100 text-center`}
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
          <p className={`text-center py-10`}>Произошла ошибка. Попробуйте еще раз. Если ошибка повторится обратитесь к администрации сайта.</p>
        )}
      </form>
    </div>
  );
}
