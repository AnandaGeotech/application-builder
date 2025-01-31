// solving the error Caution: `ReactDOM` also has a named export `createRoot`. Check if you meant to write `import {createRoot} from 'react-dom/client'` instead. Also the forbidden non null assertion
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import { AuthProvider } from './common/context/auth.context.tsx';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <AuthProvider>
    <App />
    <Toaster />
  </AuthProvider>
);
// 1.1.28
