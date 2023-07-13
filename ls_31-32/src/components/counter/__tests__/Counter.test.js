import {render, screen, fireEvent} from '@testing-library/react';

import { Counter } from '../Counter';

describe('test Counter component', () => {

    beforeEach(() => {
        render(<Counter/>);
    })

    test('check init state', () => {
        const htmlElement = screen.getByText('Count is: 0');
        // console.log(htmlElement, 22222);

        // expect(htmlElement).toBeTruthy();
        // expect(htmlElement.innerHTML).toEqual('Count is: 0');
        // expect(htmlElement.textContent).toEqual('Count is: 0');\
        // expect(screen.getByText('Count is: 0')).toBeInTheDocument();
        expect(htmlElement).toBeInTheDocument();
    });


    test('should + 1', () => {
        const plsButton = screen.getByTestId('pls-btn');
        console.log(plsButton);
        fireEvent.click(plsButton);

        const htmlElement = screen.getByText('Count is: 1');
        expect(htmlElement).toBeInTheDocument();
    });

    test('should -1', () => {
        const minBtn = screen.getByTestId('min-btn');
        fireEvent.click(minBtn);

        const htmlElement = screen.getByText('Count is: -1');
        expect(htmlElement).toBeInTheDocument();
    });
})

