import styles from "@/styles/alert.module.scss";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { TiWarningOutline } from "react-icons/ti";

interface Props {
  type?: "danger" | "warning" | "success";
  message?: string;
  onClose: () => void;
}

const Alert: React.FC<Props> = ({ type = "success", message, onClose }) => {
  const types = {
    success: {
      color: "#ff6f61",
      icon: AiOutlineCheck,
    },
    warning: {
      color: "#ff6f61",
      icon: TiWarningOutline,
    },
    danger: {
      color: "#ff6f61",
      icon: TiWarningOutline,
    },
  };

  const Icon = types[type].icon;
  const backgroundColor = types[type].color;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.alertContainer} style={{ backgroundColor }}>
        <Icon size={"2em"} color="white" />
        <p className={styles.alertText}>{message}</p>
        <button
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            margin: 10,
            marginRight: 20,
            backgroundColor: "transparent",
            border: 0,
            fontWeight: "700",
            cursor: "pointer",
            fontSize: 25,
            color: "white",
          }}
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
