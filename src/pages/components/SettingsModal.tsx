import React from 'react';
import { Modal, Button } from 'antd';
import OfficialAccountSettings from './OfficialAccountSettings';
import ForwardViewSettings from './ForwardViewSettings';

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
      <OfficialAccountSettings
        certificationInfo={certificationInfo}
        setCertificationInfo={setCertificationInfo}
        ipLocation={ipLocation}
        setIpLocation={setIpLocation}
      />
      <ForwardViewSettings
        friendsCircleUsername={friendsCircleUsername}
        setFriendsCircleUsername={setFriendsCircleUsername}
        forwardUserAvatar={forwardUserAvatar}
        setForwardUserAvatar={setForwardUserAvatar}
        CcsfuLogo={CcsfuLogo}
      />
    </Modal>
  );
};

export default SettingsModal;