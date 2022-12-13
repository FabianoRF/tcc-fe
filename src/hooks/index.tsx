import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { FormProvider } from './formData';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <FormProvider>{children}</FormProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
