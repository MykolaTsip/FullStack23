import {render, screen, fireEvent} from '@testing-library/react';

import { Show } from '../Show';

describe('test Show component', () => {
    test('test init text', () => {
        render(<Show/>);
        expect(screen.getByText('I\'m show')).toBeInTheDocument();
    });

    //  Некоректний тест
    // test('test init text', () => {
    //     render(<Show/>);
    //     const text = screen.getByText('I\'m show');
    //     fireEvent.click(text);
    //     expect(text).toBeInTheDocument();
    // });

    test('check onclick', () => {
        const spyClick = jest.fn();

        render(<Show clickSh={spyClick}/>);

        const btn = screen.getByText('I\'m show');
        fireEvent.click(btn);
        // fireEvent.click(btn);

        // expect(spyClick).toHaveBeenCalled()
        // expect(spyClick).toHaveBeenCalledTimes(2);
        expect(spyClick).toHaveBeenCalledWith(222);
    });
});