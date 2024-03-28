// src/composables/useFirebaseMessaging.js - Iteration 1 - A+
import { onMounted, ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Firebase configuration object
const firebaseConfig = {
  // Your Firebase configuration here (apiKey, authDomain, etc.)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function useFirebaseMessaging() {
  const deviceToken = ref(null);

  onMounted(async () => {
    const messaging = getMessaging(app);

    // Request permission and get token
    try {
      const currentToken = await getToken(messaging, { vapidKey: 'your-vapid-key-here' });
      if (currentToken) {
        deviceToken.value = currentToken;
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    } catch (error) {
      console.error('An error occurred while retrieving token. ', error);
    }

    // Handle incoming messages while app is open
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // Process your message as required
    });
  });

  return { token: deviceToken };
}
