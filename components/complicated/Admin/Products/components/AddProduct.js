import React from 'react';
import { validateSlug } from 'utils/validations';
import { Icons } from '../../..';

export default function AddProduct(props) {
  const { addProduct } = props;
  const [state, setState] = React.useState({
    show: false,
    input: {},
  });

  function handleSubmit() {
    if (!state.input.title || !state.input.slug) {
      setState((s) => ({ ...s, showTip: { submit: true } }));
      setTimeout(() => {
        setState((s) => ({ ...s, showTip: { submit: false } }));
      }, 1500);
      return;
    }
    addProduct(state.input);
    setState((s) => ({ ...s, show: !s.show, input: {} }));
  }

  return (
    <div>
      <div className={``}>
        {!state.show ? (
          <div className={`flex justify-start items-center`}>
            <Icons.Plus
              extraClasses={`bg-zinc-50 mx-2 my-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
              onClick={() => {
                setState((s) => ({ ...s, show: !s.show }));
              }}
            />
            <div>Добавить товар</div>
          </div>
        ) : (
          <div className={`flex justify-start items-start p-2 gap-2`}>
            <div className={`flex flex-col relative`}>
              <input
                className={`border rounded-sm focus:border-sky-800 transition-all`}
                value={state.input?.title}
                onChange={(e) => {
                  setState((s) => ({
                    ...s,
                    input: {
                      ...s.input,
                      title: e.target.value,
                    },
                  }));
                }}
                onFocus={() => {
                  setState((s) => ({ ...s, showTip: { title: true } }));
                }}
                onBlur={() => {
                  setState((s) => ({ ...s, showTip: { title: false } }));
                }}
                placeholder='Название'
              />
              {state.showTip?.title && (
                <div
                  className={`z-50 absolute top-7 w-full rounded-sm bg-sky-800 bg-opacity-90 text-white text-xs font-light p-2 shadow-md`}
                >
                  <strong>пример:</strong> Белтермо Flex
                </div>
              )}
            </div>
            <div className={`flex flex-col relative`}>
              <input
                className={`border rounded-sm focus:border-sky-800 transition-all`}
                value={state.input?.slug || ''}
                onChange={(e) => {
                  setState((s) => ({
                    ...s,
                    input: {
                      ...s.input,
                      slug: validateSlug(e.target.value),
                    },
                  }));
                }}
                onFocus={() => {
                  setState((s) => ({ ...s, showTip: { slug: true } }));
                }}
                onBlur={() => {
                  setState((s) => ({ ...s, showTip: { slug: false } }));
                }}
                placeholder='url'
              />
              {state.showTip?.slug && (
                <div
                  className={`z-50 absolute top-7 w-full rounded-sm bg-sky-800 bg-opacity-90 text-white text-xs font-light p-2 shadow-md`}
                >
                  <strong>пример:</strong> flex <br />
                  <strong>*</strong> <i>только латинские символы</i>
                </div>
              )}
            </div>
            <div className={`relative`}>
              <Icons.Plus
                extraClasses={`bg-zinc-50  h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md  hover:scale-110 cursor-pointer transition-all duration-75`}
                onClick={() => {
                  handleSubmit();
                }}
              />
              {state.showTip?.submit && (
                <div
                  className={`z-50 whitespace-nowrap absolute top-7 rounded-sm bg-sky-800 bg-opacity-90 text-white text-xs font-light p-2 shadow-md`}
                >
                    заполните поля: <strong>&quot;Название&quot;</strong> и <strong>&quot;url&quot;</strong>
                </div>
              )}
            </div>
            <Icons.Close
              extraClasses={`bg-zinc-50  h-6 w-6 shadow-md border border-red-900 text-zinc-800 rounded-md  hover:scale-110 cursor-pointer transition-all duration-75`}
              onClick={() => {
                setState((s) => ({ ...s, show: !s.show }));
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
