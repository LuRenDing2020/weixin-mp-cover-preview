import { Layout, Typography } from 'antd';
import './Headers.css'
import OfficialAccountLogo from '../assets/official-accounts-logo.svg';

const { Header } = Layout;
const { Title } = Typography;

const Headers = () => {
  return (
    <Layout>
      <Header style={{ 
        background: '#fff',  
        borderBottom: '1px solid #e8e8e8',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          height: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
        }}>
          <img src={OfficialAccountLogo} alt="logo" style={{ height: '40px', marginRight: '20px' }} />
          <div style={{ width: '1px', height: '24px', backgroundColor: '#e8e8e8', marginRight: '20px' }} />
          <Title level={4} style={{ margin: 0 }}>封面预览工具</Title>
        </div>
      </Header>
    </Layout>
  )
}

export default Headers