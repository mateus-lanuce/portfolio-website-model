import React from 'react';
import service1 from "assets/service1.png";
import service2 from "assets/service2.png";
import service3 from "assets/service3.png";
import play from "assets/play.png";

import { Image, Section, Service, ServiceImage, ServicesContainer, ServiceSubTitle, ServiceTitle } from './styles';
import Title from 'components/Title';

const Services = () => {

  const data = [
    {
      type: 'Design',
      text: 'é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.',
      image: service1,
    },
    {
      type: 'Code',
      text: 'Mussum Ipsum Sapien in monti palavris qui num significa nadis i pareci latim.',
      image: service2,
    },
    {
      type: 'Suporte',
      text: 'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
      image: service3,
    },
  ];

  return (
    <Section id="services">
      <Title value="Serviços" />

      <ServicesContainer>
        {
          data.map(({ type, text, image }, index) => (
            <Service key={index} index={index}>
              <ServiceImage src={image} alt={type} />

              <ServiceTitle index={index}>
                <span>0{ index + 1 } </span>
                <h2> { type } </h2>
              </ServiceTitle>

              <ServiceSubTitle index={index}>
                { text }
              </ServiceSubTitle>
              <Image src={play} alt='play button' />
            </Service>
          ))
        }

      </ServicesContainer>
    </Section>
  );
};

export default Services;
