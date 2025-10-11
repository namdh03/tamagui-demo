import { router } from 'expo-router';

import { Button, View } from 'tamagui';

export default function HomeScreen() {
  return (
    <View flex={1} items={'center'} justify={'center'}>
      <Button onPress={() => router.navigate('/modal')}>Modal</Button>
    </View>
  );
}
