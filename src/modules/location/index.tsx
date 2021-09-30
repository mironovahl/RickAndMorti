import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import {
  FilterLocation,
  LocationsQuery,
  useLocationsQuery,
} from 'src/generated/graphql'
import { ExtractFromArray } from 'src/types'
import { Card } from 'src/ui/card'

type Character = ExtractFromArray<LocationsQuery['locations']['results']>

const renderItem = (item?: Character | null) => {
  if (!item) {
    return null
  }

  return <Card status={item.type} title={item.name} />
}

export const LocationScreen = () => {
  const [page, setPage] = useState(1)
  const { data, fetchMore, loading } = useLocationsQuery({
    variables: { page: 1, filter: {} as FilterLocation },
  })

  const loadMore = async () => {
    await fetchMore({
      variables: {
        page: page + 1,
      },

      updateQuery: (prevData, { fetchMoreResult }) => {
        return {
          locations: {
            results: [
              ...(prevData?.locations?.results ?? []),
              ...(fetchMoreResult?.locations?.results ?? []),
            ],
          },
        }
      },
    })
    setPage((prev) => prev + 1)
  }

  if (!data?.locations?.results || loading) {
    return <Text>Loading</Text>
  }

  return (
    <View>
      <FlatList
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data?.locations?.results}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={loadMore}
      />
    </View>
  )
}
