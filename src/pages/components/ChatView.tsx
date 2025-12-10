import React from 'react';
import { Card } from 'antd';

interface ChatViewProps {
  isDarkMode: boolean;
  articleCount: number;
  articleTitles: Record<string, string>;
  articleCovers: Record<string, string>;
}

const ChatView: React.FC<ChatViewProps> = ({
  isDarkMode,
  articleCount,
  articleTitles,
  articleCovers
}) => {
  return (
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
  );
};

export default ChatView;