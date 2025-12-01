import { Layout } from 'antd';
import './Headers.css'

const { Footer } = Layout;

const Footers = () => {
  return (
    <Layout>
          <Footer style={{ textAlign: 'center', background: '#fafafa', color: '#666666', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999 }}>
            新媒体中心 © {new Date().getFullYear()} 计算机科学与技术学院（软件学院）
          </Footer>
    </Layout>
  )
}

export default Footers
