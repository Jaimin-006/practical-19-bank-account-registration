import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([
    { id: 101, name: 'Jaiminpuri Bava', course: 'BCA', marks: '92%' },
    { id: 102, name: 'Patel Brijesh', course: 'BCA', marks: '88%' },
    { id: 103, name: 'Prajapati Harsh', course: 'BCA', marks: '84%' },
    { id: 104, name: 'Deep Patel', course: 'BCA', marks: '79%' },
    { id: 105, name: 'Love Patel', course: 'BCA', marks: '81%' }
  ]);

  const [deletedLog, setDeletedLog] = useState([]);

  function handleDelete(id) {
    const studentToDelete = students.find((s) => s.id === id);
    if (!studentToDelete) return;

    if (window.confirm(`Are you sure you want to delete student: ${studentToDelete.name}?`)) {
      setStudents(students.filter((s) => s.id !== id));
      setDeletedLog((prev) => [`Removed ${studentToDelete.name} (${new Date().toLocaleTimeString()})`, ...prev]);
    }
  }

  function handleReset() {
    setStudents([
      { id: 101, name: 'Jaiminpuri Bava', course: 'BCA', marks: '92%' },
      { id: 102, name: 'Patel Brijesh', course: 'BCA', marks: '88%' },
      { id: 103, name: 'Prajapati Harsh', course: 'BCA', marks: '84%' },
      { id: 104, name: 'Deep Patel', course: 'BCA', marks: '79%' },
      { id: 105, name: 'Love Patel', course: 'BCA', marks: '81%' }
    ]);
    setDeletedLog([]);
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Student Management: Delete Operation</h1>
            <p className="text-xs text-slate-500">Remove records interactively with state filtering.</p>
          </div>
          {students.length < 5 && (
            <button
              onClick={handleReset}
              className="text-xs text-indigo-600 hover:underline font-semibold"
            >
              Reset List
            </button>
          )}
        </div>

        {students.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-400">
            All student records have been deleted. Click "Reset List" to restore.
          </div>
        ) : (
          <div className="space-y-2.5">
            {students.map((student) => (
              <div
                key={student.id}
                className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {student.name} <span className="text-xs text-slate-400 font-normal">#{student.id}</span>
                  </h3>
                  <p className="text-xs text-slate-500">{student.course} • Score: {student.marks}</p>
                </div>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="bg-rose-600 hover:bg-rose-700 text-white text-xs px-3 py-1.5 rounded-md font-semibold transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {deletedLog.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Audit Deletion Log:</h4>
            <ul className="text-xs text-rose-700 space-y-1 font-mono">
              {deletedLog.map((log, idx) => (
                <li key={idx}>- {log}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
