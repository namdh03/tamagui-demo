import { Button, View } from 'tamagui';

import { deauthenticate } from '~/modules/auth/stores/useAuthStore';

const HomeScreen = () => {
  return (
    <View flex={1} justify='center' items='center'>
      <Button onPress={deauthenticate}>Sign Out</Button>
    </View>
  );
};

export default HomeScreen;
