// main.ts - Iteration 1 - A+
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

const initializePushNotifications = async () => {
  if (Capacitor.isNativePlatform()) {
    // Request permission for push notifications
    await PushNotifications.requestPermissions();

    // Register with the push notifications service
    await PushNotifications.register();

    // Event triggered on new token
    PushNotifications.addListener('registration', 
      (token) => console.log('Push registration success, token:', token.value)
    );

    // Event triggered on registration error
    PushNotifications.addListener('registrationError', 
      (error) => console.error('Error on push notifications registration:', error)
    );

    // Event triggered on receiving a push notification
    PushNotifications.addListener('pushNotificationReceived', 
      (notification) => console.log('Push received:', notification)
    );

    // Event triggered on performing an action on a push notification
    PushNotifications.addListener('pushNotificationActionPerformed', 
      (notification) => console.log('Push action performed:', notification)
    );
  }
};

// Ensuring router is ready before mounting the app and initializing push notifications
router.isReady().then(() => {
  app.mount('#app');
  initializePushNotifications(); // Initialize push notifications
});
