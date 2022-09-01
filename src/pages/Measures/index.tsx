import React, { useEffect, useState } from 'react';

import { Container, Content, FormBackgroud } from './styles';
import Header from '../../components/Header';

import lowMeasures from '../../assets/measures/low.json';

interface MeasureData {
  title: string;
  color: string;
  measures: string[];
}

const Measures: React.FC = () => {
  const [measuresData, setMeasuresData] = useState<MeasureData>(
    {} as MeasureData, // setar aqui a medida
  );

  useEffect(() => {
    window.scroll(0, 0);

    setMeasuresData(lowMeasures);

    console.log('Measures ', measuresData);
    console.log('Measures sdfsdf', measuresData.measures);
  }, [measuresData]);

  return (
    <>
      <Header
        title="Medidas terapêuticas"
        subtitle="Estas são as recomendações para o paciente"
      />
      <Container>
        <Content>
          <h1>{measuresData.title}</h1>
          {/* {measuresData &&
            measuresData.measures.map(measure => <p>{measure}</p>)} */}
          <h1>teste</h1>
        </Content>
      </Container>
    </>
  );
};

export default Measures;
