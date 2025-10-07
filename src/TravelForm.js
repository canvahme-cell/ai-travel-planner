import React, { useState } from 'react';

const TravelForm = () => {
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState('');
    const [preferences, setPreferences] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ destination, dates, preferences });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Destination:</label>
                <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <div>
                <label>Travel Dates:</label>
                <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                />
            </div>
            <div>
                <label>Preferences:</label>
                <textarea
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TravelForm;