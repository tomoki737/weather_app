from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import urllib.request
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def root():
    jma_json = urllib.request.urlopen("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json")
    endata = jma_json.read()
    print(jma_json)
    return {"Hello": endata}
