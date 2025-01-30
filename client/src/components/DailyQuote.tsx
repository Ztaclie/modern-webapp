import { useState, useEffect } from "react";

interface Quote {
  id?: string;
  title: string;
  message: string;
  author?: string;
}

const DailyQuote = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editQuote, setEditQuote] = useState<Quote | null>(null);
  const [newQuote, setNewQuote] = useState<Quote>({
    title: "",
    message: "",
    author: "",
  });

  // Fetch all quotes
  const fetchQuotes = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/quotes");
      if (!response.ok) throw new Error("Failed to fetch quotes");
      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Create quote
  const createQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuote),
      });
      if (!response.ok) throw new Error("Failed to create quote");
      await fetchQuotes();
      setNewQuote({ title: "", message: "", author: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create quote");
    }
  };

  // Update quote
  const updateQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editQuote?.id) return;

    try {
      const response = await fetch(
        `http://localhost:3000/api/quotes/${editQuote.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editQuote),
        }
      );
      if (!response.ok) throw new Error("Failed to update quote");
      await fetchQuotes();
      setEditQuote(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update quote");
    }
  };

  // Delete quote
  const deleteQuote = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/quotes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete quote");
      await fetchQuotes();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete quote");
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Create New Quote Form */}
      <form
        onSubmit={createQuote}
        className="mb-8 bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-xl font-bold mb-4">Add New Quote</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newQuote.title}
            onChange={(e) =>
              setNewQuote({ ...newQuote, title: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            value={newQuote.message}
            onChange={(e) =>
              setNewQuote({ ...newQuote, message: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Author"
            value={newQuote.author}
            onChange={(e) =>
              setNewQuote({ ...newQuote, author: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Quote
          </button>
        </div>
      </form>

      {/* Edit Quote Form */}
      {editQuote && (
        <form
          onSubmit={updateQuote}
          className="mb-8 bg-white p-6 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-4">Edit Quote</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={editQuote.title}
              onChange={(e) =>
                setEditQuote({ ...editQuote, title: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
            <textarea
              value={editQuote.message}
              onChange={(e) =>
                setEditQuote({ ...editQuote, message: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={editQuote.author}
              onChange={(e) =>
                setEditQuote({ ...editQuote, author: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
            <div className="space-x-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditQuote(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Quotes List */}
      <div className="space-y-4">
        {quotes.map((quote) => (
          <div key={quote.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">{quote.title}</h3>
            <p className="text-gray-600 mb-2">{quote.message}</p>
            <p className="text-gray-500 italic">- {quote.author}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => setEditQuote(quote)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => quote.id && deleteQuote(quote.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyQuote;
