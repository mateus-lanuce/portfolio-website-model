import React from 'react';
import home from "assets/home.png";
import play from "assets/play.png"

import { Col, ColTitle, Content, Grid, HomeContainer, Info, Play, Section, SubTitle, Title } from './styles';
import Navbar from 'components/Navbar';

const Home = () => {
  return (
    <Section id='home' home={home}>
      <Navbar />

      <HomeContainer>
        <Content>
          <Title>Digital Crafters</Title>
          <SubTitle>
          Mussum Ipsum, cacilds vidis litro abertis. 
          Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
          Interagi no mé, cursus quis, vehicula ac nisi.
          </SubTitle>
          <Play src={play} alt='Play Button' />
        </Content>

        <Info>
          <Grid>
            <Col>
              <ColTitle>Agência</ColTitle>
              <SubTitle>Digital Crafters</SubTitle>
            </Col>
            <Col>
              <ColTitle>Email</ColTitle>
              <SubTitle>email@gmail.com</SubTitle>
            </Col>
            <Col>
              <ColTitle>Telefone</ColTitle>
              <SubTitle>+55 88 0000-0000</SubTitle>
            </Col>
            <Col>
              <ColTitle>Endereço</ColTitle>
              <SubTitle>Icapui - Ceará - Brasil</SubTitle>
            </Col>
            <Col>
              <ColTitle>Serviços</ColTitle>
              <SubTitle>Desenvolvimento web</SubTitle>
            </Col>
            <Col>
              <ColTitle>Horas de Trabalho</ColTitle>
              <SubTitle>Qualquer Momento</SubTitle>
            </Col>
          </Grid>
        </Info>
      </HomeContainer>
    </Section>
  );
};

export default Home;
