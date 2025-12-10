import React from 'react';
import { Input, Typography, Divider } from 'antd';

const { Text } = Typography;

interface OfficialAccountSettingsProps {
  certificationInfo: string;
  setCertificationInfo: (value: string) => void;
  ipLocation: string;
  setIpLocation: (value: string) => void;
}

const OfficialAccountSettings: React.FC<OfficialAccountSettingsProps> = ({
  certificationInfo,
  setCertificationInfo,
  ipLocation,
  setIpLocation
}) => {
  return (
    <>
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
    </>
  );
};

export default OfficialAccountSettings;