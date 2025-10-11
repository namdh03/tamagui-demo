import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'tamagui';

export default function ModalScreen() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View flex={1} items={'center'} p={'$5'} gap={'$5'}>
      <Text text={'center'}>{t('description.part1')}</Text>

      <Text text={'center'}>{t('description.part2')}</Text>

      <Button
        theme={i18n.resolvedLanguage === 'en' ? 'blue' : null}
        disabled={i18n.resolvedLanguage === 'en'}
        onPress={() => changeLanguage('en')}
      >
        en
      </Button>

      <Button
        theme={i18n.resolvedLanguage === 'de' ? 'blue' : null}
        disabled={i18n.resolvedLanguage === 'de'}
        onPress={() => changeLanguage('de')}
      >
        de
      </Button>
    </View>
  );
}
