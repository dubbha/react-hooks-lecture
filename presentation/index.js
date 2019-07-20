// Import React
import React from 'react';

// Import emotion to override styles
// https://github.com/FormidableLabs/spectacle#faq
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide as SpectacleSlide,
  Text,
  CodePane
} from 'spectacle';

// Import custom theme instead the default one
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from '../assets/theme';

// Break out of the 1000x700 box
// https://github.com/FormidableLabs/spectacle/issues/500
const Slide = styled(SpectacleSlide) `
  :first-child {
    max-width: 90%;
    max-height: 90%;
  }
`;

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

const src = {
  hello: require('../assets/code/hello.jsx'),
  hello2: require('../assets/code/hello2.jsx'),
  hello3: require('../assets/code/hello3.src'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        showFullscreenControl
      >
        <Slide bgColor="primary">
          <Heading size={6} fit caps lineHeight={1} textColor="secondary">
            Heading
          </Heading>
          <CodePane
            lang="jsx"
            source={src.hello}
          />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Heading
          </Heading>
          <CodePane
            contentEditable
            theme="light"
            lang="jsx"
            source={src.hello2}
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem bulletStyle="star">Item 1</ListItem>
            <ListItem bulletStyle="cross">Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
