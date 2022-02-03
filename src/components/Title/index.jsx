import React from 'react';

import { Container, TitleContent } from './styles';

const Title = ({ value, sideLeft = false }) => {
  return (
    <Container sideLeft={sideLeft}>
      <TitleContent>{ value }</TitleContent>
    </Container>
  );
};

export default Title;
