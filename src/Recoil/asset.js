import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// recoil-persist install하여 새로고침 되어도 유지되길 원하는 atom 정보에 사용
const { persistAtom } = recoilPersist();

export const assetState = atom({
  key: "assetState",
  default: [
    {
      key: 1,
      type: "Home",
      assetTitle: "우리집",
      rain: 0.22,
      grade: 1,
      dangerGrade: "safe",
      address: "서울시 종로구 38 수호빌라 105동 B105호",
      numbers: [
        {
          index: "남편",
          number: "010-2342-5256",
        },
      ],
    },
    {
      key: 2,
      type: "Company",
      assetTitle: "사과 농장",
      rain: 4.36,
      grade: 4,
      dangerGrade: "danger",
      address: "평택시 우곡길 401 (지산동)",
      numbers: [
        {
          index: "직원1",
          number: "010-2342-5256",
        },
        {
          index: "직원2",
          number: "010-2342-5256",
        },
      ],
    },
    {
      key: 3,
      type: "Company",
      assetTitle: "포장 공장",
      rain: 1.36,
      grade: 3,
      dangerGrade: "warning",
      address: "화성시 동탄1로 13 (신동) ",
      numbers: [
        {
          index: "매니저",
          number: "010-2342-5256",
        },
        {
          index: "직원3",
          number: "010-2342-5256",
        },
        {
          index: "직원4",
          number: "010-2342-5256",
        },
      ],
    },
    {
      key: 4,
      type: "Car",
      assetTitle: "내 차",
      dangerGrade: "safe",
      address: "15 수 151515 | 소나타",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
