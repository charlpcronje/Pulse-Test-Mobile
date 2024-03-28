// src/services/NotificationService.ts - Iteration 2 - A+
import axios from 'axios';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

const API_URL = 'https://pulse.test.fgx.webally.co.za/api/notification';

export class NotificationService {
    static async getDeviceToken() {
        if (Capacitor.isNativePlatform()) {
            await PushNotifications.register();
            return new Promise((resolve) => {
                PushNotifications.addListener('registration', (token) => {
                    resolve(token.value);
                });
            });
        }
        return null;
    }

    static async sendDeviceToken(deviceToken: string | null) {
        if (!deviceToken) return;
        const token = localStorage.getItem('token');

        await axios.post(`${API_URL}/device_token`, { device_token: deviceToken }, {
            headers: { Authorization: `Bearer ${token}` },
        });

    }

    static async sendNotification(title: string, body: string, userId: number) {
        const token = localStorage.getItem('token');

        await axios.post(`${API_URL}/send_notification`, {
            title,
            body,
            user_id: userId // Adding the user_id to the payload
        }, {
            headers: { Authorization: `Bearer ${token}` },
        });
    }

}
