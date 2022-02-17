import React from 'react';
import { useRouter } from 'next/router';

export default function FeedBack(props) {
  const { theme } = props;
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

  // TODO: beautify the logic of processing the unrequired fields
  async function checkForm() {
    let res = false;
    let a = Promise.resolve(/^[а-я, А-Я, a-z, A-Z]{3,20}$/.test(formState.clientName));
    let b = Promise.resolve(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(formState.clientPhone));
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
      });
  }

  let keyCode;
  let selectionStart;
  let value;
  function mask(e) {
    console.log('🚀 ~ file: FeedBack.js ~ line 120 ~ mask ~ e', e.nativeEvent.data);

    // event.keyCode && (keyCode = event.keyCode);
    let pos = selectionStart;
    if (pos < 3) e.preventDefault();
    let matrix = '+7 (___) ___ ____';
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = value.replace(/\D/g, '');
    let new_value = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });
    // i = new_value.indexOf('_');
    // if (i != -1) {
    //   i < 5 && (i = 3);
    //   new_value = new_value.slice(0, i);
    // }
    // var reg = matrix
    //   .substr(0, this.value.length)
    //   .replace(/_+/g, function (a) {
    //     return '\\d{1,' + a.length + '}';
    //   })
    //   .replace(/[+()]/g, '\\$&');
    // reg = new RegExp('^' + reg + '$');
    // if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58))
    //   this.value = new_value;
    // if (event.type == 'blur' && this.value.length < 5) this.value = '';
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
                  type='tel'
                  value={formState.clientPhone}
                  onChange={(e) => {
                    // mask(e);
                    setFormState((state) => {
                      return { ...state, clientPhone: e.target.value };
                    });
                  }}
                />
              </div>
            </div>
            <div className={`w-full px-1 my-1`}>
              <div className={`form-wrap`} style={{ position: 'relative' }}>
                {checkFormStatus[2] && (
                  <p className={`user-form-alert`}>3 - 500 символов или оставьте поле пустым</p>
                )}
                <textarea
                  className={`user-form-input ${checkFormStatus[2] ? `user-form-alert-borders` : ``}`}
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
                  <p className={`user-form-alert`}>Введите корректный email или оставьте поле пустым</p>
                )}
                <input
                  className={`h-14 user-form-input ${checkFormStatus[3] ? `user-form-alert-borders` : ``}`}
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
                className={`w-full h-full pt-5 pb-4 form-button ${theme.bg.buttons} rounded-md text-slate-100 text-center hover:font-bold transition-all`}
              >
                Отправить
              </div>
            </div>
          </div>
        )}
        {formStatus === 'pending' && <p className={`text-center py-10 `}>Отправка запроса</p>}
        {formStatus === 'complete' && (
          <p className={`text-center py-10 `}>Запрос успешно отправлен. Спасибо за обращение!</p>
        )}
        {formStatus === 'error' && (
          <p className={`text-center py-10 `}>
            Произошла ошибка. Попробуйте еще раз. Если ошибка повторится обратитесь к администрации сайта.
          </p>
        )}
      </form>
    </div>
  );
}
