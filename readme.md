# WhatsChat

WhatsChat is simple social-media mobile app build wit [ReactNative](https://reactnative.dev/) and [Supabase](https://supabase.com).

- Styled with [Dripsy](https://dripsy.xyz).
- Animations with [Moti](https://moti.com).

### Features

- SignIn/SingUp.
- Short Video.
- Posts.
- Realtime Chat.

### To-Do

- [x] Short Video (Need to optimize video loading).
- [ ] Posts
- [ ] Private Real-Time Chat.
- [ ] Better Caching with Offline Support.
- [ ] Optimize app size.
- [ ] IOS Support.

## Installation

Install dependencies -

```sh
yarn
or
npm install
```

Setup Supabase Project and configure [`supabase.config.js`](src/Utils/supabase.config.js)

```JS
const supabaseUrl = '<REPLACE_WITH_YOURS_URL>';
const supabaseAnonKey = '<REPLACE_WITH_YOURS_ANNON_KEY>';
```

Run your Application.

> Make sure a physical device is connected & detected in `adb` OR emulator is installed.

```sh
yarn android
or
npm run android
```
