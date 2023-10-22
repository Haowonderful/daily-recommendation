import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import classes from "./TopicForm.module.css";
import { addTopic } from "../../store/topics/action";

const TopicForm = () => {
  const dispatch = useDispatch();

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredImageUrl, setEnteredImageUrl] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const isFormValid =
    enteredTitle.trim().length > 0 &&
    enteredDescription.trim().length > 0 &&
    enteredImageUrl.trim().length > 0 &&
    enteredTime.trim().length > 0 &&
    enteredCategory.trim().length > 0;

  const handleTitleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value.trim().length > 0) {
      setEnteredTitle(event.target.value.trim());
    }
  };

  const handleDescriptionChange = (event) => {
    console.log(event.target.value);
    if (event.target.value.trim().length > 0) {
      setEnteredDescription(event.target.value.trim());
    }
  };

  const handleImageUrlChange = (event) => {
    console.log(event.target.value);
    setEnteredImageUrl(event.target.value.trim());
  };

  const handleTimeChange = (event) => {
    console.log(event.target.value);
    setEnteredTime(event.target.value.trim());
  };

  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setEnteredCategory(event.target.value.trim());
  };

  const submitHandler = () => {
    dispatch(
      addTopic({
        title: enteredTitle,
        description: enteredDescription,
        image: enteredImageUrl,
        time: enteredTime,
        category: enteredCategory,
      })
    );

    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredImageUrl("");
    setEnteredTime("");
    setEnteredCategory("");
  };

  return (
    <div className={classes.form}>
      <h3>添加一个新的话题</h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            // error
            required
            id="topic-title"
            label="标题"
            type="text"
            placeholder="请输入标题"
            onChange={handleTitleChange}
            value={enteredTitle}
          />
          <TextField
            // error
            required
            id="topic-description"
            label="描述"
            type="text"
            placeholder="请输入描述"
            // helperText="Incorrect entry."
            onChange={handleDescriptionChange}
            value={enteredDescription}
          />
          <TextField
            // error
            required
            id="topic-category"
            label="类别"
            type="text"
            placeholder="请输入类别"
            // helperText="Incorrect entry."
            onChange={handleCategoryChange}
            value={enteredCategory}
          />
          <TextField
            // error
            required
            id="topic-date"
            label="日期"
            type="text"
            placeholder="请输入话题生效日期"
            onChange={handleTimeChange}
            value={enteredTime}
          />
          <TextField
            required
            id="topic-image"
            label="图像链接"
            type="text"
            placeholder="请输入图形链接"
            onChange={handleImageUrlChange}
            value={enteredImageUrl}
          />
        </div>
        <div className={classes["button-container"]}>
          <Button
            variant="contained"
            disabled={!isFormValid}
            onClick={submitHandler}
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default TopicForm;
