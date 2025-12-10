import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Text } = Typography;

interface ForwardViewProps {
  isDarkMode: boolean;
  articleCount: number;
  articleTitles: Record<string, string>;
  articleCovers: Record<string, string>;
  forwardUserAvatar: string;
  accountName: string;
  avatar: string;
  friendsCircleUsername: string;
}

const ForwardView: React.FC<ForwardViewProps> = ({
  isDarkMode,
  articleCount,
  articleTitles,
  articleCovers,
  forwardUserAvatar,
  accountName,
  avatar,
  friendsCircleUsername
}) => {
  return (
    <>
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
        bodyStyle={{ padding: '16px' }}
      >
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
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                        <div style={{ marginRight: '12px' }}>
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
                            <div style={{ width: '40px', height: '40px', backgroundColor: isDarkMode ? '#444444' : '#f0f0f0' }} />
                          )}
                        </div>
                        <div style={{ flex: 1 }}>
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
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0' }}>
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
              </>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default ForwardView;