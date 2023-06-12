import styled from "styled-components";
import Button from "../../components/Button";
import DataTable from "react-data-table-component";

import { useState } from "react";
import { useForm } from "react-hook-form";

const Salas = () => {

  const [lateral, setLateral] = useState(false);
  const [salas, setSalas] = useState([
    {
      sala_nome: 'Bill Gates',
      sala_capacidade: 20
    },
    {
      sala_nome: 'Steve Jobs',
      sala_capacidade: 32
    },
    {
      sala_nome: 'Larry Page',
      sala_capacidade: 32
    },
  ]);
  const colunas = [
    {
      name: 'Sala',
      selector: row => row.sala_nome,
    },
    {
      name: 'Capacidade',
      selector: row => row.sala_capacidade,
    },
    {
      name: 'Ações',
      selector: () => (
        <>
          <Button title={'Editar'}/>
          <Button title={'Deletar'}/>
        </>
      )
    }
  ]

  const { register, handleSubmit } = useForm();

  const cadastrarSala = (dados) => {
    setSalas([...salas, dados]);
    setLateral(false);
  }

  return (
    <>
      <Header>
        <h1>Salas</h1>
        <Button title="Nova sala" click={() => setLateral(true)} />
      </Header>

      <DataTable
        data={salas}
        columns={colunas} />

      <Overlay className={lateral && 'active'} onClick={() => setLateral(false)} />
      <Lateral className={lateral && 'active'}>
        <Header>
          <h3>Adicionar</h3>
          <Button 
            title={'X'} 
            classes={'circle pilled'} 
            click={() => setLateral(false)} />
        </Header>
        <Body>
          <form onSubmit={handleSubmit(cadastrarSala)}>
            <Label>Nome</Label>
            <Input 
              placeholder="Digite o nome da sala"
              {...register('sala_nome')} />
            <Label>Capacidade</Label>
            <Input 
              type="number"
              {...register('sala_capacidade')} />
            <Button title={'Salvar'} classes={'w100'} type='submit' />
          </form>
        </Body>
      </Lateral>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  overflow: auto;
  padding-top: 26px;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000070;
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition-duration: 300ms;
  &.active{
    opacity: 1;
    visibility: visible;
  }
`;

const Lateral = styled.div`
  width: 350px;
  height: 100vh;
  background-color: #FFF;
  position: fixed;
  top: 0;
  right: -100%;
  padding: 16px;
  transition-duration: 300ms;
  transition-delay: 200ms;
  opacity: 0;
  visibility: hidden;
  z-index: 101;
  &.active{
    right: 0;
    opacity: 1;
    visibility: visible;
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #DDDDDD;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 16px;
  outline: none;
  &:focus{
    border-color: blueviolet;
  }
`;

export default Salas;