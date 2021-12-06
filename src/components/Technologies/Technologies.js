import React from 'react';
import {
  DiCode,
  DiFirebase,
  DiJavascript,
  DiMootools,
  DiReact,
  DiZend,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked hard to develop mastery in a variety of technologies (both
      frontend and backend) and am eager to continue adding to the list! I
      prioritize creating responsive, intuitive, and accessible websites.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            HTML, CSS, Javascript, React.js, Redux, Bootstrap, MaterialUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Node.js, Express.js, PostgresSQL, SQLite, MongoDB, Postman, Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size='3rem' />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Git, GitHub, VScode, Trello, Slack, and more
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
