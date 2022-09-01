import React, { createContext, useCallback, useContext, useState } from 'react';

export interface FormData {
  nomeRG?: string;
  nomeSocial?: string;
  nomeMae?: string;
  cartaoSUS?: string;
  procedencia?: string;
  naturalidade?: string;
  endereco?: string;
  telefone?: string;
  dataNasc?: string;
  idade?: number;
  genero?: string;
  orientacaoSexual?: string;
  estadoCivil?: string;
  possuiFilhos?: boolean;
  qtdFilhos?: number;
  comQuemMora?: string;
  tipoMoradia?: string;
  alfabetizado?: boolean;
  escolaridade?: string;
  qualCurso?: string;
  situacaoLaboral?: string;
  corEtinia?: string;
  religiao?: string;

  // caracterizaçao clinica
  fazTratamento?: boolean;
  qualTratamento?: string;
  fazUsoMedicamento?: boolean;
  qualMedicamento?: string;
  fazUsoDrogas?: boolean;
  quaisDrogas?: string;
  quantoTempoUsaDrogas?: string;
  perdaRecente?: boolean;
  motivoPerdaRecente?: string;
  tentativaSuicidio?: boolean;
  qtdTentativaSuicidio?: number;
  internacoes?: boolean;
  quantasInternacoes?: number;
  historiaSuicidio?: boolean;
  parentescoSuicidio?: string;
  comoChegou?: string;
}

interface FormContextData {
  setFormData(data: FormData): void;
  getFormData(): FormData;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

const FormProvider: React.FC = ({ children }) => {
  const [formDataState, setFormDataState] = useState<FormData>({});

  const setFormData = useCallback((data: FormData) => {
    setFormDataState(data);
  }, []);

  const getFormData = useCallback(() => {
    return formDataState;
  }, [formDataState]);

  return (
    <FormContext.Provider value={{ setFormData, getFormData }}>
      {children}
    </FormContext.Provider>
  );
};

function useFormData(): FormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormData must be used within a FormProvider');
  }

  return context;
}

export { FormProvider, useFormData };
