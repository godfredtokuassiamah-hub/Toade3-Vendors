import { View } from 'react-native';

import { useTheme } from '@/theme';

/** Entry route placeholder. Replace with your first screen. */
export default function IndexScreen() {
  const { colors } = useTheme();
  return <View style={{ flex: 1, backgroundColor: colors.background }} />;
}
