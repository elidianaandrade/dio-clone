import bannerImg from '../../assets/banner.png';

import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, Title, TitleHighlight, TextContent } from './styles';


const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br/>
                    </TitleHighlight>
                        o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent> 
                <Link to="/sign-up">
                    <Button title="Começar agora" buttonType="secondary"/>
                </Link>
            </div>
            <div>
                <img src={ bannerImg } alt="Imagem principal do site." />
            </div>
        </Container>
    </>)
}

export { Home }