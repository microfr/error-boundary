import React from 'react'
import { create } from 'react-test-renderer'
import ErrorBoundary from '.'

describe('ErrorBoundary component', () => {
  const NAME = 'Buckwheat'
  test('Has class \'hello-world\'', () => {
    const { root } = create(<ErrorBoundary name={NAME} />)
    expect(root.findByType('div').props.className).toEqual('hello-world')
  })

  test('Has name property', () => {
    const { root } = create(<ErrorBoundary name={NAME} />)
    expect(root.props.name).toEqual(NAME)
  })

  test('Matches ErrorBoundary innertext.', () => {
    const { root } = create(<ErrorBoundary name={NAME} />)
    expect(root.findByType('div').children.join('')).toEqual('Hello Buckwheat!')
  })
})
