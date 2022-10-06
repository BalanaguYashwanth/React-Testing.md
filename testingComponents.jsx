
#Testing button

import * as React from 'react';
import {Button} from '../src/Button/index'
import { fireEvent, render} from '@testing-library/react'


 
it('Button tests click',()=>{
    const mockOnClick = jest.fn()
    const {getByTestId} = render(<Button colorTheme="primary" roundedFull={true} transparent={true} disabled={false} click={mockOnClick} children={'submit'}/>)
    const ClickIndicator = getByTestId('ClickIndicator')
    fireEvent.click(ClickIndicator)
    expect(mockOnClick).toHaveBeenCalled()
})
