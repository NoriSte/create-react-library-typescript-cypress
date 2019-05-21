
// import the component you want to test
import React from 'react';
import ExampleComponent from '../../src/index.tsx';
import fixReactDomScope from '../support/fixReactDomScope';


describe('ExampleComponent component', () => {
  beforeEach(function() {
    fixReactDomScope(window);
  });
  it('works', () => {
    cy.mount(<ExampleComponent text="Hello world" />)
    // mount the component under test
    // start testing!
    cy.contains('Example Component')
  })
})
