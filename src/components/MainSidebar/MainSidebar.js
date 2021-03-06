import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import TopSidebar from "./TopSidebar";
import SuggestAccount from "./SuggestAccount";
import Footer from "./Footer";
import styles from "./MainSidebar.module.scss";
import "./scroll.scss";

function MainSidebar({ onLogin, ...props }) {
  // console.log(props);

  return (
    <OverlayScrollbarsComponent
      className={styles.wrapper}
      style={{
        paddingRight: "12px"
      }}
      options={{
        scrollbars: {
          autoHide: "leave",
          autoHideDelay: 50
        }
      }}
    >
      <TopSidebar onLogin={onLogin} />

      <SuggestAccount {...props} />

      <Footer />
    </OverlayScrollbarsComponent>
  );
}

export default MainSidebar;
