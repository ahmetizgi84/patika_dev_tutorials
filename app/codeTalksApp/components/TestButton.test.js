import React from 'react'
import { expect } from '@jest/globals'
import { fireEvent, render, waitFor } from '@testing-library/react-native'

import TestButton from './TestButton'

test('should match with snapshot', () => {
    const comp = render(<TestButton />)

    expect(comp).toMatchSnapshot()
})


// npm run test
// npm run test -u