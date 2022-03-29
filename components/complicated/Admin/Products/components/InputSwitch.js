import React from 'react';
import { Icons } from '../../..';

export default function InputSwitch(props) {
  const { title, onSubmit, initValue, type, textClassName } = props;
  const [state, setState] = React.useState({
    hover: false,
    edit: false,
    input: initValue || '',
  });
  return (
    <React.Fragment>
      {title && <div className={`ml-2 text-sm font-bold cursor-default`}>{title}</div>}
      {state.edit ? (
        <div className={`flex ${type !== 'textarea' ? 'w-max h-6' : 'h-max'} pl-0.5`}>
          <Icons.Ok
            extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-sm hover:scale-110 cursor-pointer transition-all duration-75`}
            onClick={() => {
              onSubmit(state.input);
              setState((s) => ({
                ...s,
                edit: false,
                hover: false,
              }));
            }}
          />
          {type === 'textarea' ? (
            <textarea
              className={`w-full`}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  input: e.target.value,
                }));
              }}
              value={state.input}
              rows={5}
            />
          ) : (
            <input
              className={`${
                textClassName
                  ? textClassName
                  : 'w-max max-w-full h-6 ml-2 px-2 relative text-sm rounded-sm cursor-default'
              }`}
              value={state.input}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  input: e.target.value,
                }));
              }}
            />
          )}
        </div>
      ) : (
        <div
          className={`${
            textClassName
              ? textClassName
              : 'w-max max-w-full  ml-2 px-2 pt-1 relative text-sm rounded-sm cursor-default'
          } ${type == 'textarea' ? 'h-max' : 'h-6'}  ${state.hover ? `` : `gap-1`} flex items-start`}
          onMouseEnter={() => {
            setState((s) => ({
              ...s,
              hover: true,
            }));
          }}
          onMouseLeave={() => {
            setState((s) => ({
              ...s,
              hover: false,
            }));
          }}
          onClick={() => {
            setState((s) => ({
              ...s,
              edit: true,
              hover: false,
            }));
          }}
        >
          <Icons.Edit
            extraClasses={`${state.hover ? 'opacity-100' : 'opacity-0'} flex-none bg-sky-900 bg-opacity-90 ${
              type !== 'textarea' ? 'w-max h-full' : 'w-5 h-5'
            } shadow-md border border-white text-zinc-100 rounded-sm hover:scale-110 cursor-pointer transition-all duration-300`}
          />

          <div
            className={`${state.hover ? '' : '-ml-6 delay-200'} ${
              type !== 'textarea' ? '' : ''
            } whitespace-nowrap transition-all cursor-pointer`}
          >
            {initValue}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
