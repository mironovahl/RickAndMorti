import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from '../theme/colors'

const Wrapper = styled.TouchableOpacity`
  flex: 1;
  margin: 8px;
  background-color: ${colors.white};
  border-radius: 12px;
  overflow: hidden;
  padding-bottom: 12px;
`

const ImageCard = styled.Image`
  width: 100%;
  height: 150px;
  resize-mode: cover;
`

const Title = styled.Text`
  padding: 0 12px;
  font-family: 'Montserrat-SemiBold';
  font-size: 17px;
  height: 40px;
`

const Status = styled.Text`
  color: ${colors.gray[1]};
  padding: 12px 12px 0;
  font-family: 'Montserrat-Regular';
  font-size: 11px;
`

interface Props {
  image?: string
  status: string
  title: string
}

export const Card = ({ image, status, title }: Props) => {
  return (
    <Wrapper>
      {image && (
        <ImageCard
          source={{
            uri: image,
          }}
        />
      )}
      <Status>{status}</Status>
      <View style={{ minHeight: 42 }}>
        <Title numberOfLines={2}>{title}</Title>
      </View>
    </Wrapper>
  )
}
