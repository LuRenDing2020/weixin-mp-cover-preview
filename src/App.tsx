import { Layout } from 'antd';
import Headers from './pages/Headers'
import Footers from './pages/Footers'
import Index from './pages/Index'

const { Content } = Layout;

function App() {
  return (
    <Layout className="app-layout">
      <Headers />
      <Content style={{ 
        padding: '64px 0 60px 0',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}>
        <Index />
      </Content>
      <Footers />
    </Layout>
  )
}

export default App
