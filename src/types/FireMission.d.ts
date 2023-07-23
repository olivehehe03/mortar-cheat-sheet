export type AmmoType = "HE" | "Smoke" | "Flare";

export interface FireMission {
  id: string;
  name: string;
  height: number;
  targetHeight: number;
  range: number;
  estimatedElevation: number;
  dElev: number;
  rounds: number;
  azimuth: number;
  charge: number;
  elevation: number;
  flightTime: number;
  remarks: string;
  ammoType: AmmoType;
  dispersion: number;
}
