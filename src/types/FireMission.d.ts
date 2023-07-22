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
}
