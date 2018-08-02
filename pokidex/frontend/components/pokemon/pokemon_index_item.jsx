import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  render() {
    const { pokemon } = this.props;

    return (
      <li>
        <Link to={"/pokemon/" + pokemon.id}>
          {pokemon.name}
          <br /><br />
          <img src={pokemon.image_url} height="100"/>
          <br /><br />
        </Link>
      </li>
    );
  }

}

export default PokemonIndexItem;
