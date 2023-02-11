
import firebase from 'firebase';
import { initializeFirebase } from './push-notification';
ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase();
window.addEventListener('load', () => {
  registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}

