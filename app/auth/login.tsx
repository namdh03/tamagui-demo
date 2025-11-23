import { Button, View } from 'tamagui';

import { authenticate } from '~/modules/auth/stores/useAuthStore';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
