import React from "react";
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import { store} from "./redux/store.ts"
import { Toaster } from './components/ui/toaster.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster/>
    </Provider>
  </React.StrictMode>
);


