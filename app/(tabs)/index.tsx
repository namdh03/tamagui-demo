import { router } from 'expo-router';

import { Button, Text, View } from 'tamagui';

import { authenticate, deauthenticate, resetAuthStore, useIsAuthenticated } from '~/modules/auth/stores/useAuthStore';
import { resetAllStores } from '~/stores';
import { useCountActions, useCountValue } from '~/stores/count/count.selectors';
import { useLanguageActions, useLanguageLng } from '~/stores/language/language.selectors';

export default function HomeScreen() {
  const value = useCountValue();
  const lng = useLanguageLng();
  const countActions = useCountActions();
  const languageActions = useLanguageActions();
  const isAuthenticated = useIsAuthenticated();

  return (
    <View flex={1} items={'center'} justify={'center'}>
      <Text>Count: {value}</Text>
      <Text>Language: {lng}</Text>
      <Text>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</Text>

      <Button onPress={() => countActions.setCount(value + 1)}>Increase Value Count</Button>
      <Button onPress={() => languageActions.reset()}>Reset Language</Button>
      <Button onPress={() => authenticate({ id: '1', name: 'John Doe', email: 'john.doe@example.com' })}>
        Authenticate
      </Button>
      <Button onPress={() => resetAuthStore()}>Reset Auth Store</Button>
      <Button onPress={() => resetAllStores()}>Reset All</Button>
      <Button onPress={() => router.navigate('/modal')}>Modal</Button>
      <Button onPress={deauthenticate}>Deauthenticate</Button>
    </View>
  );
}
