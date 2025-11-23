import { View } from 'react-native';

import { Link } from 'expo-router';

const FeedScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link href='/feed/123'>Go To Post in Feed</Link>
    </View>
  );
};

export default FeedScreen;
