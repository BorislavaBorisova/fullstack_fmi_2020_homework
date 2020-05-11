import React from "react";
import { Link } from 'react-router-dom';

export default function UserCard(props) {
  function onRemove() {
    if (window.localStorage.getItem("user")){
      props.remove && props.remove(props.item.user_id);
    }
  }

  return (
    <div className="row">
      <div className="col s9 offset-s1">
        <div className="card horizontal">
          <div className="card-image"><img src={"data:image/png;base64," + props.item.profile_picture} style={{ maxWidth: '200px' }} /></div>
          <div className="card-stacked">
            <div className="card-content">
              <h3>{props.item.first_name} {props.item.last_name}</h3>
              <h4>{props.item.username}</h4>
              <p>{props.item.about}</p>
            </div>
            <div className="row">
              <div className="card-action">
                <ul>
                  <li style={{ display: "inline" }}><Link to={'/users/' + props.item.user_id} className="waves-effect waves-light btn red lighten-4 red-text text-darken-3">edit</Link></li>
                  <li style={{ display: "inline" }}><button onClick={onRemove} className="right waves-effect waves-light btn red lighten-4 red-text text-darken-3">delete</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
