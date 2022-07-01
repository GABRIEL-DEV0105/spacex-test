import { VStack } from '@chakra-ui/react';
import { useState } from 'react'
import { SideBar } from './components/header'
import { Body } from './components/body';
import { api } from './components/services/api';

function App() {
  const [apiData, setApiData] = useState(null);
  const [headerTitle, setHeaderTitle] = useState(null);

  const getNextLaunch = () => {
    setHeaderTitle('Próximo Lançameto')
    api.get('/next')
      .then(response => {
        setApiData([response.data])

      })
  }

  const getLatestLaunch = () => {
    setHeaderTitle('Último Lançameto')
    api.get('/latest')
      .then(response => {
        setApiData([response.data])
      })
  }

  const getPastLaunch = () => {
    setHeaderTitle('Lançametos Passados')
    api.get('/past')
      .then(response => {
        setApiData(response.data)
      })
  }

  const getUpComingLaunch = () => {
    setHeaderTitle('Lançametos Futuros')
    api.get('/upcoming')
      .then(response => {
        setApiData(response.data)
      })
  }


  return (
    <VStack bg='#292929' minH='100vh'>
      <SideBar
        next={getNextLaunch}
        latest={getLatestLaunch}
        past={getPastLaunch}
        upComing={getUpComingLaunch}
      />
      <Body
        apiData={apiData}
        headerTitle={headerTitle} />
    </VStack>

  );
}

export default App;
