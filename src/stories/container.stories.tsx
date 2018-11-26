import { storiesOf } from '@storybook/react';
import React from 'react';
import Container from '../components/container';

const stories = storiesOf('Container', module);
stories.add('default', () => <Container>hello world</Container>);
