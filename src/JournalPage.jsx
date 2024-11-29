import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Blob from './Blob';
import { auth, firestore, collection, addDoc } from './firebase';

const JournalPage = () => {
    // State for reflections and memorable moments
    const [partner1Reflection, setPartner1Reflection] = useState('');
    const [partner2Reflection, setPartner2Reflection] = useState('');
    const [memorableMoments, setMemorableMoments] = useState('');
    const [sharedGoals, setSharedGoals] = useState('');

    // State for help dialog visibility
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);

    // Handle textarea changes
    const handlePartner1Change = (event) => {
        setPartner1Reflection(event.target.value);
    };

    const handlePartner2Change = (event) => {
        setPartner2Reflection(event.target.value);
    };

    const handleMemorableMomentsChange = (event) => {
        setMemorableMoments(event.target.value);
    };

    const handleSharedGoalsChange = (event) => {
        setSharedGoals(event.target.value);
    };

    // Toggle help dialog visibility
    const toggleHelpDialog = () => {
        setIsHelpDialogOpen(!isHelpDialogOpen);
    };

    const saveJournal = async () => {
        try {
            const user = auth.currentUser;

            if (user) {
                const journalData = {
                    partner1Reflection,
                    partner2Reflection,
                    memorableMoments,
                    sharedGoals,
                    timestamp: new Date(),
                };

                // Create a reference to the user's "journals" subcollection
                const userCollection = collection(firestore, `users/${user.email}/journals`);
                await addDoc(userCollection, journalData);
                console.log('Journal saved:', journalData);
                alert('Journal saved successfully!');
            } else {
                alert('User is not authenticated.');
            }
        } catch (error) {
            console.error('Error saving journal:', error);
            alert('Failed to save journal.');
        }
    };

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            {/* Background and blur effects */}
            <div
                className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                aria-hidden="true"
                style={{ bottom: 'auto' }} // Adjust this as needed
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                aria-hidden="true"
                style={{ top: 'auto' }} // Adjust this as needed
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            {/* Main content of JournalPage */}
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="sm:mb-8 sm:flex sm:justify-center text-center">
                    <div className="relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto">
                        <span>A Journal Meant for Two</span>{' '}
                        <a href="#" className="font-semibold text-red-600 dark:text-red-400" onClick={toggleHelpDialog}>
                            <span className="absolute inset-0" aria-hidden="true" />
                            | Share Your Love
                            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-red-600 dark:text-red-400" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent">
                        Shared Journal
                    </h1>
                    <Blob className="" />
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Today's Reflections</h2>
                            <div className="mt-4">
                                <h3 className="text-xl text-gray-600 dark:text-gray-300">Partner 1</h3>
                                <textarea
                                    value={partner1Reflection}
                                    onChange={handlePartner1Change}
                                    className="w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                                    placeholder="Write your thoughts here..."
                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl text-gray-600 dark:text-gray-300">Partner 2</h3>
                                <textarea
                                    value={partner2Reflection}
                                    onChange={handlePartner2Change}
                                    className="w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                                    placeholder="Write your thoughts here..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Memorable Moments & Goals</h2>
                            <div className="mt-4">
                                <h3 className="text-xl text-gray-600 dark:text-gray-300">Memorable Moments</h3>
                                <textarea
                                    value={memorableMoments}
                                    onChange={handleMemorableMomentsChange}
                                    className="w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                                    placeholder="Write your memorable moments here..."
                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl text-gray-600 dark:text-gray-300">Shared Goals</h3>
                                <textarea
                                    value={sharedGoals}
                                    onChange={handleSharedGoalsChange}
                                    className="w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                                    placeholder="Write your shared goals here..."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={saveJournal}
                        className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400"
                    >
                        Save Journal
                    </button>
                </div>
            </div>

            {/* Help dialog */}
            {isHelpDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">About Shared Journals</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            A shared journal allows both partners to reflect on their experiences, thoughts, and goals together. It strengthens communication and deepens the connection between partners by providing a space to share and document their journey.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            To use this shared journal, each partner can enter their reflections in the sections provided. You can also set shared goals and record memorable moments that you experience together.
                        </p>
                        <button
                            onClick={toggleHelpDialog}
                            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JournalPage;
