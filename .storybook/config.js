import { configure, setAddon, addDecorator } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import Vue from 'vue';
import Carvue from '../components';

function codeHighlight (storyFn) {
  var options = storyFn();
  return {
    mounted () {
      if (window.hljs) window.hljs.highlightBlock(document.querySelector("code"));
    },
    ...options,
    render: function (h) {
      return h(options)
    }
  };
};

addDecorator(codeHighlight);

addDecorator(VueInfoAddon);

addDecorator(withKnobs);

Vue.config.productionTip = false;

Vue.use(Carvue);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Carvue',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display left panel that shows a list of stories
   * @type {Boolean}
   */
  showLeftPanel: true,
  /**
   * display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showDownPanel: false,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  downPanelInRight: false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: /\//,

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

configure(loadStories, module)
