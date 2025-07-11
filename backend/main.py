from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(CORSMiddleware,
                   allow_origins=["http://localhost:3000"],
                   allow_methods=["*"],
                   allow_headers=["*"],
)

@app.get("/logs")
def get_logs():
    return {
        "logs" : [
            "2025-07-11 10:00:00 INFO Starting system...",
            "2025-07-11 10:01:12 WARN Disk almost full",
            "2025-07-11 10:02:05 ERROR Cannot open file",
        ]
    }
