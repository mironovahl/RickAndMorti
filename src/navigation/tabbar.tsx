import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { CharacterIcon } from 'src/ui/icons/character'
import { EpisodeIcons } from 'src/ui/icons/episode'
import { LocationIcon } from 'src/ui/icons/location'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.CharacterScreen}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          headerTitle: 'Characters',
          tabBarIcon: ({ focused }) => <CharacterIcon />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          tabBarIcon: ({ focused }) => <LocationIcon />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          headerTitle: 'Episode',
          tabBarIcon: ({ focused }) => <EpisodeIcons />,
        }}
      />
    </Tab.Navigator>
  )
}
