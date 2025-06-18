import React from "react";

export default function ConfirmationModal({ candidate, onConfirm, onCancel }) {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-40"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative z-10">
        <button
          onClick={onCancel}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Confirm Your Vote
        </h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to vote for <strong>{candidate.name}</strong> from <strong>{candidate.party}</strong>?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}