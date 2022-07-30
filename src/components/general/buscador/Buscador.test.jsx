import Buscador from "./index";
import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";

describe('<Buscador />',() => {
    it('Debe aparecer en el documento', async () => {
        //Arrange
        //Act
        render(<Buscador />);
        const buscador = screen.getByRole('search');
        //Assert
        expect(buscador).toBeInTheDocument();
    });

    it('Debe llamar a props.onBuscar', async () => {
        //Arrange
        const onBuscarMock = jest.fn();

        //Act
        render(<Buscador onBuscar={onBuscarMock}/>);
        const buscador = screen.getByRole('search');
        const buscadorInput = buscador.querySelector('input');
        const botonBuscar = buscador.querySelector('button');

        act(() => {
            fireEvent.change(buscadorInput, { target: { value: 'test' }});
            fireEvent.click(botonBuscar);
            expect(onBuscarMock).toHaveBeenCalled();
        })

    });
});