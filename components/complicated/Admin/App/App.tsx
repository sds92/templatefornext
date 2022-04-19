import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts  } from 'redux/slices/appSlice';

type AppProps = {};

const App = (props: AppProps) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log('🚀 ~ file: App.tsx ~ line 10 ~ App ~ contacts', contacts);

  // async function getContacts() {
  //   await fetch(`api/getappinfo`)
  //   .then(res => res.json()
  //   .then(res => dispatch(setContacts(res.contacts))))
  // }

  return (
    <div>
     
    </div>
  );
};

export default App;
