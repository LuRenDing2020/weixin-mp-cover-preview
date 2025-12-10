import React from 'react';
import { Card, Flex, Typography, Button } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface HomeViewProps {
  isDarkMode: boolean;
  avatar: string;
  accountName: string;
  certificationInfo: string;
  ipLocation: string;
  introduction: string;
  articleCount: number;
  articleTitles: Record<string, string>;
  articleCovers: Record<string, string>;
  articleReadings?: { [key: string]: number };
  articleLikes?: { [key: string]: number };
}

const HomeView: React.FC<HomeViewProps> = ({
  isDarkMode,
  avatar,
  accountName,
  certificationInfo,
  ipLocation,
  introduction,
  articleCount,
  articleTitles,
  articleCovers
}) => {
  return (
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
  );
};

export default HomeView;