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

const currentLocale = navigator.language ?? 'en-GB';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider messages={messages[currentLocale] ?? messages['en-GB']} locale={currentLocale} defaultLocale="en-GB">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </IntlProvider>
  </React.StrictMode>
)
