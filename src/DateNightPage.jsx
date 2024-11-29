import React, { useState } from 'react';
import Blob from './Blob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const DateNightPage = () => {
    const [suggestedDate, setSuggestedDate] = useState('');
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);

    // Function to generate a random date idea
    const generateDateIdea = () => {
        const dateIdeas = [
            "Cook a new recipe together",
            "Have a picnic in the park",
            "Explore a local museum",
            "Watch a classic movie at home",
            "Go stargazing",
            "Attend a virtual concert or event"
        ];
        const randomIndex = Math.floor(Math.random() * dateIdeas.length);
        return dateIdeas[randomIndex];
    };

    // Function to handle suggesting a new date idea
    const suggestDateIdea = () => {
        const idea = generateDateIdea();
        setSuggestedDate(idea);
    };

    // Toggle help dialog visibility
    const toggleHelpDialog = () => {
        setIsHelpDialogOpen(!isHelpDialogOpen);
    };

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen overflow-hidden">
            {/* Background Blur Effect */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff7f7f] to-[#34d399] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff7f7f] to-[#34d399] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            {/* Main Content */}
            <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10">
                <div className="sm:mb-8 sm:flex sm:justify-center text-center">
                    <div className="relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto">
                        Remember and Plan{' '}
                        <a href="#" className="font-semibold text-red-600 dark:text-red-400" onClick={toggleHelpDialog}>
                            <span className="absolute inset-0" aria-hidden="true" />
                            | Create Moments Together<span aria-hidden="true"></span>
                            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-red-600 dark:text-red-400" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent">
                        Date Night Timeline
                    </h1>
                    <Blob className="" />
                    <div className="mt-8">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            Looking for ideas? How about...
                        </p>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={suggestDateIdea}
                                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400"
                            >
                                Get a Date Idea
                            </button>
                        </div>
                        {suggestedDate && (
                            <p className="mt-4 text-xl font-semibold text-center text-green-600 dark:text-green-400">
                                How about: {suggestedDate}?
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Help dialog */}
            {isHelpDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">About Date Night</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            A shared date night can strengthen your relationship by creating opportunities for quality time and shared experiences. This page helps you generate fun and creative date ideas that you can enjoy together.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            To use this page, simply click the "Get a Date Idea" button to receive a random suggestion for a date night activity. You can also explore past date ideas and plan something special together.
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

export default DateNightPage;
