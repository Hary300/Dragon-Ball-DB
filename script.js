const url = "https://dragonball-api.com/api/characters";

async function init() {
  const data = await getData(url);
  console.log(data);
}

async function getData(url) {
  try {
    const res = await axios(url);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

init();
