import PointStore from "./store/PointsStore";

interface MockData {
  points: number;
  energy: number; 
  pointOnTap: number;
  lvl: number;
}

export const initPointsData = async () => {
  const data: MockData = {
    points: 10,
    energy: 600,
    pointOnTap: 1,
    lvl: 1,
  };


  return data
};
