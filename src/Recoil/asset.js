import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// recoil-persist install하여 새로고침 되어도 유지되길 원하는 atom 정보에 사용
const { persistAtom } = recoilPersist();

export const assetState = atom({
  key: "assetState",
  default: [
    {
      type: "Home",
      assetTitle: "우리집",
      rain: 0.22,
      grade: 1,
      dangerGrade: "safe",
    },
    {
      type: "Company",
      assetTitle: "사과 농장",
      rain: 4.36,
      grade: 4,
      dangerGrade: "danger",
    },
    {
      type: "Company",
      assetTitle: "포장 공장",
      rain: 1.36,
      grade: 3,
      dangerGrade: "warning",
    },
    {
      type: "Car",
      assetTitle: "내 차",
      dangerGrade: "safe",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
