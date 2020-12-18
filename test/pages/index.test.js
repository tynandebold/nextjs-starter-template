import { render, fireEvent } from 'utils/test-utils'
import { Home } from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Click me, please!'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
