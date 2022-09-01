import React, { useCallback, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useHistory } from 'react-router-dom';
import { Container, ContainerFlex, Content, FormBackgroud } from './styles';
import FormInput from '../../components/Form/FormInput';
import FormButton from '../../components/Form/FormButton';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import FormSelect from '../../components/Form/FormSelect';
import Header from '../../components/Header';
import { useFormData } from '../../hooks/formData';

interface ClinicFormData {
  name: string;
  email: string;
  password: string;
}

const ClinicForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { getFormData } = useFormData();
  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = useCallback(
    async (data: any) => {
      console.log('data sdf', getFormData());
      console.log('data ', data);

      const socioDemoGraficFormData = getFormData();
      console.log('socioDemoGraficFormData ', socioDemoGraficFormData);
      const requestData = {
        ...socioDemoGraficFormData,
        ...data,
        qtdTentativaSuicidio: Number(data.qtdTentativaSuicidio),
        qtdFilhos: Number(data.qtdFilhos),
        quantasInternacoes: Number(data.quantasInternacoes),
        dataNasc: socioDemoGraficFormData.dataNasc
          ? new Date(socioDemoGraficFormData.dataNasc)
          : null,
      };

      const patient: any = await api.post('/patients', requestData);

      console.log('Patient ', patient);

      history.push('/risk-assessment', { patientId: patient.data.id });
    },
    [getFormData, history],
  );

  return (
    <>
      <Header
        title="Caracterização Clínica"
        subtitle="Por favor preecha o formulário abaixo"
      />
      <Container>
        <Content>
          <FormBackgroud>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <ContainerFlex>
                <FormSelect
                  title="Faz algum tratamento?"
                  name="fazTratamento"
                  options={[
                    { value: true, label: 'sim' },
                    { value: false, label: 'não' },
                  ]}
                />
                <FormInput title="Qual?" name="qualTratamento" placeholder="" />
              </ContainerFlex>
              <ContainerFlex>
                <FormSelect
                  title="Faz uso de algum medicamento?"
                  name="fazUsoMedicamento"
                  options={[
                    { value: true, label: 'sim' },
                    { value: false, label: 'não' },
                  ]}
                />
                <FormInput
                  title="Quais?"
                  name="qualMedicamento"
                  placeholder=""
                />
              </ContainerFlex>
              <ContainerFlex>
                <FormSelect
                  title="Fez/faz uso de álcool e outras drogas?"
                  name="fazUsoDrogas"
                  options={[
                    { value: true, label: 'sim' },
                    { value: false, label: 'não' },
                  ]}
                />
                <FormInput title="Quais?" name="quaisDrogas" placeholder="" />
              </ContainerFlex>

              <FormInput
                title="Há quanto tempo faz uso de substancias psicoativas?"
                name="quantoTempoUsaDrogas"
                placeholder=""
              />

              <ContainerFlex>
                <FormSelect
                  title="Perda recente?"
                  name="perdaRecente"
                  options={[
                    { value: true, label: 'sim' },
                    { value: false, label: 'não' },
                  ]}
                />
                <FormInput
                  title="Motivo da perda recente"
                  name="motivoPerdaRecente"
                  placeholder=""
                />
              </ContainerFlex>

              <ContainerFlex>
                <FormSelect
                  title="Tentativa prévia de suicídio?"
                  name="tentativaSuicidio"
                  options={[
                    { value: true, label: 'sim' },
                    { value: false, label: 'não' },
                  ]}
                />
                <FormInput
                  title="Quantas tentativas?"
                  name="qtdTentativaSuicidio"
                  placeholder=""
                  type="number"
                />
              </ContainerFlex>
              <ContainerFlex>
                <FormSelect
                  title="Internatições Psiquiátricas"
                  name="internacoes"
                  options={[
                    { value: true, label: 'sim' },
                    { value: false, label: 'não' },
                  ]}
                />
                <FormInput
                  title="Quantas internações?"
                  name="quantasInternacoes"
                  placeholder=""
                  type="number"
                />
              </ContainerFlex>
              <ContainerFlex>
                <FormSelect
                  title="História familiar de suicídio"
                  name="historiaSuicidio"
                  options={[
                    { value: true, label: 'sim' },
                    { value: false, label: 'não' },
                  ]}
                />
                <FormInput
                  title="Grau de parentesco"
                  name="parentescoSuicidio"
                  placeholder=""
                />
              </ContainerFlex>

              <FormSelect
                title="Como você chegou ate aqui?"
                name="comoChegou"
                options={[
                  { value: 'SAMU ', label: 'SAMU' },
                  { value: 'Polícia/Bombeiro', label: 'Polícia/Bombeiro' },
                  { value: 'Familiar', label: 'Familiar' },
                  { value: 'Amigo(a)', label: 'Amigo(a)' },
                  { value: 'Desconhecido', label: 'Desconhecido' },
                  { value: 'Por conta própria', label: 'Por conta própria' },
                  { value: 'Outro', label: 'Outro' },
                ]}
              />

              <div className="buttons-container">
                <FormButton type="submit">Próximo Passo</FormButton>
              </div>
            </Form>
          </FormBackgroud>
        </Content>
      </Container>
    </>
  );
};

export default ClinicForm;
