import { useState } from 'react';
import { Typography, Flex, Col, Row, Card, Divider, Button, Input, Upload, Switch } from "antd"
import './Index.css'

// 导入默认头像图片
import defaultAvatar from '../assets/jsj_avatar.jpg';
import CcsfuLogo from '../assets/ccsfu_logo.png';
import { SafetyCertificateOutlined, UploadOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Index = () => {
  const contentHeight = `calc(100vh - 64px - 60px - 32px)`;
  const [avatar, setAvatar] = useState<string>(defaultAvatar);
  const [accountName, setAccountName] = useState<string>("长师计算机");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [articleCount, setArticleCount] = useState<number>(3);
  const [introduction, setIntroduction] = useState<string>("关注计算机科学与技术学院（软件学院）公众平台，了解学院最新动态。");
  const [articleTitles, setArticleTitles] = useState<Record<string, string>>({});
  const [articleCovers, setArticleCovers] = useState<Record<string, string>>({});

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
                    border: '1px solid #e8e8e8'
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
                      <Text style={{ color: isDarkMode ? '#cccccc' : '#000000ff', fontSize: '12px' }}>长春师范大学</Text>
                      <SafetyCertificateOutlined style={{ color: '#1890ff' }} />
                    </Flex>
                    <Text style={{ color: isDarkMode ? '#999999' : '#999999', fontSize: '12px' }}>吉林 长春</Text>
                  </Flex>
                </Flex>

                {/* 简介 */}
                <div style={{
                  marginBottom: '16px',
                  fontSize: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{introduction}</Text>
                </div>

                {/* 统计数据 */}
                <div style={{
                  marginBottom: '16px',
                  fontSize: '14px',
                  color: isDarkMode ? '#999999' : '#666666'
                }}>
                  <div style={{ marginBottom: '4px' }}>很多篇原创内容</div>
                </div>

                {/* 操作按钮 */}
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

                {/* 标签切换 */}
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

                {/* 文章列表 - 整个Card组件可滚动 */}
                {articleCount > 0 && (
                  <div style={{
                    flex: 1,
                    paddingTop: '16px'
                  }}>
                    <Text style={{ fontSize: '12px', color: isDarkMode ? '#999999' : '#999999' }}>今天</Text>
                    {Array.from({ length: articleCount }).map((_, idx) => (
                      <div key={idx} style={{ marginTop: '12px', paddingBottom: '12px', position: 'relative' }}>
                        {/* 分割线向左缩短，不靠近封面 */}
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
                        {/* 更紧凑的布局：标题在左，封面在右，起始位置对齐 */}
                        <Flex align="flex-start" gap={12}>
                          {/* 左侧内容区域 */}
                          <div style={{ flex: 1 }}>
                            {/* 文章标题 */}
                            <Text style={{ fontSize: '14px', color: isDarkMode ? '#ffffff' : '#333333', marginBottom: '4px', display: 'block', lineHeight: '1.4' }}>
                              {(articleTitles[`title_${idx}`]?.length > 32
                                ? articleTitles[`title_${idx}`].slice(0, 31) + '…'
                                : articleTitles[`title_${idx}`]) || `文章${idx + 1}`}
                            </Text>

                            {/* 统计信息 */}
                            <Flex align="center" gap={4} style={{ marginTop: '4px' }}>
                              <Text style={{ fontSize: '14px', color: isDarkMode ? '#999999' : '#999999' }}>阅读200</Text>
                              <Text style={{ fontSize: '14px', color: isDarkMode ? '#999999' : '#999999' }}>赞1</Text>
                            </Flex>
                          </div>

                          {/* 右侧正方形封面 */}
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
                {/* 聊天消息区域 */}
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
                        {/* 上半部分：封面（2.35:1 横向） */}
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
                        {/* 下半部分：标题 */}
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
                        {/* 上方大图2.35:1横向 + 渐变蒙版 + 标题 */}
                        <div
                          style={{
                            width: '100%',
                            height: 0,
                            paddingBottom: '42.55%',
                            position: 'relative',
                            backgroundColor: isDarkMode ? '#333333' : '#f0f0f0'
                          }}
                        >
                          {/* 文章封面 - 正方形显示 */}
                          {articleCovers[`cover_0`] && (
                            <img
                              src={articleCovers[`cover_0`]}
                              alt={`文章封面`}
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          )}

                          {/* 黑色由下至上减弱的蒙版 - 仅在上传图片后显示 */}
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

                          {/* 多行标题（限制2行）- 始终显示 */}
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

                        {/* 下方继续展示主页视图的样式 */}
                        <div style={{ padding: '12px 16px', backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff' }}>
                          {/* 多篇文章列表 - 全部展示 */}
                          {Array.from({ length: articleCount }).slice(1).map((_, idx) => (
                            <>
                              {/* 灰色分割线 - 更细并适配深色模式，向左缩短不靠近封面 */}
                              {idx > 0 && (
                                <div style={{
                                  height: '0.5px',
                                  backgroundColor: isDarkMode ? '#444444' : '#e8e8e8',
                                  marginBottom: '12px',
                                  marginRight: '70px' // 留出右侧封面的空间
                                }}></div>
                              )}
                              <div key={idx} style={{ marginBottom: '10px', display: 'flex', gap: '8px', height: '60px', alignItems: 'center' }}>
                                {/* 标题区域：固定两行，超出省略 */}
                                <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                                  <div
                                    style={{
                                      fontSize: 14,
                                      color: isDarkMode ? '#ffffff' : '#333333',
                                      lineHeight: '20px',
                                      maxHeight: '40px',          // 两行高度
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

                {/* 消息转发内容 */}
                <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '250px', overflow: 'auto' }} className={isDarkMode ? 'dark-scrollbar' : 'light-scrollbar'}>
                  {Array.from({ length: Math.min(articleCount, 3) }).map((_, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      {/* 头像 */}
                      <img
                        src={CcsfuLogo}
                        alt="头像"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '4px',
                          objectFit: 'cover'
                        }}
                      />
                      {/* 消息气泡 */}
                      <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        {/* 气泡内容 */}
                        <div style={{
                          backgroundColor: isDarkMode ? '#333333' : '#f0f0f0',
                          borderRadius: '4px',
                          padding: '8px 12px',
                          maxWidth: '280px',
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                          {/* 标题 */}
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

                          {/* 封面图片或占位符 */}
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
                              // 封面占位符
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

                          {/* Divider分隔线 */}
                          <Divider style={{
                            margin: '0 0 2px 0',
                            borderColor: isDarkMode ? '#555555' : '#d9d9d9',
                            height: '1px'
                          }} />

                          {/* 账号信息 */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginBottom: '2px'
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

                {/* 朋友圈内容列表 - 根据文章数量动态生成 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxHeight: '250px', overflow: 'auto' }} className={isDarkMode ? 'dark-scrollbar' : 'light-scrollbar'}>
                  {Array.from({ length: articleCount }).map((_, idx) => {
                    return (
                      <>
                        {/* 朋友圈条目 */}
                        <div style={{ padding: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                            {/* 头像 - 统一为CcsfuLogo */}
                            <img
                              src={CcsfuLogo}
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
                                  长春师范大学
                                </span>
                              </div>

                              {/* 灰色无圆角卡片 - 内容上下居中，向左对齐 */}
                              <div style={{
                                backgroundColor: isDarkMode ? '#333333' : '#f5f5f5',
                                border: 'none',
                                borderRadius: '0',
                                padding: '2px',
                                display: 'flex',
                                alignItems: 'center'
                              }}>
                                {/* 封面图片 - 小尺寸在左，确保上下居中 */}
                                <div style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>
                                  {articleCovers[`cover_${idx}`] ? (
                                    <img
                                      src={articleCovers[`cover_${idx}`]}
                                      alt="文章封面"
                                      style={{
                                        width: '40px',
                                        height: '40px',
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
                                {/* 文章标题 - 在右，上下居中，限制为2行 */}
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

                              {/* 公众号信息 - 使用accountName，颜色浅蓝 */}
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

                        {/* 分隔线 - 长线 */}
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
            <Card title="配置" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ paddingRight: '8px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Text strong>头像</Text>
                <Flex vertical gap="small">
                  <Flex align="center" gap="middle" style={{ marginTop: 8 }}>
                    {/* 头像预览 */}
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
                        <Button icon={<UploadOutlined />}>上传头像</Button>
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
                        borderRight: 'none',
                        cursor: articleCount <= 1 ? 'not-allowed' : 'pointer',
                        opacity: articleCount <= 1 ? 0.5 : 1
                      }}
                    >
                      -
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
                        borderLeft: 'none',
                        cursor: articleCount >= 8 ? 'not-allowed' : 'pointer',
                        opacity: articleCount >= 8 ? 0.5 : 1
                      }}
                    >
                      +
                    </Button>
                  </Flex>

                  {/* 根据文章数量动态生成标题+封面上传区 */}
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
                              type={articleCovers[`cover_${idx}`] ? 'primary' : 'default'}
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
    </div >
  )
}

export default Index