import css from "./style.scss";
import HeadBlock from "../components/HeadBlock";
import GlobalCss from "../components/GlobalCss";

function IndexPage() {
  return (
    <>
      <GlobalCss />
      <HeadBlock title="Läke" />
      <div className={css.test}>Läke</div>
    </>
  );
}

export default IndexPage;
