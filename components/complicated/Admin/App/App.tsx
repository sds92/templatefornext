import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/slices/appSlice';

type AppProps = {};

const App = (props: AppProps) => {
    const dispatch = useDispatch()
    const contacts = dispatch(selectContacts)
  const getApp = () => {
    fetch('api/app')
      .then((res) => res.json())
      .then((res) => {
        // dispatch(importInitApp(res));
      })
      .catch((err) => console.log(err));
  };
  return <div></div>;
};

export default App;
