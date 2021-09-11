import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqData.title} mainImage={faqData.image} />
    <p>{faqData.description}</p>
  </Container>
);

export default Faq;
