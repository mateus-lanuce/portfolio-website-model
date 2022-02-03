import React from 'react';
import placeholder from 'assets/placeholder.png';
import loadmore from 'assets/loadmore.png';
import portfolio1 from 'assets/portfolio1.png';
import portfolio2 from 'assets/portfolio2.png';

import { 
  Background,
  ChildEight,
  ChildFive,
  ChildFour,
  ChildOne,
  ChildSeven,
  ChildSix,
  ChildThree,
  ChildTwo,
  Design1,
  Design2,
  Grid,
  LoadMore,
  PlaceHolder,
  PortfolioMore,
  Section,
  PortfolioTitle
} from './styles';
import Title from 'components/Title';

const Portfolio = () => {
  return (
    <Section id='portfolio'>
      <Title value='portfolio' sideLeft={true} />

      <Background>
        <Design1 src={portfolio1} alt='Design'/>
        <Design2 src={portfolio2} alt='Design'/>
      </Background>

      <PortfolioTitle>
        <p>Nossos Trabalhos</p>
        <h2>Veja nosso super Portfolio :D</h2>
      </PortfolioTitle>

      <Grid>
        <ChildOne>
          <PlaceHolder src={placeholder} alt='placeholder' />
        </ChildOne>

        <ChildTwo>
          <PlaceHolder src={placeholder} alt='placeholder' />
        </ChildTwo>

        <ChildThree>
          <PlaceHolder src={placeholder} alt='placeholder' />
        </ChildThree>

        <ChildFour>
          <PlaceHolder src={placeholder} alt='placeholder' />
        </ChildFour>

        <ChildFive>
          <PlaceHolder src={placeholder} alt='placeholder' />
        </ChildFive>

        <ChildSix>
          <PlaceHolder src={placeholder} alt='placeholder' />
        </ChildSix>

        <ChildSeven>
          <PlaceHolder src={placeholder} alt='placeholder' />
        </ChildSeven>

        <ChildEight>
          <PlaceHolder src={placeholder} alt='placeholder' />
        </ChildEight>
      </Grid>

      <PortfolioMore>
        <span>Carregar Mais...</span>
        <LoadMore src={loadmore} alt='Load More' />
      </PortfolioMore>
    </Section>
  );
};

export default Portfolio;
