import { VStack } from '@chakra-ui/react';
import { Body } from './components/body';
import { Header } from './components/header'

function App() {
  return (
    <VStack bg='#292929'>
      <Header />
      <Body />
    </VStack>

  );
}

export default App;
