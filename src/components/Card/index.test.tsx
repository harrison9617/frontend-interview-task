import { render, waitFor } from '@testing-library/react'
import Card from '@/components/Card'
import '@testing-library/jest-dom'
import 'jest-fetch-mock'

describe('Card', () => {
  it('renders as expected when currency is GBP', async () => {
    const { container } = render(
      <Card
        id={'1'}
        name="Name"
        type="card"
        currency="GBP"
        amount={100}
        spent={50}
        renewal="week"
        active={false}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('renders as expected when currency is USD', async () => {
    const { container } = render(
      <Card
        id={'1'}
        name="Name"
        type="card"
        currency="USD"
        amount={100}
        spent={50}
        renewal="week"
        active={false}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('renders as expected when currency is EUR', async () => {
    const { container } = render(
      <Card
        id={'1'}
        name="Name"
        type="card"
        currency="EUR"
        amount={100}
        spent={50}
        renewal="week"
        active={false}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('renders card type correctly by displaying Spend Card', async () => {
    const { getByText } = render(
      <Card
        id={'1'}
        name="Name"
        type="card"
        currency="GBP"
        amount={100}
        spent={50}
        renewal="week"
        active={false}
      />
    )
    expect(getByText('Spend Card')).toBeInTheDocument()
  })
  it('renders expense type correctly by displaying Expense', async () => {
    const { getByText } = render(
      <Card
        id={'1'}
        name="Name"
        type="expense"
        currency="GBP"
        amount={100}
        spent={50}
        renewal="week"
        active={false}
      />
    )
    expect(getByText('Expense')).toBeInTheDocument()
  })
})
