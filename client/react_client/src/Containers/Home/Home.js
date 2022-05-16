import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [dataTroc, setDataTroc] = useState();
  const [dataUser, setDataUser] = useState();

  useEffect(() => {
    fetch("http://localhost:8001/krysto/api/trocs/allTrocs")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setDataTroc(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/krysto/api/users/allUsers")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setDataUser(data.data));
  }, []);
  console.log(dataUser);

  return (
    <div>
      <h1>Bienvenue sur la page administrateur Krysto</h1>

      {dataTroc && (
        <p>Il y'a actuellement {dataTroc.length} trocs en ligne sur le site</p>
      )}
      {dataUser && (
        <p>
          Il y'a actuellement {dataUser.length} uttilisateurs inscrits sur le
          site
        </p>
      )}
    </div>
  );
}
