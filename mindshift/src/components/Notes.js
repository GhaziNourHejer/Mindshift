import React from "react";
import styles from "./Notes.module.css";

const Notes = () => {
  const notesData = [
    {
      id: 1,
      title: "Today's personal reflection",
      dateCreated: "14/11/2024",
      lastModified: "14/11/2024",
      category: "Today",
    },
    {
      id: 2,
      title: "Weekly Therapy Progress",
      dateCreated: "30/10/2024",
      lastModified: "10/11/2024",
      category: "October",
    },
    {
      id: 3,
      title: "My goals for November",
      dateCreated: "03/10/2024",
      lastModified: "17/10/2024",
      category: "October",
    },
    {
      id: 4,
      title: "Thoughts of the day",
      dateCreated: "17/09/2024",
      lastModified: "17/09/2024",
      category: "September",
    },
  ];

  const groupedNotes = notesData.reduce((acc, note) => {
    if (!acc[note.category]) acc[note.category] = [];
    acc[note.category].push(note);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Notes</h1>
        <button className={styles.addButton}>Add new note</button>
      </header>
      <div className={styles.notesList}>
        {Object.keys(groupedNotes).map((category) => (
          <div key={category} className={styles.category}>
            <h2>{category}</h2>
            {groupedNotes[category].map((note) => (
              <div key={note.id} className={styles.note}>
                <h3>{note.title}</h3>
                <p>
                  <strong>Date created:</strong> {note.dateCreated}
                </p>
                <p>
                  <strong>Last modified:</strong> {note.lastModified}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
