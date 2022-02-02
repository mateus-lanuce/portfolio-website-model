import React, { useState } from 'react';
import logo from 'assets/logo.png';
import { GiHamBurgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import { 
 Active,
 Brand,
 BrandContainer,
 BrandImage,
 Li,
 Link,
 Links,
 Nav,
 Toggle,
 Ul,
} from './styles';

const Navbar = () => {

  const [ isNavOpen, setIsNavOpen ] = useState(false);

  return (
    <Nav>
      <BrandContainer>
        <Brand href='#'>
          <BrandImage src={logo} alt='Brand Image' />
        </Brand>
        <Toggle></Toggle>
      </BrandContainer>

      <Links>
        <Ul>
          <Li>
            <Active href='#home'>Home</Active>
          </Li>

          <Li>
            <Link href='#services'>Serviços</Link>
          </Li>

          <Li>
            <Link href='#portfolio'>Portfolio</Link>
          </Li>

          <Li>
            <Link href='#blog'>Blog</Link>
          </Li>

          <Li>
            <Link href='#skills'>Skills</Link>
          </Li>

          <Li>
            <Link href='#contact'>Contato</Link>
          </Li>
        </Ul>
      </Links>
    </Nav>
  );
};

export default Navbar;
