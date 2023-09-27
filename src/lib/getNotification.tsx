//Take in function, if resulting to "error", "success", "info" or "warning", return notification component with appriopiate content

import Notification from "@/components/Notification";
const getNotification = (
  type: "Success" | "Error" | "Info" | "Warning" | null = null,
  content: string | null = null
) => {
  switch (type) {
    case "Success":
      return (
        <Notification
          icon={
            <i
              className="fa-solid fa-circle-check fa-2xl"
              style={{ color: "#47d764" }}
            ></i>
          }
          type="Success"
          color="rgb(71 215 100)"
        >
          <p>{content}</p>
        </Notification>
      );
    case "Error":
      return (
        <Notification
          icon={
            <i
              className="fa-solid fa-circle-xmark fa-2xl"
              style={{ color: "#ff355b" }}
            ></i>
          }
          type="Error"
          color="rgb(255 53 91)"
        >
          <p>{content}</p>
        </Notification>
      );
    case "Info":
      return (
        <Notification
          icon={
            <i
              className="fa-solid fa-circle-info fa-2xl"
              style={{ color: "#2f86eb" }}
            ></i>
          }
          type="Info"
          color="rgb(47 134 235)"
        >
          <p>{content}</p>
        </Notification>
      );

    case "Warning":
      return (
        <Notification
          icon={
            <i
              className="fa-solid fa-circle-exclamation fa-2xl"
              style={{ color: "#ffc021" }}
            ></i>
          }
          type="Warning"
          color="rgb(255 192 33)"
        >
          <p>Test</p>
        </Notification>
      );

    default:
      return;
  }
};

export default getNotification;
