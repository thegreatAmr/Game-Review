async function GetGames() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8926eeaacdmsh45c9d989565308bp1276f8jsnaf32541f257e",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
    options
  );
  const response = await api.json();
  console.log(response);

  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452";  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

GetGames();
