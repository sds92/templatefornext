import React from 'react';
import { useRouter } from 'next/router';

export default function FeedBack(props) {
  const router = useRouter();
  console.log('🚀 ~ file: FeedBack.js ~ line 6 ~ FeedBack ~ router', router);
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

    fetch('/api/sendform', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formState, path: router.asPath }),
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
      });
  }

  return (
    <div>
      <form className={`rd-mailform margin-top-20`}>
        {formStatus === 'show' && (
          <div className={`row row-20 row-form-20`}>
            <div className={`col-md-6`}>
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
            <div className={`col-md-6`}>
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
            <div className={`col-sm-12`}>
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

            <div className={`col-md-6`}>
              <div className={`form-wrap`} style={{ position: 'relative' }}>
                {checkFormStatus[3] && <p className={`user-form-alert`}>Введите корректный email</p>}
                <input
                  className={`user-form-input ${checkFormStatus[3] ? `user-form-alert-borders` : ``}`}
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
            <div className={`col-md-6`}>
              <div
                onClick={sendForm}
                className={`button button-block button-primary`}
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
      </form>
    </div>
  );
}
