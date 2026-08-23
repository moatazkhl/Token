importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAiHt72bzvFw8tzEPsj9uKbgWBEJGkoijU",
  authDomain: "talabat-e67b7.firebaseapp.com",
  databaseURL: "https://talabat-e67b7-default-rtdb.firebaseio.com",
  projectId: "talabat-e67b7",
  storageBucket: "talabat-e67b7.firebasestorage.app",
  messagingSenderId: "616225099801",
  appId: "1:616225099801:web:7bb54e74c6c82994959a88"
});

const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
