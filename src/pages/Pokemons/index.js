import React, {useEffect, useState} from "react";

import {Container} from "./styles";
import api from "../../service/index";

const Pokemons = () => {
  const [pokemons, Setpokemons] = useState([]);
  useEffect(() => {
    api.get("").then((response) => Setpokemons(response.data));
  }, []);

  return (
    <Container>
      <div>
        <h1>caralho</h1>
        {pokemons.results.map((pokemon) => (
          <div key={pokemon.url}>
            <h1>{pokemon.name}</h1>
            <h1>{pokemon.url}</h1>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pokemons;
