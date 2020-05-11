import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard(props) {
  function onRemove() {
    if (window.localStorage.getItem('user')){
      props.remove && props.remove(props.item.recipe_id);
    }
  }

  return (
    <div style={{ width: '30%', float: 'left', paddingLeft: '1%' }}>
      <div className="card medium">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={"data:image/png;base64," + props.item.recipe_picture} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{props.item.recipe_name}<i className="material-icons right">more_vert</i></span>
          <p>Time needed: {props.item.time_preparation} min</p>
          <div className="row">
            <ul>
              <li style={{ display: "inline" }}><Link to={'/recipes/' + props.item.recipe_id} className="waves-effect waves-light btn red lighten-4 red-text text-darken-3">edit</Link></li>
              <li style={{ display: "inline" }}><button onClick={onRemove} className="right waves-effect waves-light btn red lighten-4 red-text text-darken-3">delete</button></li>
            </ul>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{props.item.recipe_name}<i className="material-icons right">close</i></span>
          <p>{props.item.description.substring(0, 150)}</p>
          {/* Here we can use props.item.description.substring(0, 150) to show only 150 characters. */}
        </div>
      </div>
    </div>
  );
}