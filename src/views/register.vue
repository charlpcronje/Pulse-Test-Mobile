<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="ion-padding">
        <ion-item>
          <ion-label position="floating">Username</ion-label>
          <ion-input v-model="username" type="text"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="password" type="password"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Device Token</ion-label>
          <ion-input v-model="deviceToken" readonly></ion-input>
        </ion-item>
        <ion-button expand="block" @click="register">Register</ion-button>
        <ion-button fill="clear" @click="goToLogin">Already have an account? Login</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { useIonRouter } from '@ionic/vue';
import { PushNotifications } from '@capacitor/push-notifications';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');
const deviceToken = ref('');
const router = useIonRouter();

onMounted(async () => {
  if ('PushNotifications' in window) {
    const status = await PushNotifications.requestPermissions();
    if (status.receive === 'granted') {
      PushNotifications.register();
      PushNotifications.addListener('registration',
        (token) => {
          deviceToken.value = token.value;
        }
      );
    }
  }
});

const register = async () => {
  try {
    await axios.post('https://your-api-domain.com/api/user/register', {
      username: username.value,
      email: email.value,
      password: password.value,
      device_id: deviceToken.value
    });
    // Navigate to another route upon successful registration, for example, to the login page
    router.push('/login');
    console.log('Registration successful');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

const goToLogin = () => {
  router.push('/login'); // Adjust according to your app's routing
};
</script>
