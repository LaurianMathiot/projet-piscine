import { useEffect, useState } from "react";

function Indicator() {
  const [count, setCount] = useState([]);
  const [projet, setProjet] = useState([]);
  const [year, setYears] = useState([]);

  const countClient = async () => {
    const fetchClient = await fetch(
      `http://localhost:3020/api/clients/countOf`
    );
    const responseJson = await fetchClient.json();
    setCount(responseJson.data);
  };

  const realiseProject = async () => {
    const fetchFiles = await fetch(`http://localhost:3020/api/files/`);
    const responseJson = await fetchFiles.json();
    const filesArray = responseJson.data;

    const goodFiles = filesArray.filter((file) => file.filetypeId === 3);

    setProjet(goodFiles);
  };

  const differenceDate = () => {
    const years = new Date().getFullYear() - 2015;
    console.log(years);
    setYears(years);
  };

  useEffect(() => {
    countClient();
    realiseProject();
    differenceDate();
  }, []);
  return (
    <section className="indicator-section">
      <div className="indicator-box clients">
        <p>{count && count}</p>
        <p>clients</p>
      </div>
      <div className="indicator-box years">
        <p>{year && year}</p>
        <p>années d'expérience</p>
      </div>
      <div className="indicator-box projects">
        <p>{projet && projet.length}</p>
        <p>projets réalisés</p>
      </div>
    </section>
  );
}

export default Indicator;
