import React from "react";
import { useState } from "react";
import { Button, Modal } from "antd";
import { ArrowsAltOutlined } from "@ant-design/icons";
import Zoom from "react-img-zoom";
export const Nigger = ({ baseImg }) => {
  console.log(baseImg);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ArrowsAltOutlined
        type="primary"
        onClick={showModal}
        style={{ fontSize: "30px" }}
      />
      <Modal
        width="fit-content"
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Zoom
          img={baseImg}
          zoomScale={3}
          height={500}
          width={800}
        />
      </Modal>
    </>
  );
};
