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
  Slide,
  Text,
  CodePane
} from 'spectacle';

// Import custom theme instead the default one
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from '../assets/theme';

const images = {
  useYourBrain: require('../assets/useYourBrain.webp'),
  marvel: require('../assets/marvel.jpg'),
  karloff: require('../assets/karloff.jpg'),
  hooks: require('../assets/hooks.jpg'),
  hooksBlurred: require('../assets/hooksBlurred.jpg'),
  //
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

const sources = {
  hello: require('../assets/code/hello.jsx'),
  hello2: require('../assets/code/hello2.jsx')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: '#c11b01',
    quaternary: '#cecece',
    brainDark: '#c11b01',
    brainLight: '#f08920',
    blood: '#bb0a1e',
    bronze: '#cd7f32',
    asphalt: '#222f38',
    fire: '#c2261f',
    gray: '#1F2022'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

// Break out of the 1000x700 box
// https://github.com/FormidableLabs/spectacle/issues/500
const FullScreenSlide = styled(Slide) `
  :first-child {
    max-width: 100%;
    max-height: 100%;
    padding: ${(props) => props.padding || 0};
  }
`;

const FullScreenImage = ({
  src,
  align = 'center',
  style = {}
}) => {
  let margin;
  switch (align) {
    case 'left':
      margin = '0 auto 0 0';
      break;
    case 'right':
      margin = '0 0 0 auto';
      break;
    case 'center':
    default:
      margin = '0 auto';
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        ...style
      }}
    >
      <Image
        src={src}
        style={{
          height: '100%',
          margin
        }}
      />
    </div>
  );
};

const CornerText = ({ top, right, bottom, left, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        right,
        bottom,
        left,
      }}
    >
      <Text
        caps
        textSize={'3em'}
        style={{
          textAlign: 'left',
        }}
      >
        {children}
      </Text>
    </div>
  );
};

const styles = {
  brain: {
    color: theme.screen.colors.brainDark,
  },
  brain3D: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px,
      ${theme.screen.colors.brainLight} 0px 4px 0px`
  },
  brain3DLight: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 2px 0px`
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        showFullscreenControl
      >
        <FullScreenSlide padding="1.2em">
          <FullScreenImage src={images.useYourBrain} />
        </FullScreenSlide>
        <Slide bgImage={images.marvel} />
        {/* <FullScreenImage src={images.marvel} /> */}
        <Slide bgImage={images.karloff} />
        {/* <FullScreenImage src={images.karloff} /> */}
        <FullScreenSlide bgImage={images.hooks}>
          <CornerText top={130} left={77}>
            <Heading caps size={1} style={styles.brain3D}>React Hooks</Heading>
          </CornerText>
          <CornerText right={77} bottom={40}>
            <Heading size={5} textAlign="right" textColor="quaternary">performed by</Heading>
            <Heading size={5} textAlign="right" textColor="quaternary">
              Oleksiy <span style={styles.brain3DLight}>Лёша</span> Dubovyk
            </Heading>
          </CornerText>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="1.2em">
          <Heading size={3} caps lineHeight={1} textColor="tertiary">
            Heading
          </Heading>
          <CodePane
            lang="jsx"
            source={sources.hello}
            theme="light"
            height="60vh"
            style={{ overflowY: 'scroll' }}
          />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="1.2em">
          <Heading size={3} caps lineHeight={1} textColor="tertiary">
            Heading
          </Heading>
          <CodePane
            lang="jsx"
            source={sources.hello2}
            theme="dark"
          />
        </FullScreenSlide>
        <Slide bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Heading
          </Heading>
          <CodePane
            contentEditable
            theme="light"
            lang="jsx"
            source={sources.hello2}
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
        <Slide bgImage={images.hooksBlurred}>
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" bgImage={images.hooksBlurred}>
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
