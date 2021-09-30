import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

interface Props {
  color?: string
}

export const EpisodeIcons = ({ color = colors.gray[0] }: Props) => {
  return (
    <Svg width="29" height="28" viewBox="0 0 29 28" fill="none">
      <Path
        d="M23.9991 8.16675H5.33244C4.04378 8.16675 2.99911 9.21142 2.99911 10.5001V23.3334C2.99911 24.6221 4.04378 25.6667 5.33244 25.6667H23.9991C25.2878 25.6667 26.3324 24.6221 26.3324 23.3334V10.5001C26.3324 9.21142 25.2878 8.16675 23.9991 8.16675Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.4991 2.33325L14.6658 8.16658L8.83244 2.33325"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
