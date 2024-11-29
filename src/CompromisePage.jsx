import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Blob from './Blob';
import { auth, firestore, collection, addDoc } from './firebase'; // Import Firestore functions

const CompromisePage = () => {
    // State for partner perspectives and common ground
    const [partner1Perspective, setPartner1Perspective] = useState('');
    const [partner2Perspective, setPartner2Perspective] = useState('');
    const [commonGround, setCommonGround] = useState('');
    const [resolutionStrategy, setResolutionStrategy] = useState('');

    // State for help dialog visibility
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);

    // Handle textarea changes
    const handlePartner1Change = (event) => {
        setPartner1Perspective(event.target.value);
    };

    const handlePartner2Change = (event) => {
        setPartner2Perspective(event.target.value);
    };

    const handleCommonGroundChange = (event) => {
        setCommonGround(event.target.value);
    };

    const handleResolutionStrategyChange = (event) => {
        setResolutionStrategy(event.target.value);
    };

    // Toggle help dialog visibility
    const toggleHelpDialog = () => {
        setIsHelpDialogOpen(!isHelpDialogOpen);
    };

    // Save compromise data to Firestore
    const saveCompromise = async () => {
        try {
            const user = auth.currentUser;

            if (user) {
                const compromiseData = {
                    partner1Perspective,
                    partner2Perspective,
                    commonGround,
                    resolutionStrategy,
                    timestamp: new Date(),
                };

                // Save to Firestore collection named after user's email
                const userCollection = collection(firestore, `users/${user.email}/compromises`);
                await addDoc(userCollection, compromiseData);
                console.log('Compromise saved:', compromiseData);
                alert('Compromise saved successfully!');
            } else {
                alert('User is not authenticated.');
            }
        } catch (error) {
            console.error('Error saving compromise:', error);
            alert('Failed to save compromise.');
        }
    };

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-30rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="sm:mb-8 sm:flex sm:justify-center text-center">
                    <div className="relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto">
                        <span>It's Better to Give Than Receive</span>{' '}
                        <a href="#" className="font-semibold text-red-600 dark:text-red-400" onClick={toggleHelpDialog}>
                            <span className="absolute inset-0" aria-hidden="true" />
                            | Meet in the Middle
                            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-red-600 dark:text-red-400" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent">
                        Compromise Planner
                    </h1>
                    <Blob className="" />
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Partner 1 Perspective</h2>
                            <textarea
                                value={partner1Perspective}
                                onChange={handlePartner1Change}
                                className="w-full h-32 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                                placeholder="Partner 1, express your thoughts here..."
                            ></textarea>
                        </div>
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Partner 2 Perspective</h2>
                            <textarea
                                value={partner2Perspective}
                                onChange={handlePartner2Change}
                                className="w-full h-32 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                                placeholder="Partner 2, express your thoughts here..."
                            ></textarea>
                        </div>
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Common Ground</h2>
                            <textarea
                                value={commonGround}
                                onChange={handleCommonGroundChange}
                                className="w-full h-32 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                                placeholder="Identify areas of agreement..."
                            ></textarea>
                        </div>
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Resolution Strategy</h2>
                            <textarea
                                value={resolutionStrategy}
                                onChange={handleResolutionStrategyChange}
                                className="w-full h-32 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                                placeholder="Plan your compromise strategy..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            onClick={saveCompromise}
                            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400"
                        >
                            Save Compromise
                        </button>
                    </div>
                </div>
            </div>

            {/* Help dialog */}
            {isHelpDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">About Compromise Planning</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            A compromise planner helps partners find common ground and develop a resolution strategy. It's a useful tool for navigating disagreements and ensuring that both partners' perspectives are considered.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            To use this tool effectively, each partner should provide their perspective, identify common ground, and agree on a resolution strategy. This process fosters understanding and collaboration.
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

export default CompromisePage;
