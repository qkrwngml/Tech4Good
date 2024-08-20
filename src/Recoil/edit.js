import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// recoil-persist install하여 새로고침 되어도 유지되길 원하는 atom 정보에 사용
const { persistAtom } = recoilPersist();

export const editState = atom({
  key: "editState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
