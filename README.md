# Mystery Room — The Last Lamp

## Run the backend

```sh
cd server
npm install
npm start
```

The API runs at `http://localhost:3001`. You can set `PORT` in `server/.env`.
Progress lives in `server/store.js`, is shared by all visitors, and resets when
the server restarts. No database or login is needed.

## Backend API

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/mysteries` | List mysteries and their completion status |
| GET | `/api/mysteries/:id` | Read the current stage, clues, and revealed hints; returns the final reveal when solved |
| GET | `/api/mysteries/:id/clues` | Return the current stage's clues as an array; `404` if missing, `409` if already solved |
| POST | `/api/mysteries/:id/answers` | Submit a JSON object with an `answer` string |
| PATCH | `/api/mysteries/:id/hint` | Reveal the next hint for the current stage; no body needed |

Answers must contain 1–100 characters after trimming. Matching ignores letter
case and repeated whitespace, but requires the complete answer. A wrong answer
returns `200` with `correct: false` and does not change progress. A correct answer
advances the stage and resets its hint counter. Stage numbers start at zero.

Hint responses contain `hint`, `currentStage`, `hintsUsed`, and `hintsTotal`.
The detail endpoint's `hints` array includes only hints already requested.
Answers and future clues are never sent to the client.

Errors use `{ "error": "message" }`: `400` for invalid answers or malformed JSON,
`404` for missing mysteries/routes, `409` for answers or hints after completion
or exhausted hints, and `413` for an oversized request body.

## Test without the frontend

```sh
cd server
npm test
```

The automated test starts its own server on a free port and checks every endpoint,
invalid input, missing mysteries, hints, wrong answers, and a complete solution.
It does not change progress in a separately running development server.

With the backend running, try these requests in another terminal
(on Windows PowerShell, use `curl.exe`):

```sh
curl http://localhost:3001/api/mysteries
curl http://localhost:3001/api/mysteries/1
curl http://localhost:3001/api/mysteries/1/clues
curl -X PATCH http://localhost:3001/api/mysteries/1/hint
curl -X POST http://localhost:3001/api/mysteries/1/answers -H "Content-Type: application/json" -d '{"answer":"Murad"}'
curl -X POST http://localhost:3001/api/mysteries/1/answers -H "Content-Type: application/json" -d '{}'
curl http://localhost:3001/api/mysteries/999
```

For Postman or Thunder Client, use the same URLs and select a raw JSON body
for POST. To complete the story, submit `Murad`, `14`, then `West Landing`;
request the mystery again to read the final reveal. Restart the server to replay.

## Run the frontend

In a separate terminal:

```sh
cd client
npm install
npm run dev
```

The existing Vite configuration proxies `/api` to backend port `3001`.
The frontend play screens still need to be implemented.
