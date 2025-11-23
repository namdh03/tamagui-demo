import { Link } from 'expo-router';

import { View } from 'tamagui';

export default function ExploreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link href='/feed/123' withAnchor>
        Go To Post in Explore
      </Link>
    </View>
  );
}
