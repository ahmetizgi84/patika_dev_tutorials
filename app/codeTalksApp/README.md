## Local Push Notification (Android)

1. `npm install --save react-native-push-notification`

2. `android/build.gradle` dosyasında ext içine aşağıdaki iki satırı yapıştır.

```js
ext {
    googlePlayServicesVersion = "<Your play services version>" // default: "+"
    firebaseMessagingVersion = "<Your Firebase version>" // default: "21.1.0"
}
```

3. Android manifest dosyasında `android/app/src/main/AndroidManifest.xml` `application` etiketi arasına aşağıdaki satırları yapıştır.

```js
 <application ....>
        <!-- Change the value to true to enable pop-up for in foreground on receiving remote notifications (for prevent duplicating while showing local notifications set this to false) -->
        <meta-data  android:name="com.dieam.reactnativepushnotification.notification_foreground"
                    android:value="false"/>
        <!-- Change the resource name to your App's accent color - or any other color you want -->
        <meta-data  android:name="com.dieam.reactnativepushnotification.notification_color"
                    android:resource="@color/white"/> <!-- or @android:color/{name} to use a standard color -->

        <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationActions" />
        <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationPublisher" />
        <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationBootEventReceiver">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
                <action android:name="android.intent.action.QUICKBOOT_POWERON" />
                <action android:name="com.htc.intent.action.QUICKBOOT_POWERON"/>
            </intent-filter>
        </receiver>

        <service
            android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService"
            android:exported="false" >
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>
     .....
```

4. Android Manifest dosyasına `android/app/src/main/AndroidManifest.xml` push notification için gerekli izinleri içeren aşağıdaki satırları yapıştır

```js
 <uses-permission android:name="android.permission.VIBRATE" />
 <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
```

5. `android/app/src/main/res/values/colors.xml` colors.xml dosyasına aşağıdaki kodları yapıştır. colors.xml dosyası yoksa values klasörü içerisine kendin oluştur.

```js
<resources>
  <color name="white">#FFF</color>
</resources>
```

6. .configure() fonksiyonunu herhangi bir komponent içerisinde kullanma bu komponent App gibi parent kompononent olsa bile. Aksi halde, notification yüklenmemiş olacağı için çalışmayacaktır. Bunun yerine .configure() fonksiyonunu index.js içerisinde kullan.

`index.js`

```js
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});
```

7. Uygulama açıldığında gelen ilk ekranda notification channel'ı oluşturmak için aşağıdaki kodları yazıyoruz

```js
import PushNotification from 'react-native-push-notification';

React.useEffect(() => {
  createNotificationChannel();
}, []);

const createNotificationChannel = () => {
  PushNotification.createChannel({
    channelId: 'test-channel-id',
    channelName: 'Test-Channel',
  });
};
```

8. Artık push notification'ı istediğimiz zaman gösterebiliriz. Bu örnekte butona basıldığında notification gösterilecek

```js

```

- Yukarıdaki ayarlar yapıldıktan sonra uygulama, yerel olarak push notification göndermeye hazırlanmış oluyor.
  Uzaktan notification göndermek için aşağıdaki ayarları ek olarak yapmamız gerekir.
