"use client";
import getNotification from "@/lib/getNotification";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";
import React from "react";
import Acknowledgement from "./Acknowledgement";
import Modal from "./Modal";

const GenerateModalsAndNotifications = () => {
  const { modalOpened, title, content } = useInteractiveViewerStore(
    (state) => ({
      modalOpened: state.acknowledgementModal.open,
      title: state.notification.title,
      content: state.notification.content,
    })
  );

  return (
    <>
      {/* Modals */}
      {modalOpened && (
        <Modal>
          <Acknowledgement />
        </Modal>
      )}
      {/*Notifications */}
      {/* Notifications have to be manually closed */}
      {getNotification(title, content)}
    </>
  );
};

export default GenerateModalsAndNotifications;
