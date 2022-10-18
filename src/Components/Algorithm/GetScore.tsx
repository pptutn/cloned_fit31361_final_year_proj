import { suburbProps } from "../ExpandableComponent/ExpandableComponent";

export const calcScore = (subs: suburbProps) => {
  const res = Math.round(
    -subs.distance * 0.5 +
      (800 - subs.medianRentPrice) * 0.47 +
      +(subs.bus || subs.train || subs.tram) * 0.03
  );
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
};

export const GetScore = (subs: suburbProps) => {
  // ({ ...subs });
  // ({ ...subs, score: calcScore(subs) });
  subs;
};
