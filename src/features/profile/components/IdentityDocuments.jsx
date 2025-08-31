import React from 'react';
import { identityTypes } from '../profileData';

export default function IdentityDocuments({ docs, editMode, onChange }) {
  const addDocument = () => {
    const newDoc = {
      IdentityProofId: Date.now(), // Use timestamp as unique ID
      UserId: 1,
      IdentityTypeId: 1,
      IdentityNumber: '',
      IdentityDocumentUrl: null,
      IsVerified: false,
      ExpiryDate: null,
      CreatedAt: new Date().toISOString(),
      UpdatedAt: new Date().toISOString()
    };
    
    // Use functional state update to ensure we have the latest state
    onChange(prevDocs => [...prevDocs, newDoc]);
  };

  const removeDocument = (docId) => {
    onChange(prevDocs => prevDocs.filter(doc => doc.IdentityProofId !== docId));
  };

  const updateDocument = (docId, field, value) => {
    onChange(prevDocs => 
      prevDocs.map(doc => 
        doc.IdentityProofId === docId 
          ? { ...doc, [field]: value, UpdatedAt: new Date().toISOString() }
          : doc
      )
    );
  };

  const handleFileChange = (e, docId) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/pdf'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPEG, PNG, and PDF files are allowed');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      updateDocument(docId, 'IdentityDocumentUrl', reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-200">Identity Documents</h3>
        {editMode && (
          <button
            onClick={addDocument}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2"
          >
            <span>📄</span>
            <span>Add Document</span>
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {docs.map((doc) => (
          <div key={doc.IdentityProofId} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                {editMode ? (
                  <select
                    value={doc.IdentityTypeId}
                    onChange={(e) => updateDocument(doc.IdentityProofId, 'IdentityTypeId', parseInt(e.target.value))}
                    className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-emerald-500"
                  >
                    {Object.entries(identityTypes).map(([id, type]) => (
                      <option key={id} value={id}>{type}</option>
                    ))}
                  </select>
                ) : (
                  <h4 className="text-lg font-semibold text-slate-200">
                    {identityTypes[doc.IdentityTypeId]}
                  </h4>
                )}
              </div>
              
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
                    className="text-red-400 hover:text-red-300 transition-colors duration-300 p-2 hover:bg-red-500/10 rounded-lg"
                  >
                    🗑️
                  </button>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Document Number</label>
                {editMode ? (
                  <input
                    type="text"
                    value={doc.IdentityNumber}
                    onChange={(e) => updateDocument(doc.IdentityProofId, 'IdentityNumber', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter document number"
                  />
                ) : (
                  <div className="px-4 py-3 bg-slate-700/50 rounded-xl text-slate-200 font-mono">
                    {doc.IdentityNumber || 'Not provided'}
                  </div>
                )}
              </div>
              
              {/* Expiry Date for applicable documents */}
              {[2, 3].includes(doc.IdentityTypeId) && ( // Passport and Driving License
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Expiry Date</label>
                  {editMode ? (
                    <input
                      type="date"
                      value={doc.ExpiryDate ? doc.ExpiryDate.split('T')[0] : ''}
                      onChange={(e) => updateDocument(doc.IdentityProofId, 'ExpiryDate', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-slate-700/50 rounded-xl text-slate-200">
                      {doc.ExpiryDate ? new Date(doc.ExpiryDate).toLocaleDateString() : 'Not provided'}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* File Upload Section */}
            {editMode && (
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-400 mb-2">
                  Upload Document (Max 5MB - JPEG, PNG, PDF)
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,application/pdf"
                  onChange={(e) => handleFileChange(e, doc.IdentityProofId)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                />
              </div>
            )}
            
            {/* Document Preview */}
            {doc.IdentityDocumentUrl && (
              <div className="mt-4">
                <label className="block text-sm font-semibold text-slate-400 mb-2">Document Preview</label>
                {doc.IdentityDocumentUrl.includes('data:application/pdf') ? (
                  <div className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-xl">
                    <span className="text-2xl">📄</span>
                    <div>
                      <p className="text-slate-200 font-semibold">PDF Document</p>
                      <button className="text-emerald-400 hover:text-emerald-300 underline text-sm">
                        Click to view PDF
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative inline-block">
                    <img
                      src={doc.IdentityDocumentUrl}
                      alt="Document preview"
                      className="w-48 h-32 object-cover rounded-xl border border-slate-600"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100">
                      <button className="text-white bg-black/50 px-3 py-1 rounded-lg text-sm">
                        View Full Size
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Document Info */}
            <div className="mt-4 text-xs text-slate-400 space-y-1">
              <p>Added: {new Date(doc.CreatedAt).toLocaleDateString()}</p>
              {doc.UpdatedAt !== doc.CreatedAt && (
                <p>Last Updated: {new Date(doc.UpdatedAt).toLocaleDateString()}</p>
              )}
            </div>
          </div>
        ))}

        {docs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📄</div>
            <h4 className="text-xl font-semibold text-slate-300 mb-2">No Identity Documents</h4>
            <p className="text-slate-400 mb-6">
              Add your identity documents for verification and secure bookings
            </p>
            {editMode && (
              <button
                onClick={addDocument}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>📄</span>
                <span>Add Your First Document</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Information Box */}
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
        <h4 className="text-blue-400 font-semibold text-sm mb-2">📋 Document Guidelines:</h4>
        <ul className="text-slate-300 text-sm space-y-1">
          <li>• Upload clear, high-resolution images or PDF files</li>
          <li>• Ensure all text and details are clearly visible</li>
          <li>• File size must be less than 5MB</li>
          <li>• Accepted formats: JPEG, PNG, PDF</li>
          <li>• Documents will be verified within 24-48 hours</li>
          <li>• Keep your documents up to date for seamless bookings</li>
        </ul>
      </div>
    </div>
  );
}
