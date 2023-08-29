import Footer from "../../components/public/Footer";
import PublicHeader from "../../components/public/PublicHeader";
import { useEffect, useState } from "react";

function Portfolio() {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const response = await fetch("http://localhost:3020/api/files");
    const responseJs = await response.json();
    setFiles(responseJs.data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);
  return (
    <>
      <PublicHeader />
      <main className="portfolio-main-container">
        <h1>Portfolio</h1>
        <div className="portfolio-wrap">
          {files.map(
            (file) =>
              file.filetypeId === 4 && (
                <article className="portfolio-element">
                  <div className="portfolio-img-container">
                    <img src={file.file} alt={file.name} />
                  </div>
                  <p>{file.name}</p>
                </article>
              )
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
