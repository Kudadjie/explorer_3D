"use client";
import getNotification from "@/lib/getNotification";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";
import React from "react";
import Acknowledgement from "./Acknowledgement";
import Modal from "./Modal";
import Downloads from "./Downloads";

const GenerateModalsAndNotifications = () => {
  const { acknowledgementModalOpened, title, content, downloadsModalOpened } =
    useInteractiveViewerStore((state) => ({
      downloadsModalOpened: state.downloadsModal.open,
      acknowledgementModalOpened: state.acknowledgementModal.open,
      title: state.notification.title,
      content: state.notification.content,
    }));

  return (
    <>
      {/* Modals */}
      {acknowledgementModalOpened && (
        <Modal>
          <Acknowledgement />
        </Modal>
      )}
      {downloadsModalOpened && <Downloads />}
      {/*Notifications */}
      {/* Notifications have to be manually closed */}
      {getNotification(title, content)}
    </>
  );
};

export default GenerateModalsAndNotifications;
