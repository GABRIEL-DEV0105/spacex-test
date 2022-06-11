import { Heading, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import { Header } from './components/header'
import { Body } from './components/body';
import { api } from './components/services/api';

function App() {

  // const [handleRender, setHandleRender] = useState(false);
  const [nextLaunchApi, setNextLaunchApi] = useState(null);
  const [latestLaunchApi, setLatestLaunchApi] = useState(null);
  const [pastLaunchApi, setPastLaunchApi] = useState(null);
  const [upComingLaunchApi, setUpComingLaunchApi] = useState(null);

  const getNextLaunch = () => {
    api.get('/next')
      .then(response => {
        setNextLaunchApi(response.data)
        console.log(nextLaunchApi)
      })
  }
  const getLatestLaunch = () => {
    api.get('/latest')
      .then(response => {
        setLatestLaunchApi(response.data)
        console.log(latestLaunchApi)

      })
  }

  const getPastLaunch = () => {
    api.get('/past')
      .then(response => {
        setPastLaunchApi(response.data)
      })
  }

  const getUpComingLaunch = () => {
    api.get('/upcomming')
      .then(response => {
        setUpComingLaunchApi(response.data)
      })
  }

  // useEffect(() => {
  //   <Heading>
  //     “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
  //     -Elon Musk
  //     “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
  //     -Elon Musk
  //   </Heading>
  // }, [])

  return (
    <VStack bg='#292929'>
      <Header
        nextLaunch={getNextLaunch}
        latestLaunch={getLatestLaunch}
        pastLaunch={getPastLaunch}
        upComingLaunch={getUpComingLaunch} />
      <Body
        next={nextLaunchApi}
        latest={latestLaunchApi}
        past={pastLaunchApi}
        upComing={upComingLaunchApi} />
    </VStack>

  );
}

export default App;
