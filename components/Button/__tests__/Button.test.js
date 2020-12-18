import { render } from 'utils/test-utils'
import { Button } from '..'

describe('Button', () => {
  it('should render default button', () => {
    render(<Button text="Click me" />)
  })
})
