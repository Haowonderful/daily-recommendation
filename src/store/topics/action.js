import { get } from "lodash";
import { uiActions } from "../ui-slice";
import { topicsActions } from "./slice";
import appJson from "../../config/app.json";

const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not fetch data!");
  }

  return await response.json();
};

export const fetchTopicsData = () => {
  return async (dispatch) => {
    try {
      const topicsUrl = `${appJson.firebaseHost}/topics.json`;
      const topicsData = await fetchData(topicsUrl);
      dispatch(topicsActions.setTopics(topicsData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching topics data failed!",
        })
      );
    }
  };
};

export const addTopic = ({ title, description, image, time, category }) => {
  return async (dispatch) => {
    try {
      const topicsUrl = `${appJson.firebaseHost}/topics.json`;
      const data = {
        title,
        description,
        image,
        time,
        category,
      };

      const response = await fetch(topicsUrl, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Could not insert data!");
      }

      const parsedResponse = await response.json();
      console.log("The parsed response is ", parsedResponse);
      dispatch(
        topicsActions.addTopic({
          id: parsedResponse.name,
          title,
          description,
          image,
          time,
          category,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Adding a new topic failed!",
        })
      );
    }
  };
};

export const updateTopic = ({
  id,
  title,
  description,
  image,
  time,
  category,
}) => {
  return async (dispatch) => {
    try {
      const topicsUrl = `${appJson.firebaseHost}/topics/${id}.json`;
      const data = {
        title,
        description,
        image,
        time,
        category,
      };

      const response = await fetch(topicsUrl, {
        method: "PATCH",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Could not update data!");
      }

      const parsedResponse = await response.json();
      console.log("The parsed response is ", parsedResponse);
      dispatch(
        topicsActions.addTopic({
          id,
          title,
          description,
          image,
          time,
          category,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Updating a new topic failed!",
        })
      );
    }
  };
};
