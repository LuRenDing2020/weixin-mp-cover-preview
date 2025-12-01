import { useState } from 'react';
import { MinusOutlined, PlusOutlined, SafetyCertificateOutlined, SettingOutlined, UndoOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Flex, Input, Modal, Row, Switch, Typography, Upload, message } from "antd";
import SettingsModal from './components/SettingsModal';
import CcsfuLogo from '../assets/ccsfu_logo.png';
import defaultAvatar from '../assets/jsj_avatar.jpg';
import './Index.css';

const { Text } = Typography;

const Index = () => {
  const contentHeight = `calc(100vh - 64px - 60px - 32px)`;
  const [avatar, setAvatar] = useState<string>(defaultAvatar);
  const [accountName, setAccountName] = useState<string>("长师计算机");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [articleCount, setArticleCount] = useState<number>(2);
  const [introduction, setIntroduction] = useState<string>("关注计算机科学与技术学院（软件学院）公众平台，了解学院最新动态。");
  const [articleTitles, setArticleTitles] = useState<Record<string, string>>({});
  const [articleCovers, setArticleCovers] = useState<Record<string, string>>({
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
        setArticleCount(2);
        setIntroduction('关注计算机科学与技术学院（软件学院）公众平台，了解学院最新动态。');
        setCertificationInfo('长春师范大学');
        setIpLocation('吉林 长春');
        setForwardUserAvatar(CcsfuLogo);
        setFriendsCircleUsername('长春师范大学');
        setArticleTitles({});
        setArticleCovers({});
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
                <Card style={{
                  backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#333333',
                  borderRadius: '8px',
                  border: '1px solid #e8e8e8',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '680px',
                  overflow: 'auto'
                }}
                  className={isDarkMode ? 'dark-scrollbar' : 'light-scrollbar'}>
                  <Flex align="center" gap="middle" style={{ marginBottom: '16px' }}>
                    <div style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={avatar}
                        alt="账户头像"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <Flex vertical gap={2}>
                      <Text style={{ fontSize: '18px', color: isDarkMode ? '#ffffff' : '#000000' }}>{accountName}</Text>
                      <Flex align="center" gap={2}>
                        <Text style={{ color: isDarkMode ? '#cccccc' : '#000000ff', fontSize: '12px' }}>{certificationInfo}</Text>
                        <SafetyCertificateOutlined style={{ color: '#1890ff' }} />
                      </Flex>
                      <Text style={{ color: isDarkMode ? '#999999' : '#999999', fontSize: '12px' }}>{ipLocation}</Text>
                    </Flex>
                  </Flex>
                  <div style={{
                    marginBottom: '16px',
                    fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{introduction}</Text>
                  </div>
                  <div style={{
                    marginBottom: '16px',
                    fontSize: '14px',
                    color: isDarkMode ? '#999999' : '#666666'
                  }}>
                    <div style={{ marginBottom: '4px' }}>很多篇原创内容</div>
                  </div>
                  <Flex gap={8} style={{ marginBottom: '16px' }}>
                    <Button
                      style={{
                        flex: 1,
                        backgroundColor: isDarkMode ? '#333333' : '#f5f5f5',
                        color: isDarkMode ? '#ffffff' : '#666666',
                        border: 'none',
                        borderRadius: '4px'
                      }}
                    >
                      已关注公众号
                    </Button>
                    <Button
                      style={{
                        flex: 1,
                        backgroundColor: isDarkMode ? '#333333' : '#f5f5f5',
                        color: isDarkMode ? '#ffffff' : '#666666',
                        border: 'none',
                        borderRadius: '4px'
                      }}
                    >
                      发消息
                    </Button>
                  </Flex>
                  <div style={{ width: '75px', paddingTop: '8px' }}>
                    <Flex>
                      <div style={{
                        flex: 1,
                        textAlign: 'center',
                        color: isDarkMode ? '#ffffff' : '#333333',
                        fontWeight: 'bold',
                        padding: '8px 0',
                        borderBottom: `2px solid ${isDarkMode ? '#ffffff' : '#333333'}`
                      }}>
                        消息
                      </div>
                      <div style={{
                        flex: 1,
                        textAlign: 'center',
                        color: isDarkMode ? '#999999' : '#999999',
                        padding: '8px 0'
                      }}>
                        服务
                      </div>
                    </Flex>
                  </div>
                  {articleCount > 0 && (
                    <div style={{
                      flex: 1,
                      paddingTop: '16px'
                    }}>
                      <Text style={{ fontSize: '12px', color: isDarkMode ? '#999999' : '#999999' }}>今天</Text>
                      {Array.from({ length: articleCount }).map((_, idx) => (
                        <div key={idx} style={{ marginTop: '12px', paddingBottom: '12px', position: 'relative' }}>
                          {idx < articleCount - 1 && (
                            <div style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: 'calc(100% - 70px)',
                              height: '1px',
                              backgroundColor: isDarkMode ? '#333333' : '#f0f0f0'
                            }}></div>
                          )}
                          <Flex align="flex-start" gap={12}>
                            <div style={{ flex: 1 }}>
                              <Text style={{ fontSize: '14px', color: isDarkMode ? '#ffffff' : '#333333', marginBottom: '4px', display: 'block', lineHeight: '1.4' }}>
                                {(articleTitles[`title_${idx}`]?.length > 32
                                  ? articleTitles[`title_${idx}`].slice(0, 31) + '…'
                                  : articleTitles[`title_${idx}`]) || `文章${idx + 1}`}
                              </Text>
                              <Flex align="center" gap={4} style={{ marginTop: '4px' }}>
                                <Text style={{ fontSize: '14px', color: isDarkMode ? '#999999' : '#999999' }}>阅读200</Text>
                                <Text style={{ fontSize: '14px', color: isDarkMode ? '#999999' : '#999999' }}>赞1</Text>
                              </Flex>
                            </div>
                            {articleCovers[`cover_${idx}`] ? (
                              <img
                                src={articleCovers[`cover_${idx}`]}
                                alt={`文章${idx + 1}封面`}
                                style={{ width: '60px', height: '60px', borderRadius: '4px', objectFit: 'cover' }}
                              />
                            ) : (
                              <div style={{ width: '60px', height: '60px', borderRadius: '4px', backgroundColor: '#f0f0f0' }}></div>
                            )}
                          </Flex>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </Card>
            </Col>

            {/* Col-2 */}
            <Col span={6}>
              <Card title="聊天页视图" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Card
                  style={{
                    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                    color: isDarkMode ? '#ffffff' : '#333333',
                    borderRadius: '8px',
                    border: '1px solid #e8e8e8',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '680px',
                    overflow: 'auto'
                  }}
                  bodyStyle={{ padding: 0 }}
                  className={isDarkMode ? 'dark-scrollbar' : 'light-scrollbar'}
                >
                  <div style={{
                    flex: 1,
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}>
                    <div style={{
                      flex: 1
                    }}>
                      {articleCount === 1 ? (
                        <Card
                          style={{
                            width: '330px',
                            margin: '0 auto',
                            borderRadius: 4,
                            overflow: 'hidden',
                            border: `1px solid ${isDarkMode ? '#333333' : '#f0f0f0'}`
                          }}
                          bodyStyle={{ padding: 0 }}
                        >
                          <div
                            style={{
                              width: '100%',
                              height: 0,
                              paddingBottom: '42.55%',
                              position: 'relative',
                              backgroundColor: '#f0f0f0'
                            }}
                          >
                            {articleCovers[`cover_0`] ? (
                              <img
                                src={articleCovers[`cover_0`]}
                                alt={`文章封面`}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            ) : (
                              <div style={{ width: '60px', height: '60px', borderRadius: '4px', backgroundColor: '#f0f0f0' }}></div>
                            )}
                          </div>
                          <div
                            style={{
                              padding: '12px 16px',
                              fontSize: 14,
                              color: isDarkMode ? '#ffffff' : '#333333',
                              backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'
                            }}
                          >
                            {(articleTitles[`title_0`]?.length > 62
                              ? articleTitles[`title_0`].slice(0, 62) + '...'
                              : articleTitles[`title_0`]) || '文章1'}
                          </div>
                        </Card>
                      ) : (
                        <Card
                          style={{
                            width: '330px',
                            margin: '0 auto',
                            borderRadius: 4,
                            overflow: 'hidden',
                            border: `1px solid ${isDarkMode ? '#333333' : '#e8e8e8'}`
                          }}
                          bodyStyle={{ padding: 0 }}
                        >
                          <div
                            style={{
                              width: '100%',
                              height: 0,
                              paddingBottom: '42.55%',
                              position: 'relative',
                              backgroundColor: isDarkMode ? '#333333' : '#f0f0f0'
                            }}
                          >
                            {articleCovers[`cover_0`] && (
                              <img
                                src={articleCovers[`cover_0`]}
                                alt={`文章封面`}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            )}
                            {articleCovers[`cover_0`] && (
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '60%',
                                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0,0,0,0) 100%)'
                                }}
                              />
                            )}
                            <div
                              style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '12px 16px',
                                fontSize: 16,
                                color: articleCovers[`cover_0`] ? '#ffffff' : (isDarkMode ? '#ffffff' : '#333333'),
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}
                            >
                              {(articleTitles[`title_0`]?.length > 36
                                ? articleTitles[`title_0`].slice(0, 35) + '…'
                                : articleTitles[`title_0`]) || '文章1'}
                            </div>
                          </div>
                          <div style={{ padding: '12px 16px', backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff' }}>
                            {Array.from({ length: articleCount }).slice(1).map((_, idx) => (
                              <>
                                {idx > 0 && (
                                  <div style={{
                                    height: '0.5px',
                                    backgroundColor: isDarkMode ? '#444444' : '#e8e8e8',
                                    marginBottom: '12px',
                                    marginRight: '70px'
                                  }}></div>
                                )}
                                <div key={idx} style={{ marginBottom: '10px', display: 'flex', gap: '8px', height: '60px', alignItems: 'center' }}>
                                  <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                                    <div
                                      style={{
                                        fontSize: 14,
                                        color: isDarkMode ? '#ffffff' : '#333333',
                                        lineHeight: '20px',
                                        maxHeight: '40px',
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        wordBreak: 'break-all'
                                      }}
                                    >
                                      {articleTitles[`title_${idx + 1}`] || `文章${idx + 2}`}
                                    </div>
                                  </div>
                                  {articleCovers[`cover_${idx + 1}`] ? (
                                    <img
                                      src={articleCovers[`cover_${idx + 1}`]}
                                      alt={`文章${idx + 2}封面`}
                                      style={{ width: 60, height: 60, borderRadius: '4px', objectFit: 'cover', flexShrink: 0 }}
                                    />
                                  ) : (
                                    <div style={{ width: 60, height: 60, borderRadius: '4px', backgroundColor: isDarkMode ? '#333333' : '#f0f0f0', flexShrink: 0 }}></div>
                                  )}
                                </div>
                              </>
                            ))}
                          </div>
                        </Card>
                      )}
                    </div>
                  </div>
                </Card>
              </Card>
            </Col>

            {/* Col-3 */}
            <Col span={6}>
              <Card title="转发视图" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Card
                  style={{
                    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                    color: isDarkMode ? '#ffffff' : '#333333',
                    borderRadius: '8px',
                    border: '1px solid #e8e8e8',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '334px'
                  }}
                  bodyStyle={{ padding: '16px' }}>
                  <div>
                    <Text strong style={{ color: isDarkMode ? '#ffffff' : '#333333' }}>消息转发</Text>
                  </div>
                  <Divider style={{ marginTop: '12px', borderColor: isDarkMode ? '#333333' : '#e8e8e8' }} />
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '250px', overflow: 'auto' }} className={isDarkMode ? 'dark-scrollbar' : 'light-scrollbar'}>
                    {Array.from({ length: Math.min(articleCount, 3) }).map((_, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <img
                          src={forwardUserAvatar}
                          alt="头像"
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: '4px',
                            objectFit: 'cover'
                          }}
                        />
                        <div style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                          <div style={{
                            backgroundColor: isDarkMode ? '#333333' : '#f0f0f0',
                            borderRadius: '4px',
                            padding: '8px 12px',
                            maxWidth: '280px',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            <div style={{
                              fontSize: '14px',
                              color: isDarkMode ? '#ffffff' : '#333',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              marginBottom: '8px',
                              width: '100%',
                              boxSizing: 'border-box'
                            }}>
                              {(articleTitles[`title_${idx}`]?.length > 0
                                ? (articleTitles[`title_${idx}`].length > 35
                                  ? articleTitles[`title_${idx}`].slice(0, 35) + '...'
                                  : articleTitles[`title_${idx}`])
                                : `文章${idx + 1}`)}
                            </div>
                            <div style={{
                              alignSelf: 'flex-end',
                              marginBottom: '8px'
                            }}>
                              {articleCovers[`cover_${idx}`] ? (
                                <img
                                  src={articleCovers[`cover_${idx}`]}
                                  alt={`文章${idx + 1}封面`}
                                  style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '4px',
                                    objectFit: 'cover'
                                  }}
                                />
                              ) : (
                                <div style={{
                                  width: '45px',
                                  height: '45px',
                                  borderRadius: '4px',
                                  backgroundColor: isDarkMode ? '#444444' : '#e0e0e0',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                </div>
                              )}
                            </div>
                            <Divider style={{
                              margin: '0 0 1px 0',
                              borderColor: isDarkMode ? '#555555' : '#d9d9d9',
                              height: '1px'
                            }} />
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                            }}>
                              <img
                                src={avatar}
                                alt="账号头像"
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '50%',
                                  marginRight: '4px'
                                }}
                              />
                              <span style={{ fontSize: '12px', color: '#999' }}>{accountName}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card
                  style={{
                    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                    color: isDarkMode ? '#ffffff' : '#333333',
                    borderRadius: '8px',
                    border: '1px solid #e8e8e8',
                    marginTop: '12px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '334px'
                  }}
                  bodyStyle={{ padding: '16px' }}
                >
                  <div>
                    <Text strong style={{ color: isDarkMode ? '#ffffff' : '#333333' }}>朋友圈转发</Text>
                  </div>
                  <Divider style={{ marginTop: '12px', marginBottom: '8px', borderColor: isDarkMode ? '#333333' : '#e8e8e8' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxHeight: '250px', overflow: 'auto' }} className={isDarkMode ? 'dark-scrollbar' : 'light-scrollbar'}>
                    {Array.from({ length: articleCount }).map((_, idx) => {
                      return (
                        <>
                          <div style={{ padding: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                              <img
                                src={forwardUserAvatar}
                                alt="用户头像"
                                style={{
                                  width: '36px',
                                  height: '36px',
                                  borderRadius: '4px',
                                  marginRight: '12px'
                                }}
                              />
                              <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                                  <span style={{ color: '#546c94', fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>
                                    {friendsCircleUsername}
                                  </span>
                                </div>
                                <div style={{
                                  backgroundColor: isDarkMode ? '#333333' : '#f5f5f5',
                                  border: 'none',
                                  borderRadius: '0',
                                  padding: '2px',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}>
                                  <div style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>
                                    {articleCovers[`cover_${idx}`] ? (
                                      <img
                                        src={articleCovers[`cover_${idx}`]}
                                        alt="文章封面"
                                        style={{
                                          width: '35px',
                                          height: '35px',
                                          borderRadius: '0',
                                          objectFit: 'cover'
                                        }}
                                      />
                                    ) : (
                                      <div style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: isDarkMode ? '#444444' : '#f0f0f0'
                                      }} />
                                    )}
                                  </div>
                                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <div style={{
                                      fontSize: '14px',
                                      color: isDarkMode ? '#ffffff' : '#333333',
                                      lineHeight: '1.4',
                                      display: '-webkit-box',
                                      WebkitLineClamp: 2,
                                      WebkitBoxOrient: 'vertical',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      textAlign: 'left'
                                    }}>
                                      {articleTitles[`title_${idx}`] || `文章${idx + 1}`}
                                    </div>
                                  </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}>
                                  <span style={{ fontSize: '12px', color: '#546c94' }}>公众号 · {accountName}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0' }}>
                                  <span style={{ fontSize: '12px', color: '#999' }}>
                                    1分钟前
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {idx < articleCount - 1 && (
                            <Divider style={{
                              margin: '0',
                              borderColor: isDarkMode ? '#333333' : '#e8e8e8',
                            }} />
                          )}
                        </>
                      );
                    })}
                  </div>
                </Card>
              </Card>
            </Col>

            {/* Col-4 */}
            <Col span={6}>
              <Card
                title="配置"
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                extra={
                  <div>
                    <Button icon={<UndoOutlined />} danger size="small" style={{ marginRight: '8px' }} onClick={() => handleReset()} >重置</Button>
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
                  <Divider style={{ margin: '12px 0' }} />
                  <Flex vertical gap="small">
                    <Text strong>文章数量</Text>
                    <Flex align="center" gap={0} style={{ marginTop: 4 }}>
                      <Button
                        size="small"
                        disabled={articleCount <= 1}
                        onClick={() => setArticleCount(Math.max(1, articleCount - 1))}
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
                        onClick={() => setArticleCount(Math.min(8, articleCount + 1))}
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
                              onChange={(e) => setArticleTitles({
                                ...articleTitles,
                                [`title_${idx}`]: e.target.value
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
                                    setArticleCovers({
                                      ...articleCovers,
                                      [`cover_${idx}`]: e.target.result as string
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