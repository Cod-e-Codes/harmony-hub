import React, { useState } from 'react';
import Blob from './Blob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { auth, firestore, collection, addDoc } from './firebase';

const GratitudePage = () => {
    const [gratitudeNotes, setGratitudeNotes] = useState([]);
    const [partner1Note, setPartner1Note] = useState('');
    const [partner2Note, setPartner2Note] = useState('');
    const [sharedNote, setSharedNote] = useState('');
    const [images, setImages] = useState([]);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recordedBlobs, setRecordedBlobs] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);

    const handleAddNote = () => {
        if (partner1Note || partner2Note || sharedNote) {
            const newNote = {
                partner1Note,
                partner2Note,
                sharedNote,
                voiceMemo: recordedBlobs.length > 0 ? new Blob(recordedBlobs, { type: 'audio/webm' }) : null
            };
            setGratitudeNotes([...gratitudeNotes, newNote]);
            setPartner1Note('');
            setPartner2Note('');
            setSharedNote('');
            setRecordedBlobs([]);
        }
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...newImages]);
    };

    const handleStartRecording = () => {
        const constraints = { audio: true };
        navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream);
                setMediaRecorder(mediaRecorder);
                const recordedBlobs = [];
                mediaRecorder.ondataavailable = event => {
                    if (event.data && event.data.size > 0) {
                        recordedBlobs.push(event.data);
                    }
                };
                mediaRecorder.onstop = () => {
                    const blob = new Blob(recordedBlobs, { type: 'audio/webm' });
                    setRecordedBlobs([blob]);
                };
                mediaRecorder.start();
                setIsRecording(true);
            })
            .catch(error => {
                console.error('Error accessing microphone:', error);
            });
    };

    const handleStopRecording = () => {
        if (mediaRecorder && isRecording) {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    const handlePlayRecording = () => {
        if (recordedBlobs.length > 0) {
            const blob = recordedBlobs[0];
            const audio = new Audio(URL.createObjectURL(blob));
            audio.play();
            setIsPlaying(true);
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
            });
        }
    };

    const toggleHelpDialog = () => {
        setIsHelpDialogOpen(!isHelpDialogOpen);
    };

    const saveGratitude = async () => {
        try {
            const user = auth.currentUser;

            if (user) {
                const gratitudeData = {
                    gratitudeNotes,
                    partner1Note,
                    partner2Note,
                    sharedNote,
                    images,
                    recordedBlobs,
                    timestamp: new Date(),
                };

                // Save to Firestore collection named after user's email
                const userCollection = collection(firestore, `users/${user.email}/gratitudes`);
                await addDoc(userCollection, gratitudeData);
                console.log('Gratitude saved:', gratitudeData);
                alert('Gratitude saved successfully!');
            } else {
                alert('User is not authenticated.');
            }
        } catch (error) {
            console.error('Error saving gratitude:', error);
            alert('Failed to save gratitude.');
        }
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
                        Put Some Gratitude{' '}
                        <a href="#" className="font-semibold text-red-600 dark:text-red-400" onClick={toggleHelpDialog}>
                            <span className="absolute inset-0" aria-hidden="true" />
                            | In Your Attitude<span aria-hidden="true"></span>
                            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-red-600 dark:text-red-400" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent">
                        Gratitude Board
                    </h1>
                    <Blob className="" />
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Partner 1 Gratitude</h2>
                        <textarea
                            className="w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                            value={partner1Note}
                            onChange={(e) => setPartner1Note(e.target.value)}
                            placeholder="Partner 1, express your gratitude here..."
                        ></textarea>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Partner 2 Gratitude</h2>
                        <textarea
                            className="w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                            value={partner2Note}
                            onChange={(e) => setPartner2Note(e.target.value)}
                            placeholder="Partner 2, express your gratitude here..."
                        ></textarea>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Shared Gratitude</h2>
                        <textarea
                            className="w-full h-24 mt-2 p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                            value={sharedNote}
                            onChange={(e) => setSharedNote(e.target.value)}
                            placeholder="Share something you're grateful for..."
                        ></textarea>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="mt-4"
                            onChange={handleImageUpload}
                        />
                        <div className="flex flex-wrap gap-2 mt-4">
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Uploaded ${index}`} className="w-24 h-24 object-cover rounded-lg" />
                            ))}
                        </div>
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 col-span-1 md:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Voice Memo</h2>
                            <div className="flex justify-between items-center">
                                <div className="flex-grow mr-2">
                                    {isRecording ? (
                                        <button onClick={handleStopRecording} className="px-4 py-2 bg-red-600 text-white rounded-lg">Stop Recording</button>
                                    ) : (
                                        <button onClick={handleStartRecording} className="px-4 py-2 bg-green-600 text-white rounded-lg">Start Recording</button>
                                    )}
                                    {recordedBlobs.length > 0 && !isPlaying && (
                                        <button onClick={handlePlayRecording} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg">Play Recording</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <div className="mt-8 text-center">
                        <button
                            onClick={saveGratitude}
                            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400"
                        >
                            Save Board
                        </button>
                    </div>
                </div>
            </div>
            {/* Help Dialog */}
            {isHelpDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg mx-auto">
                        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">About Gratitude Boards</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            The gratitude board is a powerful tool for couples to record their daily
                            moments of gratitude. By adding notes, images, and voice memos, you create
                            a lasting record of your positive experiences. It's a great way to stay
                            connected and appreciative of each other, enhancing your relationship and
                            creating a shared history of joy and gratitude.
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

export default GratitudePage;
