
// import the component you want to test
import React from 'react';
import ExampleComponent from '../../src/index.tsx';
describe('ExampleComponent component', () => {
  it('works', () => {
    cy.mount(<ExampleComponent />, "Hello")
    // mount the component under test
    // start testing!
    cy.contains('Example Component')
  })
})
