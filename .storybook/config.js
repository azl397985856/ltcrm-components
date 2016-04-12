import { configure } from '@kadira/storybook';
import '../css/index.css';

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
