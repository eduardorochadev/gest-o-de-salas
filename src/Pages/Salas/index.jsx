import styled from "styled-components";
import Button from "../../components/Button";
import DataTable from "react-data-table-component";

import { useState } from "react";
import { useForm } from "react-hook-form";

const Salas = () => {

  const [lateralCriar, setLateralCriar] = useState(false);
  const [lateralEditar, setLateralEditar] = useState(false);
  const [salas, setSalas] = useState([
    {
      sala_id: 1,
      sala_nome: 'Bill Gates',
      sala_capacidade: 20
    },
    {
      sala_id: 2,
      sala_nome: 'Steve Jobs',
      sala_capacidade: 32
    },
    {
      sala_id: 3,
      sala_nome: 'Larry Page',
      sala_capacidade: 32
    },
  ]);
  const colunas = [
    {
      name: 'Id',
      maxWidth: '50px',
      selector: row => row.sala_id
    },
    {
      name: 'Sala',
      selector: row => row.sala_nome,
    },
    {
      name: 'Capacidade',
      selector: row => row.sala_capacidade,
      maxWidth: '120px',
      center: true
    },
    {
      name: 'Ações',
      maxWidth: '120px',
      center: true,
      selector: (row) => (
        <Actions>
          <box-icon 
            name='pencil' 
            onClick={() => {
              setValue('sala_id', row.sala_id);
              setValue('sala_nome', row.sala_nome);
              setValue('sala_capacidade', row.sala_capacidade);
              setLateralEditar(true);
            }}></box-icon>
          <box-icon 
            name='trash'
            onClick={() => deletarSala(row.sala_id)}></box-icon>
        </Actions>
      )
    }
  ]

  const { register, handleSubmit } = useForm();
  const { register: registerEditar, handleSubmit: handleSubmitEditar, setValue} = useForm();

  const cadastrarSala = (dados) => {
    dados.sala_id = salas.length + 1;
    setSalas([...salas, dados]);
    setLateralCriar(false);
  }

  const atualizarSala = (dados) => {
    const salasAtualizadas = salas.map((sala) => {
      if(sala.sala_id === dados.sala_id){
        let novaSala = {
          sala_id: dados.sala_id,
          sala_nome: dados.sala_nome,
          sala_capacidade: dados.sala_capacidade,
        }
        return novaSala;
      }
      return sala;
    });
    setSalas(salasAtualizadas);
    setLateralEditar(false);
  }
  
  const deletarSala = (sala_id) => {
    const salasRestantes = salas.filter(sala => {
      if(sala.sala_id !== sala_id){
        return sala;
      }
    });
    setSalas(salasRestantes);
    setLateralEditar(false);
  }

  return (
    <>
      <Header>
        <h1>Salas</h1>
        <Button title="Nova sala" click={() => setLateralCriar(true)} />
      </Header>

      <DataTable
        data={salas}
        columns={colunas} />

      <Overlay 
        className={lateralCriar || lateralEditar ? 'active' : ''} 
        onClick={() => {
          setLateralCriar(false);
          setLateralEditar(false);
        }} />
      
      <Lateral className={lateralCriar && 'active'}>
        <Header>
          <h3>Adicionar</h3>
          <Button 
            title={'X'} 
            classes={'circle pilled'} 
            click={() => setLateralCriar(false)} />
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

      <Lateral className={lateralEditar && 'active'}>
        <Header>
          <h3>Editar</h3>
          <Button 
            title={'X'} 
            classes={'circle pilled'} 
            click={() => setLateralEditar(false)} />
        </Header>
        <Body>
          <form onSubmit={handleSubmitEditar(atualizarSala)}>
            <Input type="hidden" { ...registerEditar('sala_id')} />
            <Label>Nome</Label>
            <Input 
              placeholder="Digite o nome da sala"
              {...registerEditar('sala_nome')} />
            <Label>Capacidade</Label>
            <Input 
              type="number"
              {...registerEditar('sala_capacidade')} />
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

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  & box-icon{
    width: 40px;
    height: 36px;
    text-align: center;
    padding: 8px;
    background-color: blueviolet;
    fill: white;
    cursor: pointer;
    border-radius: 20px;
    transition-duration: 200ms;
  }
  & box-icon:hover{
    background-color: #641da7;
  }
`;

export default Salas;