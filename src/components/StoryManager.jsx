import { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LinkIcon from '@mui/icons-material/Link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useSession } from '../contexts/SessionContext';

const StoryManager = () => {
    const { stories, addStory, updateStory, deleteStory, startVoting } = useSession();
    const [open, setOpen] = useState(false);
    const [editingStory, setEditingStory] = useState(null);
    const [storyData, setStoryData] = useState({
        title: '',
        description: '',
        link: '',
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditingStory(null);
        setStoryData({ title: '', description: '', link: '' });
    };

    const handleSubmit = () => {
        if (editingStory) {
            updateStory(editingStory.id, storyData);
        } else {
            addStory(storyData);
        }
        handleClose();
    };

    const handleEdit = (story) => {
        setEditingStory(story);
        setStoryData({
            title: story.title,
            description: story.description,
            link: story.link,
        });
        setOpen(true);
    };

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    pb: 2
                }}
            >
                <Typography variant="h5">Stories</Typography>
                <Button
                    variant="contained"
                    onClick={handleOpen}
                    size="large"
                    sx={{ minWidth: 120 }}
                >
                    Add Story
                </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {stories.map((story) => (
                    <Box
                        key={story.id}
                        sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                            p: 2,
                            backgroundColor: 'background.paper',
                            '&:hover': {
                                boxShadow: 1
                            }
                        }}
                    >
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                {story.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    whiteSpace: 'pre-wrap',
                                    mb: 2
                                }}
                            >
                                {story.description}
                            </Typography>
                            {story.link && (
                                <Button
                                    href={story.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outlined"
                                    size="small"
                                    startIcon={<LinkIcon />}
                                >
                                    View in JIRA
                                </Button>
                            )}
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: 1,
                                borderTop: '1px solid',
                                borderColor: 'divider',
                                pt: 2,
                                mt: 1
                            }}
                        >
                            <IconButton
                                onClick={() => handleEdit(story)}
                                color="primary"
                                size="small"
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => deleteStory(story.id)}
                                color="error"
                                size="small"
                            >
                                <DeleteIcon />
                            </IconButton>
                            <Button
                                variant="contained"
                                onClick={() => startVoting(story.id)}
                                sx={{ ml: 2 }}
                                startIcon={<PlayArrowIcon />}
                            >
                                Start Voting
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{editingStory ? 'Edit Story' : 'Add Story'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        fullWidth
                        value={storyData.title}
                        onChange={(e) => setStoryData(prev => ({ ...prev, title: e.target.value }))}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={storyData.description}
                        onChange={(e) => setStoryData(prev => ({ ...prev, description: e.target.value }))}
                    />
                    <TextField
                        margin="dense"
                        label="JIRA Link"
                        fullWidth
                        value={storyData.link}
                        onChange={(e) => setStoryData(prev => ({ ...prev, link: e.target.value }))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained">
                        {editingStory ? 'Save' : 'Add'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default StoryManager;
