<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Send Notification</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">User ID</ion-label>
        <ion-input type="number" v-model="userId" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="title" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Body</ion-label>
        <ion-textarea v-model="body" required></ion-textarea>
      </ion-item>
      <ion-button expand="block" @click="sendNotification">Send Notification</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
import { NotificationService } from '@/services/NotificationService';

const userId = ref('');
const title = ref('');
const body = ref('');

const sendNotification = async () => {
  if (title.value && body.value && userId.value) {
    try {
      await NotificationService.sendNotification(title.value, body.value, Number(userId.value));
      alert('Notification sent successfully.');
      // Reset form
      title.value = '';
      body.value = '';
      userId.value = '';
    } catch (error) {
      alert(`Failed to send notification: ${error}`);
    }
  } else {
    alert('Please fill in all fields.');
  }
};
</script>
