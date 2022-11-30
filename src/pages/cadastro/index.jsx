import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { Container, Title, Column, TitleCadastro, SubtitleCadastro, NoteText, PText, LoginText, Row, Wrapper } from './styles';


const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const {data} = await api.get(`/users?email=${formData.email}`);

            if(data.filter(data => data.includes(formData.email))){
                navigate('/feed') 
                return
            } 

        } catch(e){
            alert('Ocorreu um erro. Por favor, tente novamente.')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="name"  control={control} />
                    {errors.name && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="CRIAR MINHA CONTA GRÁTIS" buttonType="secondary" type="submit"/>
                    <NoteText>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </NoteText>
                </form>
                <Row>
                    <PText>Já tenho conta.</PText>
                    <LoginText>Fazer login.</LoginText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }