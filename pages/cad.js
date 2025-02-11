import { useState, useEffect } from 'react';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const ContactEntries = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contact'));
        const entriesData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            timestamp: data.timestamp instanceof Timestamp ? data.timestamp.toDate() : null
          };
        });
        setEntries(entriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contact entries:", error);
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Form Entries</h1>
      <div className="grid gap-4">
        {entries.map((entry) => (
          <div key={entry.id} className="border p-4 rounded-lg shadow">
            <h2 className="font-semibold">Name: {entry.name}</h2>
            <p>Email: {entry.email}</p>
            <p>Phone: {entry.phone}</p>
            <p>Message: {entry.message}</p>
            <p className="text-sm text-gray-500">
              Submitted: {entry.timestamp?.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactEntries;
