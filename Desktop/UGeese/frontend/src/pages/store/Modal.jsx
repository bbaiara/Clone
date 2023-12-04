import React, { useState } from 'react';
import { Button, Modal } from 'antd';
export default function ItemModal({open, onClose}){

  const handleOk = () => {
    onClose()
  };
  const handleCancel = () => {
    onClose()
  };
  return (
    <>
      <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};