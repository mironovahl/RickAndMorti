import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

import { colors } from 'src/theme/colors'

interface Props {
  color?: string
}

export const LocationIcon = ({ color = colors.gray[0] }: Props) => {
  return (
    <Svg width="29" height="28" viewBox="0 0 29 28" fill="none">
      <G clip-path="url(#clip0)">
        <Path
          d="M22.4241 15.8156C25.4902 18.276 27.1954 20.451 26.6069 21.4692C25.6772 23.0759 19.3788 21.1838 12.5393 17.2427C5.69986 13.3016 0.908253 8.80424 1.83741 7.19801C2.41865 6.19385 5.09674 6.55635 8.69357 7.93185"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <Path
          d="M14.2221 22.6664C18.8244 22.6664 22.5553 18.9355 22.5553 14.3332C22.5553 9.73091 18.8244 6 14.2221 6C9.61981 6 5.8889 9.73091 5.8889 14.3332C5.8889 18.9355 9.61981 22.6664 14.2221 22.6664Z"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="28"
            height="28"
            fill="white"
            transform="translate(0.722176)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
