
import React from 'react';
import { View } from 'react-native'

import { Home as PatikaStoreHome } from './patikaStore/screens'
import { Home as TodoAppHome } from './todoApp/screens'
import Router from './tarifkaApp/Router'

function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <PatikaStoreHome /> */}
      {/* <TodoAppHome /> */}
      <Router />
    </View>
  )
}


export default App;
