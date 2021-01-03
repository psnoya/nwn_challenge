import React from 'react'
import NewsSearch from "./components/NewsSearch"
import { Container, Menu, Header, Image } from 'semantic-ui-react'
import NewsIndex from './components/NewsIndex'
import logo from './nwn.png'


const App = () => {
  return (
    <>
      <Menu style={{ borderRadius: 0, background: '' }}>
        <Menu.Item>
          <Image src={logo} size='tiny' centered />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <NewsSearch />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>

        <Header as='h2' >
          Business News
          </Header>
        <p>News from around the US</p>
        <NewsIndex />
      </Container>
    </>
  )
}

export default App
