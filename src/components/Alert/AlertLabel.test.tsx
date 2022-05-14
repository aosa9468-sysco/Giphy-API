import { mount } from '@cypress/react';
import AlertLabel from './AlertLabel';

describe('AlertLabel Component', () => {
    it('Should renders alert message correctly', () => {
        const text = "Dummy alert message"
        mount(<AlertLabel text={text} variant={''} />);
        cy.get('div').contains(text);
    });

    it('Should renders fallback error message correctly', () => {
        const fallbackErr = "Unexpected Error Occured"
        mount(<AlertLabel variant={''} text={''} />);
        cy.get('div').contains(fallbackErr);
    });

    it('Should takes variant prop and renders relevant classes correctly', () => {
        const variant = "warning"
        mount(<AlertLabel variant={variant} text={''} />);
        cy.get('div').should('have.class', 'alert-' + variant)
    });
});
