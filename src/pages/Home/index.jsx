import { useRef } from "react"
import { Title, Container, TopBackground, Form, ContainerInput, Input, InputLabel, Button } from "./styles"

import UsersImage from '../../assets/users.png'

function Home() {
const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

function registerNewUser(){
  console.log(inputName.current.value)

}


  return (

    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-usuario" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>


        <ContainerInput>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type=" text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>idade<span> *</span></InputLabel>
            <Input type="namber" placeholder="Idade do usuário" ref={inputAge}/>
          </div>
        </ContainerInput>


        <div style={{width: '100%'}}>
          <InputLabel>e-mail<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail}/>
        </div>

        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>

  )
}

export default Home




/*
Exportar "Padrâo" -> uma coisa so por página
apenas Exportar


*/
