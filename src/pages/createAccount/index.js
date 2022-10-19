import React, { useMemo, useState } from 'react';

import { useAuth } from '../../context/userContext';

import CreateAccountName from '../../components/createAccountName';
import CreateAccountEmail from '../../components/createAccountEmail';
import CreateAccountCpf from '../../components/createAccountCpf';
import CreateAccountAddress from '../../components/createAccountAddress';
import CreateAccountIsPCD from '../../components/createAccountIsPCD';
import CreateAccountTypePCD from '../../components/createAccountTypePCD';
import CreateAccountPassword from '../../components/createAccountPassword';

import showConfirmDialog from '../../utils/showConfirmDialog';

import {
  storeLocalData, 
  removeLocalValue, 
  getLocalData,
} from '../../services/storage';
import { postData } from '../../services';

function CreateAccount({ navigation }) {
  const { user, storeUser } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [typePCD, setTypePCD] = useState([]);
  const [isPCD, setIsPCD] = useState(true);
  const [renderingScreen, setRenderingScreen] = useState(0);

  const register = async () => {
    try {
      const params = {
        name: name,
        email: email,
        cpf: cpf,
        address: address,
        isPCD: isPCD,
        typePCD: JSON.stringify(typePCD),
        password: password
      };

      await postData('/api/cliente/', params);
      navigation.navigate('login');
      alert('Usuário cadastrado com sucesso!');

    } catch {
      alert("Erro para montar requisição");
    }
  }

  const handleGetName = async () => {
    if (!name) {
      alert('Por favor, insira um nome para continuar!');
      return;
    }
    else if (name.length < 3) {
      alert('O nome precisa ter mais que 3 letras para continuar!');
      return;
    }
    handlePostUserData('name', name, 1);
  }

  const handleGetEmail = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) {
      alert('Por favor, insira um email para continuar!');
      return;
    }
    else if (!reg.test(email)) {
      alert('Por favor, insira um email válido para continuar!');
      return;
    }

    handlePostUserData('email', email, 2);
  }

  const handleGetCpf = async () => {
    if (!cpf) {
      alert('Por favor, insira um CPF para continuar!');
      return;
    }
    else if (cpf.length != 11) {
      alert('CPF inválido!');
      return;
    }
    handlePostUserData('cpf', cpf, 3);
  }

  const handleGetAddress = async () => {
    if (!address) {
      alert('Por favor, insira um endereço para continuar!');
      return;
    }
    handlePostUserData('address', address, 4);
  }

  const handleGetIsPCD = async () => {
    handlePostUserData('isPCD', isPCD, isPCD ? 5 : 6);
  }

  const handleGetTypePCD = async () => {
    if (!typePCD.length) {
      alert("Por favor, selecione uma opção para continuar!");
      return;
    }

    showConfirmDialog(
      "Continuar", 
      "Tem certeza que deseja continuar?",
      () => 
      handlePostUserData('typePCD', typePCD, 6),
    );
  };

  const handleGetPassword = async () => {
    if (!password) {
      alert('Por favor, insira uma senha para continuar!');
      return;
    }
    else if (password.length < 5) {
      alert('A senha escolhida deve conter pelo menos 5 caracteres.');
      return;
    }

    try {
      register();
    } catch (error) {
      alert("Erro na requisição");
    }
  };

  const handleBackStep = async () => {
    if (!renderingScreen) {
      setName('');
      setRenderingScreen(0);

      return;
    }

    if (isPCD) {
      setName('');
      setEmail('');
      setCpf('');
      setAddress('');
      setIsPCD(true);
      setTypePCD([]);
      setPassword('');
      setRenderingScreen((n) => n - 1);
    }
    else {
      setName('');
      setEmail('');
      setCpf('');
      setAddress('');
      setIsPCD(true);
      setTypePCD([]);
      setPassword('');
      setRenderingScreen((n) => n - 2);
    }
  };

  const handlePostUserData = async (key, data, index) => {
    const userWithoutPassword = user;
    if (userWithoutPassword) {
      delete userWithoutPassword['password'];
    }

    if (key && data) {
      const userData = { ...user, [key.toString()]: data };
      storeUser(userData);
    }

    if (index === stepScreen.length) {
      const localUserData =  await getLocalData('@user');

      if (!localUserData) {
        try {
          await storeLocalData('@user', userWithoutPassword);
        } catch (error) {
          console.error(error);
          alert("Erro na requisição");
        }
      } else {
        try {
          await removeLocalValue('@user');
          await storeLocalData('@user', userWithoutPassword);
        } catch (error) {
          console.error(error);
          alert("Erro na requisição");
        }
      }
    }

    setRenderingScreen(index);
  };

  const stepScreen = useMemo(() => [ 
    <CreateAccountName
      setName={setName}
      name={name}
      handleGetName={handleGetName}
      handleBackStep={() => { handleBackStep(); navigation.navigate('login') }}
    />,
    <CreateAccountEmail
      setEmail={setEmail}
      email={email}
      handleGetEmail={handleGetEmail}
      handleBackStep={handleBackStep}
    />,
    <CreateAccountCpf
      setCpf={setCpf}
      cpf={cpf}
      handleGetCpf={handleGetCpf}
      handleBackStep={handleBackStep}
    />,
    <CreateAccountAddress
      setAddress={setAddress}
      address={address}
      handleGetAddress={handleGetAddress}
      handleBackStep={handleBackStep}
    />,
    <CreateAccountIsPCD
      setIsPCD={setIsPCD}
      isPCD={isPCD}
      handleGetIsPCD={handleGetIsPCD}
      handleBackStep={handleBackStep}
    />,
    <CreateAccountTypePCD
      setTypePCD={setTypePCD}
      typePCD={typePCD}
      handleGetTypePCD={handleGetTypePCD}
      handleBackStep={handleBackStep}
    />,
    <CreateAccountPassword
      setPassword={setPassword}
      password={password}
      handleGetPassword={handleGetPassword}
      handleBackStep={handleBackStep}
    />
  ]);

  return (
    <>
      {stepScreen[renderingScreen]}
    </>
  );
}

export default CreateAccount;
