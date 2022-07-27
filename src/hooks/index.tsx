import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { FormProvider } from './formData';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <FormProvider>{children}</FormProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
