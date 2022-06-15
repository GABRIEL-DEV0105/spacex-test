import { VStack } from '@chakra-ui/react';
import { useState } from 'react'
import { Header } from './components/header'
import { Body } from './components/body';
import { api } from './components/services/api';

function App() {
  const [apiData, setApiData] = useState(null);
  console.log(apiData)
  const getNextLaunch = () => {
    api.get('/next')
      .then(response => {
        setApiData([response.data])
      })
  }

  const getLatestLaunch = () => {
    api.get('/latest')
      .then(response => {
        setApiData([response.data])
      })
  }

  const getPastLaunch = () => {
    api.get('/past')
      .then(response => {
        setApiData(response.data)
      })
  }

  const getUpComingLaunch = () => {
    api.get('/upcoming')
      .then(response => {
        setApiData(response.data)
      })
  }


  return (
    <VStack bg='#292929' h={'2000px'}>
      <Header
        next={getNextLaunch}
        latest={getLatestLaunch}
        past={getPastLaunch}
        upComing={getUpComingLaunch}
      />
      <Body apiData={apiData} />
    </VStack>

  );
}

export default App;
