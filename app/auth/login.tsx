import { Button, View } from 'tamagui';

import { authenticate } from '~/modules/auth/stores/useAuthStore';

export default function LoginScreen() {
  return (
    <View flex={1} justify='center' items='center'>
      <Button
        onPress={() => {
          authenticate({
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
          });
        }}
      >
        Sign In
      </Button>
    </View>
  );
}
