import { storiesOf } from '@storybook/react';
import React from 'react';
import AppNavbar from '../components/navnar';

const stories = storiesOf('AppNavbar', module);
stories.add('default', () => <AppNavbar />);
