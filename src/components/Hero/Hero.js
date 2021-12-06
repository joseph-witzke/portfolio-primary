import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  // onClick={() => (window.location = 'https://google.com')}
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, my name is Joe.
      </SectionTitle>
      <SectionText>
        I'm a full-stack developer with a background in higher education,
        life-long learner, and avid creator.
      </SectionText>
      <Button>
        <a href='#about'>Learn More</a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
