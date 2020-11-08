from fastapi.testclient import TestClient

from backend.app import app

client = TestClient(app)


def test_anagram_endpoint_default_length():
    response = client.get("/anagram")
    data = response.json()
    assert response.status_code == 200
    assert len(data["word"]) == 7
    assert len(data["solutions"]) > 0


def test_anagram_endpoint_explicit_length_request():
    response = client.get("/anagram?length=8")
    data = response.json()
    assert response.status_code == 200
    assert len(data["word"]) == 8
    assert len(data["solutions"]) > 0
