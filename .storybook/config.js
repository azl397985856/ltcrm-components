import { configure } from '@kadira/storybook';
import '../style/layout.css';

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
