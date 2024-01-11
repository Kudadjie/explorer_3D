"use client";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";
import React from "react";
import Acknowledgement from "./Acknowledgement";
import Modal from "./Modal";
import About from "./About";

const GenerateModalsAndNotifications = () => {
  const { acknowledgementModalOpened, aboutModalOpened } =
    useInteractiveViewerStore((state) => ({
      acknowledgementModalOpened: state.acknowledgementModal.open,
      aboutModalOpened: state.aboutModal.open,
    }));

  return (
    <>
      {/* Modals */}
      {acknowledgementModalOpened && (
        <Modal>
          <Acknowledgement />
        </Modal>
      )}
      {aboutModalOpened && (
        <Modal>
          <About />
        </Modal>
      )}
    </>
  );
};

export default GenerateModalsAndNotifications;
