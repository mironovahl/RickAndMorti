import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import {
  EpisodesQuery,
  FilterEpisode,
  useEpisodesQuery,
} from 'src/generated/graphql'
import { ExtractFromArray } from 'src/types'

import { EpisodeItem } from './episode-item'

type Location = ExtractFromArray<EpisodesQuery['episodes']['results']>

const renderItem = (item?: Location | null) => {
  if (!item) {
    return null
  }

  return (
    <EpisodeItem date={item.created} name={item.name} episode={item.episode} />
  )
}

export const EpisodeScreen = () => {
  const [page, setPage] = useState(1)
  const { data, fetchMore, loading } = useEpisodesQuery({
    variables: { page: 1, filter: {} as FilterEpisode },
  })

  const loadMore = async () => {
    await fetchMore({
      variables: {
        page: page + 1,
      },

      updateQuery: (prevData, { fetchMoreResult }) => {
        return {
          episodes: {
            results: [
              ...(prevData?.episodes?.results ?? []),
              ...(fetchMoreResult?.episodes?.results ?? []),
            ],
          },
        }
      },
    })
    setPage((prev) => prev + 1)
  }

  if (!data?.episodes?.results || loading) {
    return <Text>Loading</Text>
  }

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.episodes?.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={loadMore}
      />
    </View>
  )
}
