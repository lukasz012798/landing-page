import { reviews } from "./constants";

export const handleRefresh = async setReview => {
  let rectangles = document.querySelectorAll(".Rectangle");
  rectangles = [...rectangles];

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  for (let i = 0; i < 200; i++) {
    if (i > reviews.length - 1) i = 0;
    await sleep(500);
    rectangles.forEach(item => {
      item.classList.add("move0");
    });
    await sleep(400);
    setReview(reviews[i]);
    await sleep(600);
    rectangles.forEach(item => {
      item.classList.remove("move0");
    });
    rectangles.forEach(item => {
      item.classList.add("move-100");
    });
    await sleep(1000);
    rectangles.forEach(item => {
      item.classList.add("hide");
    });
    await sleep(1000);
    rectangles.forEach(item => {
      item.classList.remove("move-100", "hide");
    });
    await sleep(2500);
  }
};
