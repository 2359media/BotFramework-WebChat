export { App, AppProps } from './App';
export { Chat, ChatProps, FormatOptions } from './Chat';
export * from 'botframework-directlinejs';
export { queryParams } from './Attachment';
export { SpeechOptions } from './SpeechOptions'
export { Speech } from './SpeechModule'
// below are shims for compatibility with old browsers (IE 10 being the main culprit)
import 'core-js/modules/es6.string.starts-with';
import 'core-js/modules/es6.array.find';
import 'core-js/modules/es6.array.find-index';
import 'core-js/modules/es6.array.map';
import 'core-js/modules/es6.object.assign';
// import 'core-js/modules/es6.promise'; // this is having problems with IE11
require('es6-promise').polyfill();