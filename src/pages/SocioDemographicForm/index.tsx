import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import FormSteps from '../../components/Form/FormSteps';

import {
  Container,
  ContainerButton,
  ContainerFlex,
  Content,
  FormBackgroud,
  FormDivisor,
} from './styles';
import FormInput from '../../components/Form/FormInput';
import FormButton from '../../components/Form/FormButton';

interface SocioDemograficFormData {
  name: string;
  email: string;
  password: string;
}

const SocioDemographicForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const abc = 'dsfasdf';

  const handleSubmit = useCallback((data: any) => {
    console.log('data ', data);
  }, []);

  return (
    <Container>
      <h1>Logo/Arte a definir</h1>

      <Content>
        <div>
          <h1>Caracterização sociodemográfica</h1>
          <p>Por favor preecha o formulário abaixo</p>
        </div>

        <FormSteps />

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
            />

            <FormDivisor />

            <ContainerFlex>
              <FormInput title="Gênero" name="possuiFilhos" placeholder="" />
              <FormInput
                title="Orientação sexual"
                name="telefone"
                placeholder=""
              />
            </ContainerFlex>
            <FormInput title="Estado civil" name="telefone" placeholder="" />

            <FormDivisor />

            <ContainerFlex>
              <FormInput
                title="Possui filhos?"
                name="possuiFilhos"
                placeholder=""
              />
              <FormInput title="Quantos?" name="telefone" placeholder="" />
            </ContainerFlex>
            <ContainerFlex>
              <FormInput
                title="Com quem mora?"
                name="endereco"
                placeholder=""
              />
              <FormInput
                title="Tipo de moradia"
                name="telefone"
                placeholder=""
              />
            </ContainerFlex>
            <ContainerFlex>
              <FormInput
                title="É alfabetizado?"
                name="endereco"
                placeholder=""
              />
              <FormInput title="Escolaridade" name="telefone" placeholder="" />
            </ContainerFlex>
            <FormInput
              title="Se fez faculdade ou curso técnico, qual curso? "
              name="endereco"
              placeholder=""
            />

            <FormDivisor />

            <ContainerFlex>
              <FormInput
                title="Situação laboral"
                name="endereco"
                placeholder=""
              />
              <FormInput
                title="Tipo de moradia"
                name="telefone"
                placeholder=""
              />
            </ContainerFlex>
            <ContainerFlex>
              <FormInput
                title="É alfabetizado?"
                name="endereco"
                placeholder=""
              />
              <FormInput title="Escolaridade" name="telefone" placeholder="" />
            </ContainerFlex>

            <FormInput
              title="Se possui religião descreva: frequenta cultos, possui grupos de apoio, não pratica. "
              name="endereco"
              placeholder=""
            />

            <ContainerButton>
              <div>
                <FormButton type="submit">Próximo Passo</FormButton>
              </div>
            </ContainerButton>
          </Form>
        </FormBackgroud>
      </Content>
    </Container>
  );
};

export default SocioDemographicForm;
