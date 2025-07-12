import React from 'react';

const ResultScreen: React.FC<{ formData: any }> = ({ formData }) => {
    return (
        <div>
            <h1>Results Summary</h1>
            <h2>Your Selections:</h2>
            <ul>
                <li>Name: {formData.name}</li>
                <li>Age: {formData.age}</li>
                <li>Gender: {formData.gender}</li>
                <li>Hobbies: {formData.hobbies.join(', ')}</li>
                <li>Gift Type: {formData.giftType}</li>
                <li>Specific Requests: {formData.specificRequests}</li>
                <li>Budget: {formData.budget}</li>
                <li>Gift Preferences: {formData.giftPreferences.join(', ')}</li>
                <li>Avoid Gifts: {formData.avoidGifts}</li>
            </ul>
        </div>
    );
};

export default ResultScreen;