import React from "react";
import "./ToggleSwitch.scss";

interface toggleSwitchTypes {
  isToggled: boolean;
  onToggle: () => void;
}
const ToggleSwitch: React.FC<toggleSwitchTypes> = ({ isToggled, onToggle }) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        id="toggle"
      />
      <span className="switch" />
    </label>
  );
};

export default ToggleSwitch;
