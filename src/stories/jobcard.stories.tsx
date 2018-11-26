import { storiesOf } from '@storybook/react';
import React from 'react';
import JobCard from '../components/jobcard';

const stories = storiesOf('JobCard', module);
stories.add('default', () => <JobCard />);
