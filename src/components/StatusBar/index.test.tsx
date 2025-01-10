import { render, waitFor } from '@testing-library/react'
import StatusBar from '@/components/StatusBar'
import '@testing-library/jest-dom'
import 'jest-fetch-mock'

describe('StatusBar', () => {
  it('renders as expected', async () => {
    const { container } = render(<StatusBar percent={0} />)
    expect(container).toMatchSnapshot()
  })
  it('percent should be a number between 0 and 100', async () => {
    const { getByTestId } = render(<StatusBar percent={0} />)
    console.log(getByTestId('percent'))
    expect(Number(getByTestId('percent').textContent)).toBeGreaterThanOrEqual(0);
    expect(Number(getByTestId('percent').textContent)).toBeLessThan(100);
  })
})