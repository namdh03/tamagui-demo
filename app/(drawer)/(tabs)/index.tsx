import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { Button, View } from 'tamagui';

import { deauthenticate } from '~/modules/auth/stores/useAuthStore';

const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View flex={1} justify='center' items='center' gap={8}>
      <Button onPress={() => navigation.openDrawer()}>Drawer</Button>
      <Button onPress={deauthenticate}>Sign Out</Button>
    </View>
  );
};

export default HomeScreen;
