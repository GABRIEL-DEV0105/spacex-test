import { VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import { Header } from './components/header'
import { Body } from './components/body';


function App() {

  const [handleRender, setHandleRender] = useState(false);

  const getNextLaunch = () => {
    setHandleRender(true)

  }

  useEffect(() => {
    getNextLaunch()
  }, [])

  return (
    <VStack bg='#292929'>
      <Header handleRender={handleRender} nextLaunch={getNextLaunch} />
      <Body handleRender={handleRender} />
    </VStack>

  );
}

export default App;
