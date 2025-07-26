import { createContext, useContext, useState, useCallback } from 'react';

const SessionContext = createContext(null);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [stories, setStories] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [currentStory, setCurrentStory] = useState(null);
  const [votes, setVotes] = useState({});
  const [isRevealed, setIsRevealed] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isSpectator, setIsSpectator] = useState(false);

  const addStory = useCallback((story) => {
    setStories(prev => [...prev, { ...story, id: Date.now().toString() }]);
  }, []);

  const updateStory = useCallback((id, updates) => {
    setStories(prev => prev.map(story => 
      story.id === id ? { ...story, ...updates } : story
    ));
  }, []);

  const deleteStory = useCallback((id) => {
    setStories(prev => prev.filter(story => story.id !== id));
  }, []);

  const startVoting = useCallback((storyId) => {
    setCurrentStory(storyId);
    setVotes({});
    setIsRevealed(false);
    setTimer(0);
  }, []);

  const submitVote = useCallback((userId, value) => {
    setVotes(prev => ({
      ...prev,
      [userId]: value
    }));
  }, []);

  const toggleReveal = useCallback(() => {
    setIsRevealed(prev => !prev);
  }, []);

  const kickParticipant = useCallback((userId) => {
    setParticipants(prev => prev.filter(p => p.id !== userId));
  }, []);

  const startTimer = useCallback((seconds) => {
    setTimer(seconds);
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const value = {
    session,
    setSession,
    stories,
    currentStory,
    votes,
    isRevealed,
    timer,
    participants,
    isSpectator,
    setIsSpectator,
    addStory,
    updateStory,
    deleteStory,
    startVoting,
    submitVote,
    toggleReveal,
    kickParticipant,
    startTimer,
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};
