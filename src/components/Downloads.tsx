"use client";
import React from "react";
import Modal from "./Modal";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";
import styles from "./Downloads.module.scss";

interface DownloadItemTypes {
  children: React.ReactNode;
}

const DownloadItem: React.FC<DownloadItemTypes> = ({ children }) => {
  return <div className={styles.downloadItem}>{children}</div>;
};

function Downloads() {
  const { toggleDownloadsModal } = useInteractiveViewerStore((state) => ({
    toggleDownloadsModal: state.toggleDownloadsModal,
  }));
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Downloads</h2>
          <a
            onClick={() => {
              toggleDownloadsModal();
            }}
            className={styles.closeBtn}
          >
            close
          </a>
        </div>

        <p>
          Want to view the project files on your own device? Find the downloads
          below! The processed project files can also be found on Agisoft Cloud
          after access has been granted by the project leads.
        </p>
        <div>
          <DownloadItem>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <p>
                <b>High Definition 3D Model</b>
              </p>
              <button>Download</button>
            </span>

            <p>OBJ File - Size here</p>
          </DownloadItem>
          {/* different formats? (png, geopackage, google tiles) */}
          <DownloadItem>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <p>
                <b>High Definition Orthomoasic / Ortho Map</b>
              </p>
              <button>Download</button>
            </span>
            <p> File - Size here</p>
          </DownloadItem>
          <DownloadItem>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <p>
                <b>Agisoft Metashape Project</b>
              </p>
              <button>Request Access</button>
            </span>

            <p>Link to project in Agisoft cloud. Approval is required.</p>
          </DownloadItem>
        </div>
      </div>
    </Modal>
  );
}

export default Downloads;
