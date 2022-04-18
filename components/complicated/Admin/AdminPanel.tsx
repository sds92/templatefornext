import React from 'react';
import { Products, Pages, App, Navigation } from './';
const AdminPanel = () => {
  const [view, setView] = React.useState<'products' | 'pages' | 'app'>('products');
  return (
    <>
      <Navigation
        handleSave={() => {}}
        setView={setView}
      />
      {view === 'products' && <Products />}
      {view === 'pages' && <Pages />}
      {view === 'app' && <App />}
    </>
  );
};
export default AdminPanel;
