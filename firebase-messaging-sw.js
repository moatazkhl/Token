// firebase-messaging-sw.js
// Service Worker لاستقبال الإشعارات في الخلفية

importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAiHt72bzvFw8tzEPsj9uKbgWBEJGkoijU",
    authDomain: "talabat-e67b7.firebaseapp.com",
    databaseURL: "https://talabat-e67b7-default-rtdb.firebaseio.com",
    projectId: "talabat-e67b7",
    storageBucket: "talabat-e67b7.firebasestorage.app",
    messagingSenderId: "616225099801",
    appId: "1:616225099801:web:7bb54e74c6c82994959a88"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// معالجة الإشعارات في الخلفية
messaging.onBackgroundMessage(function(payload) {
    console.log('[SW] إشعار خلفية:', payload);
    
    const title = payload.notification?.title || '🔔 إشعار جديد';
    const body = payload.notification?.body || 'لديك تحديث جديد';
    
    const options = {
        body: body,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        vibrate: [200, 100, 200],
        requireInteraction: true,
        data: payload.data || {}
    };

    self.registration.showNotification(title, options);
});

// عند النقر على الإشعار
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});