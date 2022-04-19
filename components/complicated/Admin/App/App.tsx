import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, setContacts } from 'redux/slices/appSlice';

type AppProps = {};

const App = (props: AppProps) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log('🚀 ~ file: App.tsx ~ line 10 ~ App ~ contacts', contacts);

  async function getContacts() {
    await fetch(`api/getappinfo`)
    .then(res => res.json()
    .then(res => dispatch(setContacts(res.contacts))))
  }

  return (
    <div>
      <button
        onClick={async () => {
          await dispatch(fetchApp)
          console.log(contacts)
          // const response = await fetch(`api/getappinfo`);
          // console.log("🚀 ~ file: App.tsx ~ line 19 ~ onClick={ ~ response", response)
          // return (await response.json()) as IApp;
        }}
      >
        !!!
      </button>
    </div>
  );
};

export default App;
