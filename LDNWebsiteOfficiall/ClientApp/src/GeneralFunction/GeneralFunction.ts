import { useState, useEffect } from "react";
import { mobileWidth } from "../GeneralVallue";

export const TransferValueObject = (object: any) => {
  for (const [key, value] of Object.entries<any>(object)) {
    if (value == undefined) {
      object[`${key}`] = null;
    }
  }
  return object;
};
const IsMobileDevice = () => {
  const [IsMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= mobileWidth) setIsMobile(true);
  }, [window.innerWidth]);
  return IsMobile;
};
export default IsMobileDevice;
