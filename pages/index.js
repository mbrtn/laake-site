import css from "./style.scss";
import HeadBlock from "../components/HeadBlock";
import Nav from "../components/Nav";

function IndexPage() {
  return (
    <>
      <HeadBlock title="Läke – Medication Tracker & reminder" />
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

          <div className={css.buttons}>
            <a
              className={css.downloadIOs}
              href="https://apps.apple.com/app/l%C3%A4ke/id1458632978"
              title="Download in AppStore"
            />
            <a
              className={css.downloadGoogle}
              href="https://play.google.com/store/apps/details?id=com.fyramedia.laake"
              title="Get it on Google Play"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
