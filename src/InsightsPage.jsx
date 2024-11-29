import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Blob from './Blob';

const InsightsPage = () => {
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
            <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10">
                <div className="sm:mb-8 sm:flex sm:justify-center text-center">
                    <div className="relative rounded-full px-2 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-500 tracking-tightest md:tracking-widest max-w-max mx-auto">
                        <span>Reflect with Compassion</span>{' '}
                        <a href="#" className="font-semibold text-red-600 dark:text-red-400" onClick={toggleHelpDialog}>
                            <span className="absolute inset-0" aria-hidden="true" />
                            | Embrace Growth
                            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-red-600 dark:text-red-400" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent">
                        Relationship Insights
                    </h1>
                    <Blob className="" />
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Self-Reflection and Compassionate Criticism
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">1. Embrace Vulnerability</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Practice vulnerability with your partner, acknowledging strengths and
                                areas for mutual growth.
                            </p>
                        </div>
                        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">2. Communicate with Kindness</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Foster open communication with loving-kindness, promoting deeper
                                understanding and connection.
                            </p>
                        </div>
                        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">3. Reflect and Improve Together</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Continuously reflect on experiences together, appreciating each other's
                                journey and striving for mutual growth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        Explore these insights with a focus on compassionate self-reflection and
                        constructive criticism to nurture a strong and loving relationship.
                    </p>
                </div>
            </div>

            {/* Help Dialog */}
            {isHelpDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg mx-auto">
                        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">About Relationship Insights</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            This page provides insights on fostering healthy relationships through self-reflection
                            and compassionate criticism. Each section highlights key strategies to improve communication,
                            mutual understanding, and growth within your relationships.
                        </p>
                        <button
                            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400"
                            onClick={toggleHelpDialog}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InsightsPage;
