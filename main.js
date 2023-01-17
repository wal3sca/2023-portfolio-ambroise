fetch('https://wger.de/api/v2/exercise/')
  .then((response) => response.json())
  .then((data) => console.log(data));
