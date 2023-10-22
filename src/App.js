import { Fragment } from "react";
import { useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Notification from "./components/UI/Notification";
// import Channels from "./components/Youtube/Channels";
import Topics from "./components/Topics/Topics";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const notification = useSelector((state) => state.ui.notification);
  const pageId = useSelector((state) => state.header.selectedPageId);

  console.log("The select page id is ", pageId);

  const getContent = () => {
    let content = <div>Home Page</div>;
    switch (pageId) {
      case "topics":
        content = <Topics />;
        break;
      case "calendar":
        content = <Calendar />;
        break;
      default:
        break;
    }

    return content;
  };

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>{getContent()}</Layout>
    </Fragment>
  );
}

export default App;
