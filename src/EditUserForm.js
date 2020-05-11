import React, { useState } from 'react';
import { useParams, Route } from 'react-router-dom';
import UserDataForm from './UserDataForm';

export default function EditUserForm() {
  const user_id = useParams().user_id;
  const [user, setUser] = useState([]);

  if (!user.user_id) {
    const userFromStorage = window.localStorage.getItem("user_" + user_id);
    setUser(JSON.parse(userFromStorage));
  }

  return (
    <div>
      <Route render={(props) => <UserDataForm {...props} user_id={user.user_id} first_name={user.first_name} last_name={user.last_name} username={user.username} gender={user.gender} password={user.password} role={user.role} about={user.about} profile_picture={user.profile_picture} status={user.status} />} />
    </div>
  );
};

