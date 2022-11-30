import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://hermes.digitalinnovation.one/articles/cover/425dace0-79e2-4665-9457-033d7e4a7f2a.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/97471199?v=4"/>
         <div>
          <h4>Eli Andrade</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Destrave seu Primeiro Desafio de Código</h4>
          <p>Neste artigo decidi abordar uma etapa muito importante e que está presente nos Bootcamps da plataforma: os desafios de código. Ao me deparar com o meu primeiro desafio, embora eu reconhecesse que se tratava de uma tarefa simples, acabei travando a princípio até seguir as etapas que abordo neste artigo. Então, como não travar na hora de resolver os desafios de código?
              ... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#Desperte o potencial #Lógica de Programação</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
