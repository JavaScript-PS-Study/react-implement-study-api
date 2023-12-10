# React Implement Study - TODO API

> JSPS 스터디 4주차 대면 모임 과제인 React 구현 스터디를 위한 TODO API 구현 레포입니다.

### 설치 및 실행

```zsh
npm install
npm start
```

- 위 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다.
- 서버를 실행하면 db.sqlite 파일이 생성되며 해당 파일을 삭제 시 기존의 데이터는 초기화 됩니다.

# API

## 스펙

- End point : `http://localhost:8000`

## 1. createTodo

### 요청

- URL: `/todo`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - todo: string

### 응답 예시

- status: 201 Created
- body

  ```json
  {
    "todo": "my todo",
    "id": 5,
    "isCompleted": false
  }
  ```

## 2. getTodo

### 요청

- URL: `/todo`
- Method: `GET`

### 응답 예시

- status: 200 OK
- body

```json
[
  [
    {
      "id": 1,
      "todo": "my todo1",
      "isCompleted": false
    },
    {
      "id": 2,
      "todo": "my todo2",
      "isCompleted": false
    },
    {
      "id": 3,
      "todo": "my todo3",
      "isCompleted": false
    }
  ],
  3
]
```

## 3. updateTodo

### 요청

- URL: `/todo/:id`
- Method: `PUT`
- Headers:
  - Content-Type: `application/json`
- Body:
  - todo: string
  - isCompleted: boolean

### 요청 예시

- URL: `/todo/1`
- body

  ```json
  {
    "todo": "hi todo",
    "isCompleted": true
  }
  ```

### 응답 예시

- status: 200 OK
- body

  ```json
  {
    "id": 1,
    "todo": "hi todo",
    "isCompleted": true
  }
  ```

## 4. deleteTodo

### 요청

- URL: `/todo/:id`
- Method: `DELETE`

### 요청 예시

- URL: `/todo/1`
- body: 없음

### 응답 예시

- status: 204 No Content
- body: 없음

## 5. deleteAllTodo

### 요청

- URL: `/todo/all`
- Method: `DELETE`

### 응답 예시

- status: 204 No Content
- body: 없음

## API 구현 참고 문헌

- [원티드 프리온보딩 프론트엔드 선발 과재](https://github.com/walking-sunset/selection-task)
