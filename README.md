# daily-recommendation

# How to run the project locally?

1. Make sure you have node 18.x.x locall.
2. Clone the repo into your local and run "npm install".
3. Run "npm run start".
4. Go to http://localhost:3000/

# Google firebase Real-time database

https://console.firebase.google.com/ is used for managing data of topics. https://firebase.google.com/docs/reference/rest/database is the DOCs of Rest API of how to use the firebase database.

## API for getting topics

```
curl --request GET \
 --url https://my-first-project-in-fire-27d8d-default-rtdb.firebaseio.com/topics.json \
```

## API for Add a new topic

```
curl --request POST \
 --url https://my-first-project-in-fire-27d8d-default-rtdb.firebaseio.com/topics.json \
 --header 'Content-Type: application/json' \
 --data '{
"title": "测试标题 2",
"description": "测试内容 2",
"image": "https://test.image.com/jdfjdjjfd",
"time": "2023-10-22",
"category": "科技"
}'
```

## API for updating an existing topic

```
curl --request PATCH \
 --url https://my-first-project-in-fire-27d8d-default-rtdb.firebaseio.com/topics/-NhN8dFil42ToncdTi4C.json \
 --header 'Content-Type: application/json' \
 --data '{
"title": "测试标题 2",
"description": "测试内容 2",
"image": "https://test.image.com/jdfjdjjfd",
"time": "2023-10-22",
"category": "科技"
}'
```
