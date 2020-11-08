from fastapi.testclient import TestClient

from backend.app import app

client = TestClient(app)


def test_read_main():
    response = client.get("/anagram?length=8")
    assert response.status_code == 200
