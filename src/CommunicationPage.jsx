import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Blob from './Blob';

const CommunicationPage = () => {
    // State for help dialog visibility
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);

    // Toggle help dialog visibility
    const toggleHelpDialog = () => {
        setIsHelpDialogOpen(!isHelpDialogOpen);
    };

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden">
            {/* Background Blur Effect */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#34d399] to-[#f87171] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            {/* Main Content */}
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10">
                <div className="sm:mb-8 sm:flex sm:justify-center text-center">
                    <div className="relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto">
                        Visualize Your Vulnerability{' '}
                        <a href="#" className="font-semibold text-red-600 dark:text-red-400" onClick={toggleHelpDialog}>
                            <span className="absolute inset-0" aria-hidden="true" />
                            | Data Analysis and Charts<span aria-hidden="true"></span>
                            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-red-600 dark:text-red-400" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent py-2">
                        Communication Charts
                    </h1>
                    <Blob className="" />
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Tools to Enhance Your Relationship
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">1. Active Listening</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Improve communication by practicing active listening techniques.
                                Listen attentively without interrupting.
                            </p>
                        </div>
                        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">2. Conflict Resolution</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Learn strategies to resolve conflicts constructively, aiming for
                                win-win solutions.
                            </p>
                        </div>
                        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">3. Emotional Intelligence</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Develop emotional intelligence to better understand and manage
                                emotions in yourself and your partner.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        For more personalized advice and guidance on improving communication in
                        your relationship, consider consulting with a relationship counselor.
                    </p>
                </div>
            </div>

            {/* Help dialog */}
            {isHelpDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">About Data Analysis and Charts</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Data analysis and charts help visualize communication patterns and trends in your relationship. By examining these visual representations, you can gain insights into your interactions, identify areas for improvement, and track progress over time.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Tools like charts and graphs can illustrate things like frequency of communication, emotional tone, and conflict resolution success rates, helping you make data-driven decisions to enhance your relationship.
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

export default CommunicationPage;
