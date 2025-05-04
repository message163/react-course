import React from 'react';
import router from './router';
import { RouterProvider } from 'react-router';
import './App.css'
const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;