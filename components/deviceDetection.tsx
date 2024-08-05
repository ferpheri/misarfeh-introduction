// utils/deviceDetection.ts

export type DeviceType = "Android" | "iOS" | "Desktop";

export function getDeviceType(): DeviceType {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !/Windows Phone/.test(userAgent)) {
    return "iOS";
  }

  return "Desktop";
}
