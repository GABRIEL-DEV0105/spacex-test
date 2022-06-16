import { Flex } from '@chakra-ui/react';
import { Header } from './components/header'
import { api } from './services/api'


function App() {
  const getNextLaunch = () => {
    api.get('/next')
      .then(response => {
        // setNextLaunchApi(response.data)
        console.log('next', response)
      })
  }
  const getLatestLaunch = () => {
    api.get('/latest')
      .then(response => {
        // setLatestLaunchApi(response.data)
        console.log('last', response)

      })
  }

  const getPastLaunch = () => {
    api.get('/past')
      .then(response => {
        // setPastLaunchApi(response.data)
        console.log('past', response)
      })
  }

  const getUpComingLaunch = () => {
    api.get('/upcoming')
      .then(response => {
        // setUpComingLaunchApi(response.data)
        console.log('up', response)
      })
  }

  return (
    <Flex direction="column" minH="100vh" w="100%">
      <Header
        latestLaunch={getLatestLaunch}
        nextLaunch={getNextLaunch}
        pastLaunch={getPastLaunch}
        upComingLaunch={getUpComingLaunch}
      />
    </Flex>

  );
}

export default App;
