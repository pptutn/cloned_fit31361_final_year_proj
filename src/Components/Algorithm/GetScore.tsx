import { Subscript, SubscriptSharp } from "@mui/icons-material";
import { suburbProps } from "../ExpandableComponent/ExpandableComponent";

const calcScore = (subs: suburbProps) => {
  return (
    subs.distance * 0.39 +
    subs.medianRentPrice * 0.38 +
    +(subs.bus || subs.train || subs.tram) * 0.14
  );
};

export const GetScore = (subs: suburbProps) => {
  ({ ...subs, score: calcScore(subs) });
};

