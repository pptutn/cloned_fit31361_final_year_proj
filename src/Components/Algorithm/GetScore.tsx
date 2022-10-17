import { Subscript, SubscriptSharp } from "@mui/icons-material";
import { suburbProps } from "../ExpandableComponent/ExpandableComponent";

export const calcScore = (subs: suburbProps) => {
  const res = Math.round(
<<<<<<< HEAD
    -subs.distance * 0.39 +
      (600 - subs.medianRentPrice) * 0.47 +
      +(subs.bus || subs.train || subs.tram) * 0.14
  );
  return res > 100 ? 100 : res < 0 ? 0 : res;
=======
    -subs.distance * 0.5 +
      (800 - subs.medianRentPrice) * 0.47 +
      +(subs.bus || subs.train || subs.tram) * 0.03
  );
  console.log("this is res", res);
  const convertStars = (score: number) => {
    let finalStars = 1;
    if (score > 100) {
      finalStars = 5;
    } else if (score > 80) {
      finalStars = 4;
    } else if (score > 60) {
      finalStars = 3;
    } else if (score > 40) {
      finalStars = 2;
    }
    return finalStars;
  };

  return convertStars(res);
>>>>>>> master
};

export const GetScore = (subs: suburbProps) => {
  // ({ ...subs });
  // ({ ...subs, score: calcScore(subs) });
  subs;
};
