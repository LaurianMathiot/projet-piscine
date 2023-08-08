import "./Bio.scss";

function Bio() {
  return (
    <section className="bio-section">
      <div className="container">
        <h2>Présentation</h2>
        <div className="bio-container">
          <div className="biography">
            <p>
              Repoussons les limites de la créativité pour donner vie à vos
              idées les plus audacieuses. Je suis un graphiste innovant et
              passionné qui se consacre à créer des expériences esthétiques et
              fonctionnelles qui enchantent vos sens et dépassent vos attentes.
            </p>

            <p>
              Pour moi, le design va au-delà de l'esthétique, il doit également
              être pratique et efficace. C'est pourquoi je prends le temps de
              comprendre vos besoins, vos objectifs et votre public cible afin
              de créer des solutions sur mesure qui répondent parfaitement à vos
              exigences.
            </p>
          </div>
          <div className="bio-imgs-container">
            <img className="t-3d" src="./images/t-3D.svg" alt="" />
            <img className="tools-3d" src="./images/tools2.png" alt="" />
            <img className="progress-3d" src="./images/progress2.png" alt="" />
            <img className="palette-3d" src="./images/palette-3D.svg" alt="" />
            <img className="tablet-3d" src="./images/tablet2.png" alt="" />
          </div>
        </div>
        <div className="contact-banner">
          <p>Faites le choix du design d'exception</p>
          <p>
            Laissez-nous transformer votre vision en une réalité visuelle
            époustouflante qui impressionnera et inspirera votre public.
          </p>
          <a href="" className="btn rotate-btn">
            Nous contacter
          </a>
          <img
            className="contact-banner-img"
            src="./images/3D_flower.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Bio;
