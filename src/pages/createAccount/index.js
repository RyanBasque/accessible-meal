import React, { useMemo, useState } from 'react';

import { useAuth } from '../../context/userContext';

import CreateAccountName from '../../components/createAccountName';
import CreateAccountEmail from '../../components/createAccountEmail';
import CreateAccountIsPCD from '../../components/createAccountIsPCD';
import CreateAccountTypePCD from '../../components/createAccountTypePCD';
import CreateAccountPassword from '../../components/createAccountPassword';

import showConfirmDialog from '../../utils/showConfirmDialog';

import {
  storeLocalData, 
  removeLocalValue, 
  getLocalData,
} from '../../services/storage';

function CreateAccount({ navigation }) {
  const { user, storeUser } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isPCD, setIsPCD] = useState(true);
  const [typePCD, setTypePCD] = useState([]);
  const [password, setPassword] = useState('');
  const [renderingScreen, setRenderingScreen] = useState(0);

  const handleGetName = async () => {
    if (!name) {
      alert('Por favor, insira um nome para continuar!');
      return;
    }
    handlePostUserData('name', name, 1);
  }

  const handleGetEmail = async () => {
    if (!email) {
      alert('Por favor, insira um email para continuar!');
      return;
    }

    handlePostUserData('email', email, 2);
  }

  const handleGetIsPCD = async () => {
    handlePostUserData('isPCD', isPCD, isPCD ? 3 : 4);
  }

  const handleGetTypePCD = async () => {
    if (!typePCD.length) {
      alert("Por favor, selecione uma opção para continuar!");
      return;
    }

    showConfirmDialog(
      "Continuar", 
      "Tem certeza que deseja continuar?",
      () => handlePostUserData('typePCD', typePCD, 4),
    );
  };

  const handleGetPassword = async () => {
    if (!password) {
      alert('Por favor, insira uma senha para continuar!');
      return;
    }

    try {
      handlePostUserData(undefined, undefined, 5);
      // TODO: backend requisition
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

    setName('');
    setEmail('');
    setIsPCD(true);
    setTypePCD([]);
    setPassword('');
    setRenderingScreen((n) => n - 1);
  };

  const handlePostUserData = async (key, data, index) => {
    const userWithoutPassword = user;
    delete userWithoutPassword['password'];

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
