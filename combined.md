# Test API

## File: .eslintrc.cjs
```cjs
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  }
}

```

## File: capacitor.config.ts
```ts
// capacitor.config.ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Push Test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  }
};

export default config;

```

## File: cypress.config.ts
```ts
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'tests/e2e/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
    videosFolder: 'tests/e2e/videos',
    screenshotsFolder: 'tests/e2e/screenshots',
    baseUrl: 'http://localhost:5173',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Ionic App</title>

    <base href="/" />

    <meta name="color-scheme" content="light dark" />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />

    <link rel="shortcut icon" type="image/png" href="/favicon.png" />

    <!-- add to homescreen for ios -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Ionic App" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </head>

  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>

</html>


```

## File: ionic.config.json
```json
{
  "name": "Push Test",
  "integrations": {
    "capacitor": {}
  },
  "type": "vue-vite",
  "id": "0763f359"
}
```

## File: package.json
```json
{
  "name": "push-test",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "test:e2e": "cypress run",
    "test:unit": "vitest",
    "lint": "eslint ."
  },
  "dependencies": {
    "@capacitor/android": "^5.7.4",
    "@capacitor/app": "5.0.7",
    "@capacitor/core": "^5.7.4",
    "@capacitor/haptics": "5.0.7",
    "@capacitor/keyboard": "5.0.8",
    "@capacitor/push-notifications": "^5.1.1",
    "@capacitor/status-bar": "5.0.7",
    "@ionic/vue": "^7.0.0",
    "@ionic/vue-router": "^7.0.0",
    "axios": "^1.6.8",
    "ionicons": "^7.0.0",
    "vue": "^3.3.0",
    "vue-router": "^4.2.0"
  },
  "devDependencies": {
    "@capacitor/cli": "5.7.4",
    "@vitejs/plugin-legacy": "^5.0.0",
    "@vitejs/plugin-vue": "^4.0.0",
    "@vue/eslint-config-typescript": "^12.0.0",
    "@vue/test-utils": "^2.3.0",
    "cypress": "^13.5.0",
    "eslint": "^8.35.0",
    "eslint-plugin-vue": "^9.9.0",
    "jsdom": "^22.1.0",
    "terser": "^5.4.0",
    "typescript": "^5.1.6",
    "vite": "^5.0.0",
    "vitest": "^0.34.6",
    "vue-tsc": "^1.0.24"
  },
  "description": "An Ionic project"
}

```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "noEmit": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

```

## File: vite.config.ts
```ts
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})

```

## File: tree.md
```md
- **push-test/**
    - [.eslintrc.cjs](.eslintrc.cjs)
    - [capacitor.config.ts](capacitor.config.ts)
    - [cypress.config.ts](cypress.config.ts)
    - [index.html](index.html)
    - [ionic.config.json](ionic.config.json)
    - [package.json](package.json)
    - [tsconfig.json](tsconfig.json)
    - [tsconfig.node.json](tsconfig.node.json)
    - [vite.config.ts](vite.config.ts)
    - [package-lock.json](package-lock.json)
    - [tree.md](tree.md)
    - **public/**
    - **resources/**
    - **src/**
        - [App.vue](src/App.vue)
        - [main.ts](src/main.ts)
        - [vite-env.d.ts](src/vite-env.d.ts)
        - **components/**
            - [ExploreContainer.vue](src/components/ExploreContainer.vue)
        - **router/**
            - [index.ts](src/router/index.ts)
        - **theme/**
            - [variables.css](src/theme/variables.css)
        - **views/**
            - [Tab1Page.vue](src/views/Tab1Page.vue)
            - [Tab2Page.vue](src/views/Tab2Page.vue)
            - [Tab3Page.vue](src/views/Tab3Page.vue)
            - [TabsPage.vue](src/views/TabsPage.vue)
            - [register.vue](src/views/register.vue)
            - [login.vue](src/views/login.vue)
            - [send_notification.vue](src/views/send_notification.vue)
        - **services/**
            - [auth.service.ts](src/services/auth.service.ts)
            - [notification.service.ts](src/services/notification.service.ts)
    - **dist/**
        - [index.html](dist/index.html)
        - **assets/**
            - [index-BxC1xhb6.css](dist/assets/index-BxC1xhb6.css)
            - [ExploreContainer-C46RAOR_.css](dist/assets/ExploreContainer-C46RAOR_.css)
```

## File: src/App.vue
```vue
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

```

## File: src/main.ts
```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
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
  
router.isReady().then(() => {
  app.mount('#app');
});
```

## File: src/vite-env.d.ts
```ts
/// <reference types="vite/client" />

```

## File: src/components/ExploreContainer.vue
```vue
<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

```

## File: src/router/index.ts
```ts
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

```

## File: src/theme/variables.css
```css
/* Ionic Variables and Theming. For more info, please see:
http://ionicframework.com/docs/theming/ */

/** Ionic CSS Variables **/
:root {
  /** primary **/
  --ion-color-primary: #2dd36f;
  --ion-color-primary-rgb: 45, 211, 111;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #28ba62;
  --ion-color-primary-tint: #42d77d;

  /** secondary **/
  --ion-color-secondary: #3dc2ff;
  --ion-color-secondary-rgb: 61, 194, 255;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #36abe0;
  --ion-color-secondary-tint: #50c8ff;

  /** tertiary **/
  --ion-color-tertiary: #5260ff;
  --ion-color-tertiary-rgb: 82, 96, 255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255, 255, 255;
  --ion-color-tertiary-shade: #4854e0;
  --ion-color-tertiary-tint: #6370ff;

  /** success **/
  --ion-color-success: #2dd36f;
  --ion-color-success-rgb: 45, 211, 111;
  --ion-color-success-contrast: #ffffff;
  --ion-color-success-contrast-rgb: 255, 255, 255;
  --ion-color-success-shade: #28ba62;
  --ion-color-success-tint: #42d77d;

  /** warning **/
  --ion-color-warning: #ffc409;
  --ion-color-warning-rgb: 255, 196, 9;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0, 0, 0;
  --ion-color-warning-shade: #e0ac08;
  --ion-color-warning-tint: #ffca22;

  /** danger **/
  --ion-color-danger: #eb445a;
  --ion-color-danger-rgb: 235, 68, 90;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255, 255, 255;
  --ion-color-danger-shade: #cf3c4f;
  --ion-color-danger-tint: #ed576b;

  /** dark **/
  --ion-color-dark: #222428;
  --ion-color-dark-rgb: 34, 36, 40;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255, 255, 255;
  --ion-color-dark-shade: #1e2023;
  --ion-color-dark-tint: #383a3e;

  /** medium **/
  --ion-color-medium: #92949c;
  --ion-color-medium-rgb: 146, 148, 156;
  --ion-color-medium-contrast: #ffffff;
  --ion-color-medium-contrast-rgb: 255, 255, 255;
  --ion-color-medium-shade: #808289;
  --ion-color-medium-tint: #9d9fa6;

  /** light **/
  --ion-color-light: #f4f5f8;
  --ion-color-light-rgb: 244, 245, 248;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0, 0, 0;
  --ion-color-light-shade: #d7d8da;
  --ion-color-light-tint: #f5f6f9;
}

@media (prefers-color-scheme: dark) {
  /*
   * Dark Colors
   * -------------------------------------------
   */

  body {
    --ion-color-primary: #2fdf75;
    --ion-color-primary-rgb: 47, 223, 117;
    --ion-color-primary-contrast: #000000;
    --ion-color-primary-contrast-rgb: 0, 0, 0;
    --ion-color-primary-shade: #29c467;
    --ion-color-primary-tint: #44e283;

    --ion-color-secondary: #50c8ff;
    --ion-color-secondary-rgb: 80,200,255;
    --ion-color-secondary-contrast: #ffffff;
    --ion-color-secondary-contrast-rgb: 255,255,255;
    --ion-color-secondary-shade: #46b0e0;
    --ion-color-secondary-tint: #62ceff;

    --ion-color-tertiary: #6a64ff;
    --ion-color-tertiary-rgb: 106,100,255;
    --ion-color-tertiary-contrast: #ffffff;
    --ion-color-tertiary-contrast-rgb: 255,255,255;
    --ion-color-tertiary-shade: #5d58e0;
    --ion-color-tertiary-tint: #7974ff;

    --ion-color-success: #2fdf75;
    --ion-color-success-rgb: 47,223,117;
    --ion-color-success-contrast: #000000;
    --ion-color-success-contrast-rgb: 0,0,0;
    --ion-color-success-shade: #29c467;
    --ion-color-success-tint: #44e283;

    --ion-color-warning: #ffd534;
    --ion-color-warning-rgb: 255,213,52;
    --ion-color-warning-contrast: #000000;
    --ion-color-warning-contrast-rgb: 0,0,0;
    --ion-color-warning-shade: #e0bb2e;
    --ion-color-warning-tint: #ffd948;

    --ion-color-danger: #ff4961;
    --ion-color-danger-rgb: 255,73,97;
    --ion-color-danger-contrast: #ffffff;
    --ion-color-danger-contrast-rgb: 255,255,255;
    --ion-color-danger-shade: #e04055;
    --ion-color-danger-tint: #ff5b71;

    --ion-color-dark: #f4f5f8;
    --ion-color-dark-rgb: 244,245,248;
    --ion-color-dark-contrast: #000000;
    --ion-color-dark-contrast-rgb: 0,0,0;
    --ion-color-dark-shade: #d7d8da;
    --ion-color-dark-tint: #f5f6f9;

    --ion-color-medium: #989aa2;
    --ion-color-medium-rgb: 152,154,162;
    --ion-color-medium-contrast: #000000;
    --ion-color-medium-contrast-rgb: 0,0,0;
    --ion-color-medium-shade: #86888f;
    --ion-color-medium-tint: #a2a4ab;

    --ion-color-light: #222428;
    --ion-color-light-rgb: 34,36,40;
    --ion-color-light-contrast: #ffffff;
    --ion-color-light-contrast-rgb: 255,255,255;
    --ion-color-light-shade: #1e2023;
    --ion-color-light-tint: #383a3e;
  }

  /*
   * iOS Dark Theme
   * -------------------------------------------
   */

  .ios body {
    --ion-background-color: #000000;
    --ion-background-color-rgb: 0,0,0;

    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255,255,255;

    --ion-color-step-50: #0d0d0d;
    --ion-color-step-100: #1a1a1a;
    --ion-color-step-150: #262626;
    --ion-color-step-200: #333333;
    --ion-color-step-250: #404040;
    --ion-color-step-300: #4d4d4d;
    --ion-color-step-350: #595959;
    --ion-color-step-400: #666666;
    --ion-color-step-450: #737373;
    --ion-color-step-500: #808080;
    --ion-color-step-550: #8c8c8c;
    --ion-color-step-600: #999999;
    --ion-color-step-650: #a6a6a6;
    --ion-color-step-700: #b3b3b3;
    --ion-color-step-750: #bfbfbf;
    --ion-color-step-800: #cccccc;
    --ion-color-step-850: #d9d9d9;
    --ion-color-step-900: #e6e6e6;
    --ion-color-step-950: #f2f2f2;

    --ion-item-background: #000000;

    --ion-card-background: #1c1c1d;
  }

  .ios ion-modal {
    --ion-background-color: var(--ion-color-step-100);
    --ion-toolbar-background: var(--ion-color-step-150);
    --ion-toolbar-border-color: var(--ion-color-step-250);
  }


  /*
   * Material Design Dark Theme
   * -------------------------------------------
   */

  .md body {
    --ion-background-color: #121212;
    --ion-background-color-rgb: 18,18,18;

    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255,255,255;

    --ion-border-color: #222222;

    --ion-color-step-50: #1e1e1e;
    --ion-color-step-100: #2a2a2a;
    --ion-color-step-150: #363636;
    --ion-color-step-200: #414141;
    --ion-color-step-250: #4d4d4d;
    --ion-color-step-300: #595959;
    --ion-color-step-350: #656565;
    --ion-color-step-400: #717171;
    --ion-color-step-450: #7d7d7d;
    --ion-color-step-500: #898989;
    --ion-color-step-550: #949494;
    --ion-color-step-600: #a0a0a0;
    --ion-color-step-650: #acacac;
    --ion-color-step-700: #b8b8b8;
    --ion-color-step-750: #c4c4c4;
    --ion-color-step-800: #d0d0d0;
    --ion-color-step-850: #dbdbdb;
    --ion-color-step-900: #e7e7e7;
    --ion-color-step-950: #f3f3f3;

    --ion-item-background: #1e1e1e;

    --ion-toolbar-background: #1f1f1f;

    --ion-tab-bar-background: #1f1f1f;

    --ion-card-background: #1e1e1e;
  }
}

html {
  /* For more information on dynamic font scaling, visit the documentation: 
  https://ionicframework.com/docs/layout/dynamic-font-scaling */
  --ion-dynamic-font: var(--ion-default-dynamic-font);
}

```

## File: src/views/Tab1Page.vue
```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

```

## File: src/views/Tab2Page.vue
```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

```

## File: src/views/Tab3Page.vue
```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

```

## File: src/views/TabsPage.vue
```vue
<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>

```

## File: src/views/register.vue
```vue

```

## File: src/views/login.vue
```vue

```

## File: src/views/send_notification.vue
```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" />
      <ion-button expand="block" @click="sendNotification">Send Notification</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { NotificationService } from '@/services/notification.service';

const sendNotification = async () => {
  try {
    await NotificationService.sendNotification('Hello', 'This is a test notification');
  } catch (error) {
    console.error('Failed to send notification', error);
  }
};
</script>
```

## File: src/services/auth.service.ts
```ts
import axios from 'axios';

const API_URL = 'https://pulse.test.fgx.webally.co.za/api/user';

export class AuthService {
    static async register(username: string, email: string, password: string) {
        const response = await axios.post(`${API_URL}/register`, { username, email, password });
        return response.data;
    }
    
    static async login(email: string, password: string) {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        localStorage.setItem('token', response.data.token);
        return response.data;
    }

}
```

## File: src/services/notification.service.ts
```ts
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
        try {
            await axios.post(`${API_URL}/device_token`, { device_token: deviceToken }, {
                headers: { Authorization: `Bearer ${token}` },
            });
        } catch (error) {
            throw error;
        }
    }

    static async sendNotification(title: string, body: string) {
        const token = localStorage.getItem('token');
        try {
            await axios.post(`${API_URL}/send_notification`, { title, body }, {
                headers: { Authorization: `Bearer ${token}` },
            });
        } catch (error) {
            throw error;
        }
    }
}
```



<p id="hidden_comment">
    This is a hidden comment. It explains that the following style tag is meant to 
    style HTML content if this Markdown is converted to HTML. This comment should 
    not be visible in most Markdown renderers.
</p>
<style>
    #hidden_comment {
        display: none;
    }
    table {
        width: 100%;
    }
    table tr:first-child {
        font-weight: bold;
    }
    table tr:last-child {
        font-style: italic;
    }
</style>
