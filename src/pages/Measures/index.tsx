import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Container, Content, FormBackgroud } from './styles';
import Header from '../../components/Header';

import lowMeasures from '../../assets/measures/low.json';
import mediumMeasures from '../../assets/measures/medium.json';
import highUpaMeasures from '../../assets/measures/high-upa.json';
import highCapsadMeasures from '../../assets/measures/high-capsad.json';

enum ClassificationsEnum {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  CAPSAD = 'CAPSAD',
}

interface MeasureData {
  title: string;
  color: string;
  measures: string[];
}

interface LocationState {
  classification: ClassificationsEnum;
}

const Measures: React.FC = () => {
  const location = useLocation<LocationState>();
  const clssification = ClassificationsEnum.HIGH as ClassificationsEnum; // location.state.classification;
  const [measuresData] = useState<MeasureData>(() => {
    switch (clssification) {
      case ClassificationsEnum.LOW:
        return lowMeasures;
      case ClassificationsEnum.MEDIUM:
        return mediumMeasures;
      case ClassificationsEnum.HIGH:
        return highUpaMeasures;
      case ClassificationsEnum.CAPSAD:
        return highCapsadMeasures;
      default:
        return lowMeasures;
    }
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header
        title="Medidas terapêuticas"
        subtitle="Estas são as recomendações para o paciente"
        hideSteps
      />
      <Container>
        <Content>
          <FormBackgroud color={measuresData.color}>
            <h1>{measuresData.title}</h1>
            {measuresData &&
              measuresData.measures.map(measure => (
                <p key={measure}>{`- ${measure}`}</p>
              ))}
          </FormBackgroud>
        </Content>
      </Container>
    </>
  );
};

export default Measures;
