import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { colors } from 'src/theme/colors'
import { CharacterIcon } from 'src/ui/icons/character'
import { EpisodeIcons } from 'src/ui/icons/episode'
import { LocationIcon } from 'src/ui/icons/location'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  const getColor = (focused: boolean) => {
    if (focused) {
      return colors.purple[0]
    }

    return colors.gray[0]
  }

  return (
    <Tab.Navigator
      initialRouteName={Routes.CharacterScreen}
      screenOptions={{
        tabBarActiveTintColor: colors.purple[0],
      }}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          headerTitle: 'Characters',
          tabBarIcon: ({ focused }) => (
            <CharacterIcon color={getColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <LocationIcon color={getColor(focused)} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          headerTitle: 'Episode',
          tabBarIcon: ({ focused }) => (
            <EpisodeIcons color={getColor(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
