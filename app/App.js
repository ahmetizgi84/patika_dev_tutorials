
import React from 'react';
import { View } from 'react-native'

import { Home as PatikaStoreHome } from './patikaStore/screens'
import { Home as TodoAppHome } from './todoApp/screens'
import TarifkaAppRouter from './tarifkaApp/Router'
import KodWorkRouter from './kodworkApp/Router'

function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <PatikaStoreHome /> */}
      {/* <TodoAppHome /> */}
      {/* <TarifkaAppRouter /> */}
      <KodWorkRouter />
    </View>
  )
}


export default App;
