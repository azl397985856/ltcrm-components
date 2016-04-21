import { configure } from '@kadira/storybook';
import '../style/layout.css';

function loadStories() {
  require('../stories/');
}

configure(loadStories, module);
