import { Subscript, SubscriptSharp } from "@mui/icons-material";
import { suburbProps } from "../ExpandableComponent/ExpandableComponent";

export const calcScore = (subs: suburbProps) => {
  const res = Math.round(
    -subs.distance * 0.39 +
      (600 - subs.medianRentPrice) * 0.47 +
      +(subs.bus || subs.train || subs.tram) * 0.14
  );
  return res > 100 ? 100 : res < 0 ? 0 : res;
};

export const GetScore = (subs: suburbProps) => {
  // ({ ...subs });
  // ({ ...subs, score: calcScore(subs) });
  subs;
};
