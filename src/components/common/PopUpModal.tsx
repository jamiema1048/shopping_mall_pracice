import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const eventProductId = "p005";
const STORAGE_KEY = "f2e:popup_history";
const COOL_DOWN_TIME = 3600 * 1000;

const PopUpModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const rawData = localStorage.getItem(STORAGE_KEY);

    if (!rawData) {
      setIsModalOpen(true); // 沒資料就顯示
      return;
    }

    try {
      const popHistory = JSON.parse(rawData);
      if (popHistory && popHistory.time) {
        const hasPassedCoolDown = Date.now() - popHistory.time > COOL_DOWN_TIME;

        if (hasPassedCoolDown) {
          setIsModalOpen(true);
        } else {
          setIsModalOpen(false); // 還在冷卻期，保持關閉
        }
      } else {
        setIsModalOpen(true);
      }
    } catch (error) {
      setIsModalOpen(true); // 格式報錯也顯示
    }
  }, []);

  // 💡 改成：當使用者「手動關閉」或是「點擊跳轉」時，才記錄時間
  const handleRecordAndClose = useCallback(() => {
    const history = {
      time: Date.now(),
      productId: eventProductId,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    setIsModalOpen(false);
  }, []);

  return (
    <Modal
      open={isModalOpen} // AntD Modal 建議直接用 open 屬性
      footer={null}
      onCancel={handleRecordAndClose} // 點 X 關閉時才計時
      centered
      destroyOnClose // 關閉時銷毀內容
    >
      <Link to={`/${eventProductId}`} onClick={handleRecordAndClose}>
        <img
          style={{ width: "100%", display: "block" }}
          alt="event"
          src="https://images.unsplash.com/29/night-square.jpg?q=80&w=2081&auto=format&fit=crop"
        />
      </Link>
    </Modal>
  );
};

export default PopUpModal;
