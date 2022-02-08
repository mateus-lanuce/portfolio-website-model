import React from 'react';
import milestone1 from 'assets/milestone1.png';
import milestone2 from 'assets/milestone2.png';
import milestone3 from 'assets/milestone3.png';
import milestoneBackground from 'assets/milestone-background.png';

import { Backgroud, Milestone, MilestoneItem, Section } from './styles';

const Milestones = () => {

  const milestone = [
    {
      image: milestone1,
      data : 'Clientes Satisfeitos',
      amount: '407',
    },
    {
      image: milestone2,
      data : 'Dados Brutos',
      amount: '10M',
    },
    {
      image: milestone3,
      data : 'Recomendações',
      amount: '269',
    },
  ]

  return (
    <Section id='milestones'>
      <Backgroud src={milestoneBackground} alt='milestones' />

      <Milestone>
        {
          milestone.map(({ image, data, amount }, i) => {
            return (
              <MilestoneItem key={i}>
                <p>{ amount }</p>
                <span>{ data }</span>
                <img src={image} alt="milestone" />

              </MilestoneItem>
            );
          })
        }
      </Milestone>
    </Section>
  );
};

export default Milestones;
