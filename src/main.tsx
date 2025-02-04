// solving the error Caution: `ReactDOM` also has a named export `createRoot`. Check if you meant to write `import {createRoot} from 'react-dom/client'` instead. Also the forbidden non null assertion
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import { AuthProvider } from './common/contexts/auth.context.tsx';
import './index.css';
import authenticationService from '@/features/authentication/service/authentication.service.ts';

const { retrieveUserByTokenFromDBFn } = authenticationService();
const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <>
    <Toaster />
    <AuthProvider retrieveUserByTokenFromDBFn={retrieveUserByTokenFromDBFn}>
      <App />
    </AuthProvider>
  </>
);
// 1.1.28
