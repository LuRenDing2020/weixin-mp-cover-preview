import React from 'react';
import { Modal, Button, Input, Upload, Typography, Divider } from 'antd';
import type { RcFile } from 'antd/es/upload';
import { UploadOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface SettingsModalProps {
  open: boolean;
  onCancel: () => void;
  certificationInfo: string;
  setCertificationInfo: (value: string) => void;
  ipLocation: string;
  setIpLocation: (value: string) => void;
  friendsCircleUsername: string;
  setFriendsCircleUsername: (value: string) => void;
  forwardUserAvatar: string;
  setForwardUserAvatar: (value: string) => void;
  CcsfuLogo: string;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  open,
  onCancel,
  certificationInfo,
  setCertificationInfo,
  ipLocation,
  setIpLocation,
  friendsCircleUsername,
  setFriendsCircleUsername,
  forwardUserAvatar,
  setForwardUserAvatar,
  CcsfuLogo
}) => {
  const handleBeforeUpload = (file: RcFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      if (e.target?.result) {
        setForwardUserAvatar(e.target.result as string);
      }
    };
    return false;
  };

  return (
    <Modal
      title="更多设置"
      open={open}
      footer={
        <Button onClick={onCancel}>
          关闭
        </Button>
      }
      onCancel={onCancel}
      closeIcon={null}
    >
      <Divider titlePlacement="start" styles={{ content: { marginTop: '4px' } }}>公众号信息</Divider>
      <div style={{ marginBottom: '16px' }}>
        <Text strong>认证信息</Text>
        <Input
          placeholder="输入认证信息"
          value={certificationInfo}
          onChange={(e) => setCertificationInfo(e.target.value)}
          style={{ marginTop: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Text strong>IP属地</Text>
        <Input
          placeholder="输入IP属地"
          value={ipLocation}
          onChange={(e) => setIpLocation(e.target.value)}
          style={{ marginTop: '8px' }}
        />
      </div>
      <Divider titlePlacement="start" styles={{ content: { marginTop: '4px' } }}>转发视图用户信息</Divider>
      <div style={{ marginBottom: '16px' }}>
        <Text strong>朋友圈用户名</Text>
        <Input
          placeholder="输入朋友圈用户名（默认为微信用户）"
          value={friendsCircleUsername}
          onChange={(e) => setFriendsCircleUsername(e.target.value)}
          style={{ marginTop: '8px' }}
        />
      </div>
      <div>
        <Text strong>用户头像</Text>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, marginTop: '8px' }}>
          <img
            src={forwardUserAvatar}
            alt="头像"
            style={{
              width: 64,
              height: 64,
              borderRadius: '6px',
              objectFit: 'cover',
              border: '1px solid #f0f0f0'
            }}
          />
          <Upload.Dragger
            fileList={[]}
            beforeUpload={handleBeforeUpload}
            accept="image/*"
            showUploadList={false}
          >
            <Button 
              icon={<UploadOutlined />} 
              type={forwardUserAvatar === CcsfuLogo ? 'default' : 'primary'}
            >
              {forwardUserAvatar === CcsfuLogo ? '上传' : '更换'}
            </Button>
          </Upload.Dragger>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;