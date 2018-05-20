import React from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header name="Register" />

      <AlbumList />
    </View>
  )
}

export default App;