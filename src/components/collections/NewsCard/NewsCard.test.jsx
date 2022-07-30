import NewsCard from "./index";
import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
const NEWS_ITEM_STUB = {"source":{"id":null,"name":"Hipertextual"},"author":"Aglaia Berlutti","title":"‘Westworld’, 4×04: el mejor de la serie, con un cambio total de argumento","description":"En el episodio cuatro de su cuarta temporada de Westworld cerró el ciclo que comenzó con el test de Turing de Dolores Abernathy en la primera temporada. Y no solo de manera simbólica, sino también como narración global. La serie, que fue criticada por una seg…","url":"https://hipertextual.com/2022/07/westworld-4x04-critica-serie-hbo-max","urlToImage":"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/06/westworld_temporada_3_jonathan_nolan_lisa_joy_2.jpg?fit=2396%2C1598&quality=50&strip=all&ssl=1","publishedAt":"2022-07-18T07:30:00Z","content":"En el episodio cuatro de su cuarta temporada de Westworld cerró el ciclo que comenzó con el test de Turing de Dolores Abernathy en la primera temporada. Y no solo de manera simbólica, sino también co… [+6806 chars]"}

describe('<NewsCard />',() => {
    it('Debe aparecer en el documento', async () => {
        //Arrange
        //Act
        render(<NewsCard item={NEWS_ITEM_STUB}/>);
        const newsCard = screen.getByRole('card');
        //Assert
        expect(newsCard).toBeInTheDocument();
    });
});