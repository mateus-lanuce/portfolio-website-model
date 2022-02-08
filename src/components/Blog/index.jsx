import React from 'react';
import placeholder from 'assets/placeholder.png';
import play from 'assets/play.png';

import { Section } from './styles';

const Blog = () => {

  const blogsData = [
    {
      title: 'Viagem de Verão na Praia',
      type: 'Aventuras',
      description: 'Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Suco de cevadiss deixa as pessoas mais interessantis',
    },
    {
      title: 'Céu com poucas Nuvens',
      type: 'Pessoal',
      description: 'Paisis, filhis, espiritis santis.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.',
    },
    {
      title: 'Show online ao vivo',
      type: 'Musíca',
      description: 'Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi.In elementis mé pra quem é amistosis quis leo.',
    },
  ];

  return (
    <Section id='blog'>
      <h1>Blog</h1>
    </Section>
  );
};

export default Blog;
