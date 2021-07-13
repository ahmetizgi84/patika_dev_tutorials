
import React from 'react';
import { View } from 'react-native'

import { Home as PatikaStoreHome } from './patikaStore/screens'
import { Home as TodoAppHome } from './todoApp/screens'
import TarifkaAppRouter from './tarifkaApp/Router'
import KodWorkWrapper from './kodworkApp/Wrapper'
import CodeTalksAppRouter from './codeTalksApp/Router'

function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <PatikaStoreHome /> */}
      {/* <TodoAppHome /> */}
      {/* <TarifkaAppRouter /> */}
      {/* <KodWorkWrapper /> */}
      <CodeTalksAppRouter />
    </View>
  )
}


export default App;
