import css from "./style.scss";
import HeadBlock from "../components/HeadBlock";
import Nav from "../components/Nav";

function IndexPage() {
  return (
    <>
      <HeadBlock title="Läke" />
      <Nav />
      <div className={css.hero}>
        <div className={css.title}>
          Läke
          <div className={css.subtitle}>Medication tracker & reminder</div>
        </div>

        <div className={css.footer}>
          <div className={css.subtitle}>
            Track your medications
            <br />
            Get reminder notifications
            <br />
            See stats and logs
          </div>

          <a
            className={css.download}
            href="https://apps.apple.com/app/l%C3%A4ke/id1458632978"
            title="Download in AppStore"
          />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
