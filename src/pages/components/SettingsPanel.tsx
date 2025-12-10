import React from 'react';
import { MinusOutlined, PlusOutlined, SettingOutlined, UndoOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Input, Switch, Typography, Upload } from 'antd';
import defaultAvatar from '../../assets/jsj_avatar.jpg';

const { Text } = Typography;

interface ArticleConfig {
  count: number;
  titles: Record<string, string>;
  covers: Record<string, string>;
}

interface SettingsPanelProps {
  avatar: string;
  setAvatar: (value: string) => void;
  accountName: string;
  setAccountName: (value: string) => void;
  introduction: string;
  setIntroduction: (value: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  articleConfig: ArticleConfig;
  setArticleConfig: (config: ArticleConfig) => void;
  handleReset: () => void;
  setShowSettingsModal: (value: boolean) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  avatar,
  setAvatar,
  accountName,
  setAccountName,
  introduction,
  setIntroduction,
  isDarkMode,
  setIsDarkMode,
  articleConfig,
  setArticleConfig,
  handleReset,
  setShowSettingsModal
}) => {
  const { count: articleCount, titles: articleTitles, covers: articleCovers } = articleConfig;
  return (
    <Card
      title="配置"
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      extra={
        <div>
          <Button icon={<UndoOutlined />} danger size="small" style={{ marginRight: '8px' }} onClick={handleReset} >重置</Button>
          <Button icon={<SettingOutlined />} size="small" onClick={() => setShowSettingsModal(true)} >更多设置</Button>
        </div>
      }
    >
      <div style={{ paddingRight: '8px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Text strong>头像</Text>
        <Flex vertical gap="small">
          <Flex align="center" gap="middle" style={{ marginTop: 8 }}>
            <img
              src={avatar}
              alt="头像"
              style={{
                width: 64,
                height: 64,
                borderRadius: '6px',
                objectFit: 'cover',
                border: '1px solid #f0f0f0'
              }}
            />
            <div style={{ flex: 1 }}>
              <Upload.Dragger
                fileList={[]}
                beforeUpload={(file) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = (e) => {
                    if (e.target?.result) {
                      setAvatar(e.target.result as string);
                    }
                  };
                  return false;
                }}
                accept="image/*"
                showUploadList={false}
              >
                <Button
                  icon={<UploadOutlined />}
                  type={avatar === defaultAvatar ? 'default' : 'primary'}
                >
                  {avatar === defaultAvatar ? '上传头像' : '更换头像'}
                </Button>
              </Upload.Dragger>
            </div>
          </Flex>
          <Flex vertical gap="small" style={{ marginTop: 4 }}>
            <Text strong>账号名称</Text>
            <Input
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #d9d9d9',
                borderRadius: 4
              }}
            />
          </Flex>
          <Flex vertical gap="small" style={{ marginTop: 4 }}>
            <Text strong>简介</Text>
            <Input
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #d9d9d9',
                borderRadius: 4
              }}
            />
          </Flex>
        </Flex>
        <Flex vertical gap="small" style={{ marginTop: 12 }}>
          <Flex align="center" justify="space-between">
            <Text strong>深色模式</Text>
            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              checkedChildren="开"
              unCheckedChildren="关"
              style={{ backgroundColor: isDarkMode ? '#1890ff' : '#d9d9d9' }}
            />
          </Flex>
        </Flex>
        <div style={{ margin: '12px 0' }} />
        <Flex vertical gap="small">
          <Text strong>文章数量</Text>
          <Flex align="center" gap={0} style={{ marginTop: 4 }}>
            <Button
              size="small"
              disabled={articleCount <= 1}
              onClick={() => setArticleConfig({
                ...articleConfig,
                count: Math.max(1, articleCount - 1)
              })}
              style={{
                width: 40,
                height: 32,
                cursor: articleCount <= 1 ? 'not-allowed' : 'pointer',
                opacity: articleCount <= 1 ? 0.5 : 1
              }}
            >
              <MinusOutlined style={{ fontSize: 16 }} />
            </Button>
            <div
              style={{
                minWidth: 60,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTop: '1px solid #d9d9d9',
                borderBottom: '1px solid #d9d9d9',
                textAlign: 'center'
              }}
            >
              {articleCount}
            </div>
            <Button
              size="small"
              disabled={articleCount >= 8}
              onClick={() => setArticleConfig({
                ...articleConfig,
                count: Math.min(8, articleCount + 1)
              })}
              style={{
                width: 40,
                height: 32,
                cursor: articleCount >= 8 ? 'not-allowed' : 'pointer',
                opacity: articleCount >= 8 ? 0.5 : 1
              }}
            >
              <PlusOutlined style={{ fontSize: 16 }} />
            </Button>
          </Flex>
          <div style={{ flex: 1, maxHeight: '300px', overflow: 'auto', minHeight: 0 }}
            className='light-scrollbar'>
            {Array.from({ length: articleCount }).map((_, idx) => (
              <div key={idx} style={{ marginTop: 12 }}>
                <Text strong>文章{idx + 1}</Text>
                <Flex align="center" gap={8} style={{ marginTop: 4 }}>
                  <Input
                    maxLength={64}
                    placeholder={`请输入标题（最多64字）`}
                    value={articleTitles[`title_${idx}`] || ''}
                    onChange={(e) => setArticleConfig({
                      ...articleConfig,
                      titles: {
                        ...articleTitles,
                        [`title_${idx}`]: e.target.value
                      }
                    })}
                    style={{
                      padding: '4px 8px',
                      border: '1px solid #d9d9d9',
                      borderRadius: 4,
                      flex: 1
                    }}
                  />
                  <Text style={{ fontSize: 12, color: '#999' }}>
                    {(articleTitles[`title_${idx}`] || '').length}/64
                  </Text>
                  <Upload.Dragger
                    fileList={[]}
                    beforeUpload={(file) => {
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onload = (e) => {
                        if (e.target?.result) {
                          setArticleConfig({
                        ...articleConfig,
                        covers: {
                          ...articleCovers,
                          [`cover_${idx}`]: e.target.result as string
                        }
                      });
                        }
                      };
                      return false;
                    }}
                    accept="image/*"
                    showUploadList={false}
                    style={{ width: 'auto' }}
                  >
                    <Button
                      icon={<UploadOutlined />}
                      size="small"
                      type={articleCovers[`cover_${idx}`] ? 'default' : 'primary'}
                    >
                      {articleCovers[`cover_${idx}`] ? '更换' : '上传'}
                    </Button>
                  </Upload.Dragger>
                </Flex>
              </div>
            ))}
          </div>
        </Flex>
      </div>
    </Card>
  );
};

export default SettingsPanel;