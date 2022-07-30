import NewsList from "."
import loading from "../../general/loading";
import { render, screen, waitFor } from '@testing-library/react'
import Loading from "../../general/loading";
import Noticia from "../Noticia";

const NEWS_LIST_STUB = {"status":"ok","totalResults":1770,"articles":[{"source":{"id":null,"name":"Hipertextual"},"author":"Ara Rodríguez","title":"En mitad del invierno, Bit2Me lanza su pasarela de pagos para criptomonedas","description":"En pleno invierno de las criptos, Bit2Me sigue lanzando productos que hagan crecer el ecosistema. En este caso, se adentran en el sector de las pasarelas de pago con criptomonedas. Una para de su negocio para empresas que, en última instancia, revierte en el …","url":"https://hipertextual.com/2022/07/pasarela-de-pagos-cripto-bit2me-invierno-cripto","urlToImage":"https://imgs.hipertextual.com/wp-content/uploads/2022/04/criptomonedas.jpg","publishedAt":"2022-07-13T08:40:24Z","content":"En pleno invierno de las criptos, Bit2Me sigue lanzando productos que hagan crecer el ecosistema. En este caso, se adentran en el sector de las pasarelas de pago con criptomonedas. Una para de su neg… [+4370 chars]"},{"source":{"id":null,"name":"Genbeta.com"},"author":"Bárbara Bécares","title":"Mientras Putin prohíbe el pago con bitcoin en Rusia, las grandes fortunas se resguardan en el cripto: lanzan su primer token digital","description":"Desde que Rusia invadiese Ucrania, y comenzase así una guerra en Ucrania, los países de la OTAN y empresas con sede en estos países, han impuesto sanciones y bloqueos económicos a Moscú. Por ejemplo, en marzo, los países de la OTAN bloquearon el acceso de los…","url":"https://www.genbeta.com/actualidad/putin-prohibe-pago-bitcoin-rusia-grandes-fortunas-se-resguardan-cripto-lanzan-su-primer-token-digital","urlToImage":"https://i.blogs.es/8b8b27/mohd-azrin-hrstwaqu7cu-unsplash/840_560.jpg","publishedAt":"2022-07-19T07:52:53Z","content":"Desde que Rusia invadiese Ucrania, y comenzase así una guerra en Ucrania, los países de la OTAN y empresas con sede en estos países, han impuesto sanciones y bloqueos económicos a Moscú. Por ejemplo,… [+6035 chars]"},{"source":{"id":null,"name":"Genbeta.com"},"author":"Bárbara Bécares","title":"La historia de la pionera demanda notificada a través de un NFT: El anonimato del blockchain ya no vale para estafar criptomonedas","description":"En Gran Bretaña ya se puede utilizar el blockchain para demandar a alguien en una decisión pionera a nivel mundial. Un juez del Reino Unido dio el visto bueno para notificar una demanda a una persona a través de un token no fungible o NFT, según se puede ver …","url":"https://www.genbeta.com/actualidad/historia-pionera-demanda-notificada-a-traves-nft-anonimato-blockchain-no-vale-para-estafar-criptomonedas","urlToImage":"https://i.blogs.es/787a6d/conny-schneider-3hkkv6wzjce-unsplash/840_560.jpg","publishedAt":"2022-07-22T09:48:46Z","content":"En Gran Bretaña ya se puede utilizar el blockchain para demandar a alguien en una decisión pionera a nivel mundial. Un juez del Reino Unido dio el visto bueno para notificar una demanda a una persona… [+2331 chars]"}]}
const stubFetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(NEWS_LIST_STUB)    
})

describe('<NewsList />', () => {
    let originalFetch
    beforeEach(() => {
        originalFetch = global.fetch;
        global.fetch = stubFetch;
    });
    afterEach(() => {
        global.fetch = originalFetch;
    })
    //Loading
    it('Debe retornar un loading en la carga', async () => {
        //Arrange
        //Act
        render(<Loading />);
        //Assert
        const loading = screen.getByRole('progressbar');
        expect(loading).toBeInTheDocument();
    });

    //Noticia encontrada
    it('Debe retornar una lista de noticias', async () => {
        //Arrange
         //Act
        render(<NewsList />);
        //Assert
        await waitFor(() => {
            expect(screen.getByRole('news')).toBeInTheDocument();
        })
    });
    //No hay Noticias
    it('Debe retornar mensaje no hay noticias relacionadas', async () => {
        //Arrange
         //Act
        render(<Noticia />);
        //Assert
        await waitFor(() => {
            expect(screen.getByText(/noticias relacionadas/i)).toBeInTheDocument();
        })
    });
});