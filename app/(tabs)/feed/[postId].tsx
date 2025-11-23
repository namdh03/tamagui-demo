import { Text, View } from 'react-native';

import { router, useLocalSearchParams } from 'expo-router';

import { Button } from 'tamagui';

const PostScreen = () => {
  const params = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{JSON.stringify(params, null, 2)}</Text>
      <Button onPress={router.back}>Go Back</Button>
    </View>
  );
};

export default PostScreen;
