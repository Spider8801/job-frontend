import { configure } from '@storybook/react';
import '../src/index.scss';

const req = require.context('../src/stories', true, /.stories.tsx$/);
const loadStories = () => {
	req.keys().forEach(req);
};

configure(loadStories, module);
