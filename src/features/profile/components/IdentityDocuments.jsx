import React from 'react';
import { identityTypes } from '../profileData';

export default function IdentityDocuments({ docs, editMode, onChange }) {
  const addDocument = () => {
    const newDoc = {
      IdentityProofId: Date.now(),
      UserId: 1,
      IdentityTypeId: 1,
      IdentityNumber: '',
      IdentityDocumentUrl: null,
      IsVerified: false,
      ExpiryDate: null,
      CreatedAt: new Date().toISOString(),
      UpdatedAt: new Date().toISOString()
    };
    onChange([...docs, newDoc]);
  };

  const removeDocument = (docId) => {
    onChange(docs.filter(doc => doc.IdentityProofId !== docId));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-200">Identity Documents</h3>
        {editMode && (
          <button
            onClick={addDocument}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300"
          >
            + Add Document
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {docs.map((doc) => (
          <div key={doc.IdentityProofId} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-slate-200">
                {identityTypes[doc.IdentityTypeId]}
              </h4>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  doc.IsVerified 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {doc.IsVerified ? '✓ Verified' : '⏳ Pending'}
                </span>
                {editMode && (
                  <button
                    onClick={() => removeDocument(doc.IdentityProofId)}
                    className="text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    🗑️
                  </button>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Document Number</label>
                <div className="px-4 py-3 bg-slate-700/50 rounded-xl text-slate-200 font-mono">
                  {doc.IdentityNumber}
                </div>
              </div>
              {doc.ExpiryDate && (
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Expiry Date</label>
                  <div className="px-4 py-3 bg-slate-700/50 rounded-xl text-slate-200">
                    {new Date(doc.ExpiryDate).toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
            
            {doc.IdentityDocumentUrl && (
              <div className="mt-4">
                <button className="text-emerald-400 hover:text-emerald-300 underline transition-colors duration-300">
                  📄 View Document
                </button>
              </div>
            )}
          </div>
        ))}

        {docs.length === 0 && (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">📄</div>
            <p className="text-slate-400 text-lg">No identity documents added yet</p>
            {editMode && (
              <button
                onClick={addDocument}
                className="mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300"
              >
                Add Your First Document
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
