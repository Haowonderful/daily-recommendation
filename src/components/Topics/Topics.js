import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TopicForm from "./TopicForm";
import { fetchTopicsData } from "../../store/topics/action";

const Topics = () => {
  const dispatch = useDispatch();

  const { topics, loading, hasError } = useSelector((state) => state.topics);
  console.log(topics);
  const formattedTopics = Object.keys(topics).map((k) => ({
    id: k,
    title: topics[k].title,
  }));

  useEffect(() => {
    if (Object.keys(topics).length === 0) {
      dispatch(fetchTopicsData());
    }
  }, [dispatch, topics]);

  return (
    <div>
      <div>
        <h3>已添加的话题</h3>
        <div>
          {formattedTopics.map((topic) => (
            <p>{topic.title}</p>
          ))}
        </div>
      </div>
      <TopicForm />
    </div>
  );
};

export default Topics;
