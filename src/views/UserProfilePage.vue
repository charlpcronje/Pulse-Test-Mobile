<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>User Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label>User ID:</ion-label>
          <ion-text>{{ userProfile.userId }}</ion-text>
        </ion-item>
        <ion-item>
          <ion-label>Username:</ion-label>
          <ion-text>{{ userProfile.username }}</ion-text>
        </ion-item>
        <ion-item>
          <ion-label>Email:</ion-label>
          <ion-text>{{ userProfile.email }}</ion-text>
        </ion-item>
        <!-- Extend with more user details as needed -->
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const userProfile = ref({
  userId: '',
  username: '',
  email: '',
  // Initialize with empty values
});

const fetchUserProfile = async () => {
  try {
    // Replace with your actual API call
    const response = await axios.get('https://your-api-url.com/api/user/profile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    userProfile.value = response.data; // Assuming the API returns data in this structure
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    // Handle error, possibly redirect to login or show a message
  }
};

onMounted(() => {
  fetchUserProfile();
});
</script>
