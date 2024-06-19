main();
async function main(): Promise<void> {
  const id = await apiHw2("a.arslanov@innopolis.university");
  const comicInfo = await apiComic(id);
  console.log(comicInfo);

  const comic = document.createElement("article");

  const img = document.createElement("img");
  img.src = comicInfo.img;
  img.alt = comicInfo.alt;
  comic.appendChild(img);

  const title = document.createElement("h2");
  title.textContent = comicInfo.safe_title;
  comic.appendChild(title);

  const date = new Date(
    Date.UTC(
      Number.parseInt(comicInfo.year),
      Number.parseInt(comicInfo.month) - 1,
    ),
  );
  const time = document.createElement("time");
  time.innerHTML = date.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
  const uploaded = document.createElement("div");
  uploaded.innerHTML = `Uploaded: ${time.outerHTML}`;

  comic.appendChild(uploaded);

  addComic(comic);
}

async function apiHw2(email: string): Promise<number> {
  const url = new URL(
    `https://fwd.innopolis.university/api/hw2?email=${email}`,
  );
  return fetch(url).then((response) => response.json());
}

type Comic = {
  month: string;
  num: number;
  year: string;
  safe_title: string;
  alt: string;
  img: string;
};

async function apiComic(id: number): Promise<Comic> {
  const url = `https://fwd.innopolis.university/api/comic?id=${id}`;
  return fetch(url).then((response) => response.json());
}

function addComic(comic: HTMLElement): void {
  const htmlMain = document.getElementsByTagName("main")[0]!;
  htmlMain.appendChild(comic);
}
