import mapping from "./mapping";

function getIDFromURL(url: string) {
  return new URL(url).searchParams.get("v") as string;
}

function random() {
  return (
    Math.sqrt(-2 * Math.log(Math.random())) *
    Math.cos(2 * Math.PI * Math.random())
  );
}
let mask = Array(71).fill(false);
let target = Math.floor(Math.random() * 71);
mask[target] = true;

load(target).then((t) => {
  target = t;
});

function load(target: number): Promise<number> {
  mask[target] = true;
  const a = Math.max(Math.min(Math.abs(1 - random() / 10), 1), 0);

  return new Promise((resolve, reject) => {
    fetch(`https://sigma.smiilliin.com/?target=${target}`)
      .then((data) => data.json())
      .then((data: number[]) => {
        let minSZ = Number.MAX_SAFE_INTEGER;
        let minI = -1;
        data.forEach((sz, i) => {
          if (mask[i]) return;
          if (minSZ > Math.abs(sz - a)) {
            minI = i;
            minSZ = sz;
          }
        });
        if (minI == -1) resolve(-1);
        mask[minI] = true;
        resolve(minI);
      })
      .catch((err) => reject(err));
  });
}
setInterval(() => {
  if (window.idQueue.length > 3) return;
  load(target).then((t) => {
    if (t == -1) {
      mask = Array(71).fill(false);
    } else {
      target = t;
      window.idQueue.push(getIDFromURL(mapping[target].url));
    }
  });
}, 1000);
