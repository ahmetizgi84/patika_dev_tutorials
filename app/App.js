
import React from 'react';
import { View } from 'react-native'

import { Home as PatikaStoreHome } from './patikaStore/screens'
import { Home as TodoAppHome } from './todoApp/screens'
import TarifkaAppRouter from './tarifkaApp/Router'
import KodWorkWrapper from './kodworkApp/Wrapper'

function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <PatikaStoreHome /> */}
      {/* <TodoAppHome /> */}
      {/* <TarifkaAppRouter /> */}
      <KodWorkWrapper />
    </View>
  )
}


export default App;
