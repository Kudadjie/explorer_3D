"use client";
import React from "react";
import style from "./Notification.module.scss";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";
// blue(info) - rgb(47 134 235)
// red(error) - rgb(255 53 91)
// yellow(warning) - rgb(255 192 33)
// green(success) - rgb(71 215 100)

interface NotificationProps {
  children: React.ReactNode;
  color:
    | "rgb(47 134 235)"
    | "rgb(255 53 91)"
    | "rgb(255 192 33)"
    | "rgb(71 215 100)";

  type: "Warning" | "Error" | "Success" | "Info";
  icon: React.ReactNode;
}
const Notification: React.FC<NotificationProps> = ({
  children,
  type,
  color,
  icon,
}) => {
  const { toggleNotification } = useInteractiveViewerStore((state) => ({
    toggleNotification: state.toggleNotification,
  }));

  return (
    <div className={style.notification}>
      {/* colorbar */}
      <div className={style.colorBar} style={{ backgroundColor: color }}></div>
      {/* Icon and text */}
      <div className={style.iconAndText}>
        <div className={style.icon}>{icon}</div>

        <div className={style.content}>
          {/* heading */}
          <h3>{type}</h3>
          {/* content */}
          <span>{children}</span>
        </div>
        <p
          className={style.closeBtn}
          onClick={() => {
            toggleNotification(null, null);
            console.log("here");
          }}
        >
          close
        </p>
      </div>
    </div>
  );
};

export default Notification;
