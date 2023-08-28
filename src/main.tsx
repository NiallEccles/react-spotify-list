import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from "react-router-dom"

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from 'react-query';
import { IntlProvider } from "react-intl";
import { messages } from './translations.ts'

const queryClient = new QueryClient();

const currentLocale = navigator.language;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider messages={messages[currentLocale]} locale={navigator.language} defaultLocale="en">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </IntlProvider>
  </React.StrictMode>
)
