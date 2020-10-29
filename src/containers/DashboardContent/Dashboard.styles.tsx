const headerFontSize =
  "calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))";
const textFontSize =
  "calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))";
const modalTitleFontSize =
  "calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)))";

export const headerStyles = {
  "font-weight": "400",
  "font-size": headerFontSize,
  "margin-bottom": "15px",
};

export const textStyles = {
  "font-size": textFontSize,
  "line-height": "1.6",
};

export const accountTittleInfo = {
  "font-size": modalTitleFontSize,
  margin: "0",
  "text-transform": "capitalize",
  color: " #333",
  "letter-spacing": " 0.05em",
};

export const ModalActionStyle = {
  position: "absolute",
  right: "0",
  top: "12px",
  color: "#00baf2",
  "font-weight": "700",
  "font-size": modalTitleFontSize,
  padding: "unset",
  "line-height": "unset",
  cursor: "pointer",
};
