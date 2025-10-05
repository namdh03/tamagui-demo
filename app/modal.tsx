import { StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import { useTranslation } from 'react-i18next';
import { Button, Text } from 'tamagui';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title'>This is a modal</ThemedText>
      <Link href='/' dismissTo style={styles.link}>
        <ThemedText type='link'>Go to home screen {i18n.resolvedLanguage}</ThemedText>
      </Link>

      <Text>{t('description.part2')}</Text>

      <Button onPress={() => changeLanguage('en')} disabled={i18n.resolvedLanguage === 'en'}>
        en
      </Button>

      <Button onPress={() => changeLanguage('de')} disabled={i18n.resolvedLanguage === 'de'}>
        de
      </Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
