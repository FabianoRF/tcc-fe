import React, { useCallback, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useHistory, useLocation } from 'react-router-dom';
import { Container, Content, FormBackgroud } from './styles';
import FormButton from '../../components/Form/FormButton';
import FormCheckBox from '../../components/Form/FormCheckBox';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import Header from '../../components/Header';
import FormSelect from '../../components/Form/FormSelect';
import FormSelectFlex from '../../components/Form/FormSelectFlex';

interface LocationState {
  patientId: string;
}

const RiskAssessment: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const location = useLocation<LocationState>();
  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = useCallback(
    async (data: any) => {
      console.log('data ', data);
      // const { patientId } = location.state;
      const patientId = 1;

      // const response = await api.post(
      //   `/patients/${patientId}/risk-assessment`,
      //   data,
      // );

      history.push('/measures', { classification: 'HIGH' });
    },
    [location.state, history],
  );

  return (
    <>
      <Header
        title="Avaliação de Risco"
        subtitle="Por favor marque as opções que se aplicam"
      />
      <Container>
        <Content>
          <FormBackgroud>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormSelectFlex
                title="Tentativa de suicídio"
                name="q1"
                defaultValue={{ value: false, label: 'Selecione' }}
                options={[
                  { value: true, label: 'sim' },
                  { value: false, label: 'não' },
                ]}
              />
              <FormSelectFlex
                title="Ideias suicidas passageiras"
                defaultValue={{ value: false, label: 'Selecione' }}
                name="q2"
                options={[
                  { value: true, label: 'sim' },
                  { value: false, label: 'não' },
                ]}
              />
              <FormSelectFlex
                title="Ideias suicidas que causam perturbação"
                defaultValue={{ value: false, label: 'Selecione' }}
                name="q3"
                options={[
                  { value: true, label: 'sim' },
                  { value: false, label: 'não' },
                ]}
              />
              <FormSelectFlex
                title="Tem planejamento/ planos elaborados para acabar com sua vida"
                defaultValue={{ value: false, label: 'Selecione' }}
                name="q4"
                options={[
                  { value: true, label: 'sim' },
                  { value: false, label: 'não' },
                ]}
              />
              <FormSelectFlex
                title="Acesso a meios para pôr fim a sua própria vida"
                defaultValue={{ value: false, label: 'Selecione' }}
                name="q5"
                options={[
                  { value: true, label: 'sim' },
                  { value: false, label: 'não' },
                ]}
              />
              <FormSelectFlex
                title="Transtorno mental controlado"
                defaultValue={{ value: false, label: 'Selecione' }}
                name="q6"
                options={[
                  { value: true, label: 'sim' },
                  { value: false, label: 'não' },
                ]}
              />
              <FormSelectFlex
                title="Tolerância as mudanças da vida"
                defaultValue={{ value: false, label: 'Selecione' }}
                name="q7"
                options={[
                  { value: 'sim', label: 'sim' },
                  { value: 'não', label: 'não' },
                  { value: 'mínima', label: 'Tolerância mínima' },
                ]}
              />
              <FormCheckBox name="q8" label="Tolera frustações" value="" />
              <FormCheckBox name="q9" label="Impulsivo (a)" value="" />
              <FormCheckBox
                name="q10"
                label="Deseja e/ou busca tratamento em saúde mental"
                value=""
              />
              <FormCheckBox
                name="q11"
                label="Bom vínculo com os profissionais do serviço de saúde mental"
                value=""
              />
              <FormCheckBox
                name="q12"
                label="Boa adesão ao tratamento"
                value=""
              />
              <FormCheckBox name="q13" label="Possui rede de apoio" value="" />
              <FormCheckBox
                name="q14"
                label="Boa relação com as pessoas do seu convívio"
                value=""
              />
              <FormCheckBox
                name="q15"
                label="O apoio recebido é satisfatório"
                value=""
              />
              <FormCheckBox
                name="q16"
                label="Uso de álcool e/ou outras drogas"
                value=""
              />
              <FormCheckBox
                name="q17"
                label="Passou por algum tipo violência (psicológica, física, sexual e patrimonial)"
                value=""
              />
              <FormCheckBox
                name="q18"
                label="Acesso a meios para pôr fim a sua própria vida"
                value=""
              />
              <FormCheckBox
                name="q19"
                label="Apresenta sofrimento existencial (dor psíquica)"
                value=""
              />
              <FormCheckBox
                name="q20"
                label="Sintomas psicóticos agudos (alucinações e delírios)"
                value=""
              />
              <FormCheckBox
                name="q21"
                label="Tem conhecimento do seu diagnóstico"
                value=""
              />
              <FormCheckBox
                name="q22"
                label="Resistente ao tratamento"
                value=""
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

export default RiskAssessment;
