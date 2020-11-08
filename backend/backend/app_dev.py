import uvicorn


if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=5000)
    # app.run(host="0.0.0.0", port=5000, debug=True)
