import { Layout } from 'antd';
import Headers from './pages/components/Headers'
import Footers from './pages/components/Footers'
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
