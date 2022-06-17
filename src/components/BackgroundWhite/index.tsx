import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  children: ReactNode;
}

export function BackgroundWhite({ children }: Props) {
  const { white, secondary80 } = theme.colors;

  return (

    <LinearGradient
      style={styles.container}
      colors={[white, white]}
    >

      {children}
    </LinearGradient>
  )
}