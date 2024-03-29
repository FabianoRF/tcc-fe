import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useHistory } from 'react-router-dom';
import {
  Container,
  ContainerFlex,
  Content,
  FormBackgroud,
  FormDivisor,
} from './styles';
import FormInput from '../../components/Form/FormInput';
import FormButton from '../../components/Form/FormButton';
import { useToast } from '../../hooks/toast';
import FormSelect from '../../components/Form/FormSelect';
import Header from '../../components/Header';
import { useFormData } from '../../hooks/formData';

interface SocioDemograficFormData {
  name: string;
  email: string;
  password: string;
}

const SocioDemographicForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { setFormData } = useFormData();
  const history = useHistory();

  const handleSubmit = useCallback(
    (data: any) => {
      console.log('data ', data);
      setFormData(data);

      history.push('clinic-form');
    },
    [history, setFormData],
  );

  return (
    <>
      <Header
        title="Caracterização sociodemográfica"
        subtitle="Por favor preecha o formulário abaixo"
      />
      <Container>
        <Content>
          <FormBackgroud>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormInput
                title="Nome da carteira de indentidade"
                name="nomeRG"
                placeholder=""
              />
              <FormInput title="Nome social" name="nomeSocial" placeholder="" />
              <FormInput title="Nome da mãe" name="nomeMae" placeholder="" />
              <FormInput title="Cartão SUS" name="cartaoSUS" placeholder="" />

              <ContainerFlex>
                <FormInput
                  title="Procedência"
                  name="procedencia"
                  placeholder=""
                />
                <FormInput
                  title="Naturalidade"
                  name="naturalidade"
                  placeholder=""
                />
              </ContainerFlex>

              <ContainerFlex>
                <FormInput title="Endereço" name="endereco" placeholder="" />
                <FormInput title="Tel" name="telefone" placeholder="" />
              </ContainerFlex>

              <FormInput
                title="Data de nascimento"
                name="dataNasc"
                placeholder=""
                type="date"
              />

              <FormDivisor />

              <ContainerFlex>
                <FormSelect
                  title="Gênero"
                  name="genero"
                  options={[
                    { value: 'Masculino', label: 'Masculino' },
                    { value: 'Feminino', label: 'Feminino' },
                  ]}
                />
                <FormSelect
                  title="Orientação sexual"
                  name="orientacaoSexual"
                  options={[
                    { value: 'Heterossexual', label: 'Heterossexual' },
                    { value: 'Homossexual', label: 'Homossexual' },
                    { value: 'Bissexual', label: 'Bissexual' },
                  ]}
                />
              </ContainerFlex>
              <FormSelect
                title="Estado civil"
                name="estadoCivil"
                options={[
                  { value: 'Casado', label: 'Casado' },
                  { value: 'Amasiado', label: 'Amasiado' },
                  { value: 'Solteiro', label: 'Solteiro' },
                  { value: 'Viúvo', label: 'Viúvo' },
                  { value: 'Divorciado', label: 'Divorciado' },
                ]}
              />
              <FormDivisor />

              <ContainerFlex>
                <FormSelect
                  title="Possui filhos?"
                  name="possuiFilhos"
                  options={[
                    { value: true, label: 'Sim' },
                    { value: false, label: 'Não' },
                  ]}
                />
                <FormInput title="Quantos?" name="qtdFilhos" placeholder="" />
              </ContainerFlex>
              <ContainerFlex>
                <FormInput
                  title="Com quem mora?"
                  name="comQuemMora"
                  placeholder=""
                />
                <FormSelect
                  title="Tipo de moradia"
                  name="tipoMoradia"
                  options={[
                    { value: 'Própria', label: 'Própria' },
                    { value: 'Alugada', label: 'Alugada' },
                    { value: 'Cedida', label: 'Cedida' },
                    { value: 'Situação de rua', label: 'Situação de rua' },
                  ]}
                />
              </ContainerFlex>
              <ContainerFlex>
                <FormSelect
                  title="É alfabetizado?"
                  name="alfabetizado"
                  options={[
                    { value: true, label: 'Sim' },
                    { value: false, label: 'Não' },
                  ]}
                />
                <FormSelect
                  title="Escolaridade"
                  name="escolaridade"
                  options={[
                    { value: 'Nunca Estudou', label: 'Nunca Estudou' },
                    {
                      value: 'Fundamental incompleto',
                      label: 'Fundamental incompleto',
                    },
                    {
                      value: 'Fundamental Completo',
                      label: 'Fundamental Completo',
                    },
                    {
                      value: 'Médio incompleto',
                      label: 'Médio incompleto',
                    },
                    {
                      value: 'Médio Completo',
                      label: 'Médio Completo',
                    },
                    {
                      value: 'Superior incompleto',
                      label: 'Superior incompleto',
                    },
                    {
                      value: 'Superior completo',
                      label: 'Superior completo',
                    },
                    {
                      value: 'Pós Graduação incompleta',
                      label: 'Pós Graduação incompleta',
                    },
                    {
                      value: 'Pós Graduação Completa',
                      label: 'Pós Graduação Completa',
                    },
                    {
                      value: 'Frequentou APAE',
                      label: 'Frequentou APAE',
                    },
                  ]}
                />
              </ContainerFlex>
              <FormInput
                title="Se fez faculdade ou curso técnico, qual curso? "
                name="qualCurso"
                placeholder=""
              />

              <FormDivisor />

              <FormSelect
                title="Situação laboral"
                name="situacaoLaboral"
                options={[
                  {
                    value: 'Assalariado com carteira assinada',
                    label: 'Assalariado com carteira assinada',
                  },
                  {
                    value: 'Assalariado sem carteira assinada',
                    label: 'Assalariado sem carteira assinada',
                  },
                  {
                    value: 'Autônomo',
                    label: 'Autônomo',
                  },
                  {
                    value: 'Aposentado/Pensionista',
                    label: 'Aposentado/Pensionista',
                  },
                  {
                    value: 'Desempregado',
                    label: 'Desempregado',
                  },
                  {
                    value: 'Não trabalha',
                    label: 'Não trabalha',
                  },
                ]}
              />

              <ContainerFlex>
                <FormSelect
                  title="Cor/Etinia"
                  name="corEtinia"
                  options={[
                    { value: 'Branco', label: 'Branco' },
                    { value: 'Preto', label: 'Preto' },
                    { value: 'Pardo', label: 'Pardo' },
                    { value: 'Indígena', label: 'Indígena' },
                    { value: 'Asiático', label: 'Branco' },
                  ]}
                />
                <FormSelect
                  title="Religião ou espiritualidade?"
                  name="religiao"
                  options={[
                    { value: 'Sim', label: 'Sim' },
                    { value: 'Não', label: 'Não' },
                  ]}
                />
              </ContainerFlex>

              <FormInput
                title="Se possui religião descreva: frequenta cultos, possui grupos de apoio, não pratica. "
                name="descricaoReligiao"
                placeholder=""
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

export default SocioDemographicForm;
