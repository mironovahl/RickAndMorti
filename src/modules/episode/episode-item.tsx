import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Wrapper = styled.TouchableOpacity`
  background-color: ${colors.white};
  padding: 12px;
  border-radius: 12px;
  margin: 4px;
`

const Episode = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 17px;
`

const Name = styled.Text`
  font-family: 'Montserrat-Regular';
  color: ${colors.gray[1]};
  font-size: 15px;
`

const Date = styled(Name)`
  font-family: 'Montserrat-SemiBold';
`

interface Props {
  episode: string
  name: string
  date: string
}

export const EpisodeItem = ({ date, episode, name }: Props) => {
  return (
    <Wrapper>
      <Episode>{episode}</Episode>
      <Name>{name}</Name>
      <Date>{date}</Date>
    </Wrapper>
  )
}
