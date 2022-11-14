import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  // variaveis iniciais 
  const [id, setId] = useState(1);
  const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
  const [nome, setNome] = useState("bulbasaur");
  const [atk, setAtk] = useState("49");
  const [def, setDef] = useState("49");
  const [spa, setSpa] = useState("65");
  const [spd, setSpd] = useState("65");
  const [spe, setSpe] = useState("45");
  const [exp, setExp] = useState ("64");


  // pesquisa
  const pesquisar = e => {
    e.preventDefault();
    const pesquisar = e.target[0].value;

    fetch('https://pokeapi.co/api/v2/pokemon/'+pesquisar)
    .then(response => response.json())
    .then(data => {
      setId(data.id)
      setNome(data.name)
      setImg(data.sprites.other.dream_world.front_default)
      setExp(data.base_experience)
      setAtk(data.stats[1].base_stat)
      setDef(data.stats[2].base_stat)
      setSpa(data.stats[3].base_stat)
      setSpd(data.stats[4].base_stat)
      setSpe(data.stats[5].base_stat)
      
      // setType(data.types[5].bas)
    })
  
    
  }

  

  return (
    <div className="App">
        <div className="container">

          <div className="row mt-5  align-items-center d-flex justify-content-center">
          <div className="card col-6 ">

          <div className="input-group mb-3  mt-3">
            {/* iniciar o evento de pesquisar */}
            <form onSubmit={pesquisar}>
              <input type="text" className="form-control" placeholder="ID ou Nome" aria-label="ID ou Nome" aria-describedby="button-addon2" />
              <button className="btn btn-primary"  type="submit" id="button-addon2">Buscar</button> 
            </form>
          </div>

          <h5 className="card-title">Nº {id}</h5> 

          <div className='img-container'>

          <img src={img} className="card-img-top" alt="logo" />

          </div>

          <div className="card-body">
            <h5 className="card-title">{nome}</h5>
            <p className="card-text">Exp:{exp}</p>
            <p className="card-text">Attack:{atk}</p>
            <p className="card-text">Defense:{def}</p>
            <p className="card-text">Sp. Atk:{spa}</p>
            <p className="card-text">Sp. Def:{spd}</p>
            <p className="card-text">Speed:{spe}</p>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;


