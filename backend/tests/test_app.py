from fastapi.testclient import TestClient

from backend.app import app

client = TestClient(app)


def test_anagram_endpoint():
    response = client.get("/anagram?length=8")
    data = response.json()
    assert response.status_code == 200
    assert len(data["word"]) == 8
