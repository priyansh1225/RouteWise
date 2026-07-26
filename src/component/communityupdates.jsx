import { useEffect, useState } from "react";
import api from "../services/api";

function CommunityUpdates() {
  const [updates, setUpdates] = useState([]);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

  const loadUpdates = async () => {
    try {
      const res = await api.get("/api/updates");
      setUpdates(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUpdates();
  }, []);

  const handleSubmit = async () => {
    if (!message.trim()) return;

    try {
      if (editingId) {
        await api.put(`/api/updates/${editingId}`, {
          message,
        });
      } else {
        await api.post("/api/updates", {
          message,
        });
      }

      setMessage("");
      setEditingId(null);
      loadUpdates();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (update) => {
    setMessage(update.message);
    setEditingId(update._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this update?")) return;

    try {
      await api.delete(`/api/updates/${id}`);
      loadUpdates();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="updates-section">
      <h2>Community Updates</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Write community update..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="custom-input"
        />

        <button
          className="custom-btn"
          onClick={handleSubmit}
        >
          {editingId ? "Update" : "Add Update"}
        </button>
      </div>

      {updates.length === 0 ? (
        <div className="update-card">
          No community updates available.
        </div>
      ) : (
        updates.map((update) => (
          <div
            key={update._id}
            className="update-card"
          >
            <p>{update.message}</p>

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                className="custom-btn"
                onClick={() => handleEdit(update)}
              >
                Edit
              </button>

              <button
                className="logout-btn"
                onClick={() =>
                  handleDelete(update._id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default CommunityUpdates;