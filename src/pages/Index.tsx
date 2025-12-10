import { useState } from 'react';
import { Card, Col, Row, Modal, message } from "antd";
import SettingsModal from './components/SettingsModal';
import SettingsPanel from './components/SettingsPanel';
import HomeView from './components/HomeView';
import ChatView from './components/ChatView';
import ForwardView from './components/ForwardView';
import CcsfuLogo from '../assets/ccsfu_logo.png';
import defaultAvatar from '../assets/jsj_avatar.jpg';
import './Index.css';

const Index = () => {
  const contentHeight = `calc(100vh - 64px - 60px - 32px)`;
  const [avatar, setAvatar] = useState<string>(defaultAvatar);
  const [accountName, setAccountName] = useState<string>("长师计算机");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [introduction, setIntroduction] = useState<string>("关注计算机科学与技术学院（软件学院）公众平台，了解学院最新动态。");
  const [articleConfig, setArticleConfig] = useState({
    count: 2,
    titles: {} as Record<string, string>,
    covers: {} as Record<string, string>
  });
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [certificationInfo, setCertificationInfo] = useState<string>("长春师范大学");
  const [ipLocation, setIpLocation] = useState<string>("吉林 长春");
  const [forwardUserAvatar, setForwardUserAvatar] = useState<string>(CcsfuLogo);
  const [friendsCircleUsername, setFriendsCircleUsername] = useState<string>("长春师范大学");

  const handleReset = () => {
    Modal.confirm({
      title: '确认重置',
      content: '确定要清空所有配置内容吗？此操作不可恢复。',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        setArticleConfig({
          count: 2,
          titles: {} as Record<string, string>,
          covers: {} as Record<string, string>
        });
        setIntroduction('关注计算机科学与技术学院（软件学院）公众平台，了解学院最新动态。');
        setCertificationInfo('长春师范大学');
        setIpLocation('吉林 长春');
        setForwardUserAvatar(CcsfuLogo);
        setFriendsCircleUsername('长春师范大学');
        setAvatar(defaultAvatar);
        setAccountName('长师计算机');
        setIsDarkMode(false);
        message.success('所有配置已重置');
      }
    });
  };

  const renderContent = () => {
    return (
      <div className="index-container">
        <div style={{ height: contentHeight, padding: '0 16px' }}>
          <Row gutter={10} style={{ height: '100%' }}>
            {/* Col-1 */}
            <Col span={6}>
              <Card className="info-card" title="主页视图" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <HomeView
                  isDarkMode={isDarkMode}
                  avatar={avatar}
                  accountName={accountName}
                  certificationInfo={certificationInfo}
                  ipLocation={ipLocation}
                  introduction={introduction}
                  articleCount={articleConfig.count}
                  articleTitles={articleConfig.titles}
                  articleCovers={articleConfig.covers}
                />
              </Card>
            </Col>

            {/* Col-2 */}
            <Col span={6}>
              <Card title="聊天页视图" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <ChatView
                  isDarkMode={isDarkMode}
                  articleCount={articleConfig.count}
                  articleTitles={articleConfig.titles}
                  articleCovers={articleConfig.covers}
                />
              </Card>
            </Col>

            {/* Col-3 */}
            <Col span={6}>
              <Card title="转发视图" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <ForwardView
                  isDarkMode={isDarkMode}
                  articleCount={articleConfig.count}
                  articleTitles={articleConfig.titles}
                  articleCovers={articleConfig.covers}
                  forwardUserAvatar={forwardUserAvatar}
                  accountName={accountName}
                  avatar={avatar}
                  friendsCircleUsername={friendsCircleUsername}
                />
              </Card>
            </Col>

            {/* Col-4 */}
            <Col span={6}>
              <SettingsPanel
                avatar={avatar}
                setAvatar={setAvatar}
                accountName={accountName}
                setAccountName={setAccountName}
                introduction={introduction}
                setIntroduction={setIntroduction}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                articleConfig={articleConfig}
                setArticleConfig={setArticleConfig}
                handleReset={handleReset}
                setShowSettingsModal={setShowSettingsModal}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  const content = renderContent();

  return (
    <>
      {content}
      <SettingsModal
        open={showSettingsModal}
        onCancel={() => setShowSettingsModal(false)}
        certificationInfo={certificationInfo}
        setCertificationInfo={setCertificationInfo}
        ipLocation={ipLocation}
        setIpLocation={setIpLocation}
        friendsCircleUsername={friendsCircleUsername}
        setFriendsCircleUsername={setFriendsCircleUsername}
        forwardUserAvatar={forwardUserAvatar}
        setForwardUserAvatar={setForwardUserAvatar}
        CcsfuLogo={CcsfuLogo}
      />
    </>
  );
}

export default Index;