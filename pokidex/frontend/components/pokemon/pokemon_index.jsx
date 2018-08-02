import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonList = pokemon.map( el => (
      <li key={el.id}>
        {el.name}
        <br />
        <img src={el.image_url} height="60"/>
      </li>
    ));
    console.log(pokemon);

    return (
      <div>
        <ul>
          { pokemonList }
        </ul>
        hello
      </div>
    );
  }

}

export default PokemonIndex;
