import React from 'react';
import { Icons } from '../';

const Header = ({ data }) => {
  return (
    <div className='w-96 '>
      <h2 className='flex items-center'>
        {data.status === 'orderonopen' && (
          <>
            &nbsp;{data.header}{' '}
            <Icons.Close
              className={`absolute m-2 top-0 right-0 hover:scale-110 hover:text-red-700 transition-all transition-duration-1000 self-end cursor-pointer`}
              w={8}
              h={8}
              onClick={() => data.setClose()}
            />
          </>
        )}
        {data.status === 'loading' && (
          <>
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-black'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            &nbsp;Идет обработка запроса
          </>
        )}
        {data.status === 'success' && (
          <>
            <svg
              className='text-green-400 -ml-1 mr-3 h-5 w-5'
              data-todo-x-description='Heroicon name: outline/check-circle'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            &nbsp;Успешно
          </>
        )}

        {data.status === 'error' && (
          <>
            <svg
              className='h-5 w-5 text-red-400'
              data-todo-x-description='Heroicon name: solid/x-circle'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                clipRule='evenodd'
              ></path>
            </svg>
            &nbsp;Ошибка
          </>
        )}
      </h2>
    </div>
  );
};

const Body = ({ data }) => {
  let colors = {};

  switch (data.status) {
    case 'success':
      colors = {
        header: 'text-green-700',
        body: 'text-green-700',
      };
      break;
    case 'error':
      colors = {
        header: 'text-red-700',
        body: 'text-red-700',
      };
      break;

    default:
      colors = {
        header: 'text-black',
        body: 'text-black',
      };
      break;
  }
  return (
    <div className='ml-3'>
      <h3 className='text-base font-medium flex items-center'>
        {data.status === 'loading' && (
          <>
            <svg
              className={`animate-spin -ml-6 mr-1 h-5 w-5 text-black`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            <span className={`${colors.header}`}>Обработка запроса</span>
          </>
        )}
        {data.status === 'success' && (
          <>
            <svg
              className={`${colors.header} mr-1 -ml-6  h-5 w-5`}
              data-todo-x-description='Heroicon name: outline/check-circle'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span className={`${colors.header}`}>Успешно</span>
          </>
        )}
        {data.status === 'error' && (
          <>
            <svg
              className={`${colors.header} h-5 w-5 -ml-6 mr-1`}
              data-todo-x-description='Heroicon name: solid/x-circle'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span className={`${colors.header}`}>Ошибка</span>
          </>
        )}
      </h3>
      {data.description.length > 0 && (
        <div className={`${colors.body} mt-2 text-sm text-red-700`}>
          <ul className='space-y-1'>
            {data.description.map((item, index) => (
              <li key={index + '_' + item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ModalItems = { Header, Body };
export default ModalItems;
