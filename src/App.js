import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Content } from './components/content';
import { Header } from './components/header'
import { TITLE } from './components/header/constants';
import { SERVICE } from './services/api'

function App() {
  const [launches, setLaunches] = useState([])
  const [titleContent, setTitleContent] = useState('')
  const [event, setEvent] = useState('nextLaunch')
  
  const handleEvent = (event) => setEvent(event)

  useEffect(() => {
    const getData = async () => {
      const data = await SERVICE[event]()
      setLaunches(data)
      setTitleContent(TITLE[event])
    }
    getData()
  }, [event])

  return (
    <Flex direction="column" minH="100vh" w="100%">
      <Header handleEvent={handleEvent} />
      <Content launches={launches} titlePage={titleContent}/>
    </Flex>

  );
}

export default App;
