
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


it('Button tests disabled',()=>{
  const mockOnClick = jest.fn()
  const {getByTestId} = render(<Button colorTheme="primary" roundedFull={true} transparent={true} disabled={true} click={mockOnClick} children={'submit'} />)
  const ClickIndicator = getByTestId('ClickIndicator')
  fireEvent.click(ClickIndicator)
  expect(mockOnClick).not.toHaveBeenCalled();
})

it('Button Testing',()=>{
  const mockTrigger = jest.fn()
  render(<Button colorTheme="primary" roundedFull={true} transparent={true} disabled={false} click={mockTrigger} > submit  </Button>)
  const button = screen.getByRole('button',{name:/submit/i})
  fireEvent.click(button)
  expect(mockTrigger).toHaveBeenCalled()
})
