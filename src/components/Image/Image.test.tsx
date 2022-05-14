import { mount } from '@cypress/react';
import Image from './Image';

describe('Image Component', () => {
    it('renders src attribute correctly', () => {
        const src = "./logo.png"
        mount(<Image src={src} />);
        cy.get('img').should('have.attr', 'src');
    });

    it('takes correct value of src attribute', () => {
        const src = "./logo.png"
        mount(<Image src={src} />);
        cy.get('img').invoke('attr', 'src').should('contain', src);
    });

    it('renders correct CSS class', () => {
        mount(<Image src={''} />);
        cy.get('div').should('have.class', 'gif-wrap');
    });

    it('takes onClick prop and calls it correctly', () => {
        const onClick = cy.stub();
        mount(<Image onClick={onClick} src={''} />);
        cy.get('img').click()
    });
});
