import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import { CharactersQuery, useCharactersQuery } from 'src/generated/graphql'
import { ExtractFromArray } from 'src/types'
import { Card } from 'src/ui/card'

type Character = ExtractFromArray<CharactersQuery['characters']['results']>

const renderItem = (item?: Character | null) => {
  if (!item) {
    return null
  }

  return <Card image={item.image} status={item.status} title={item.name} />
}

export const CharacterScreen = () => {
  const [page, setPage] = useState(1)
  const { data, fetchMore, loading } = useCharactersQuery({
    variables: { page: 1, name: '' },
  })

  const loadMore = async () => {
    await fetchMore({
      variables: {
        page: page + 1,
      },

      updateQuery: (prevData, { fetchMoreResult }) => {
        return {
          characters: {
            results: [
              ...(prevData?.characters?.results ?? []),
              ...(fetchMoreResult?.characters?.results ?? []),
            ],
          },
        }
      },
    })
    setPage((prev) => prev + 1)
  }

  if (!data?.characters?.results || loading) {
    return <Text>Loading</Text>
  }

  return (
    <View>
      <FlatList
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data?.characters?.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={loadMore}
      />
    </View>
  )
}
