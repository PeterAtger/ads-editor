'use client';

import { Button } from '@repo/ui';
import { Check, Pen } from 'lucide-react';
import { setTitle } from '@/redux/slices/videosSlice';
import useVideoMetaEditor from './useVideoMetaEditor';

export default function VideoMetaEditor() {
  const {
    userVideos,
    selectedVideo,
    changed,
    onSubmit,
    editMode,
    setEditMode,
    dispatch,
  } = useVideoMetaEditor();

  const onSubmitSideEffect = () => {
    const formData = new FormData();
    if (!selectedVideo) return;

    const currVideo = userVideos[selectedVideo];
    formData.set('video', JSON.stringify(currVideo));
    onSubmit(formData);
  };

  const renderMessage = (message: string) => (
    <div className="w-full h-full p-6 border-2 rounded-md border-dashed flex flex-col justify-center items-center">
      {message}
    </div>
  );

  if (!userVideos) {
    return renderMessage('What are you waiting for? Add some videos!');
  }

  if (!selectedVideo) {
    return renderMessage('Select a video to get started');
  }

  const videoData = userVideos[selectedVideo];

  const handleTitleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    dispatch(setTitle({ videoIndex: selectedVideo, value: newTitle }));
  };

  const renderEditableText = () => (
    <>
      <input
        type="text"
        value={videoData.title}
        onChange={handleTitleEdit}
        className="w-full rounded-md p-2"
      />
      <Button
        variant="link"
        size="icon"
        onClick={() => {
          setEditMode(false);
        }}
      >
        <Check color="green" size={16} />
      </Button>
    </>
  );

  const renderTitle = () => (
    <>
      <h1 className="text-3xl font-bold">
        {videoData.title}
      </h1>
      <Button
        variant="link"
        size="icon"
        onClick={() => {
          setEditMode(true);
        }}
      >
        <Pen size={16} />
      </Button>
    </>
  );

  return (
    <div id="metaData" className="flex flex-col gap-4 w-full">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-2 md:max-w-screen-md sm:max-w-screen-md">
          {editMode ? renderEditableText() : renderTitle()}
        </div>
        <Button
          type="submit"
          onClick={onSubmitSideEffect}
          className=" bottom-12 right-12 shadow-lg"
          disabled={!changed}
        >
          Save
        </Button>
      </div>
      <h3 className="font-bold text-sm text-light">{new Date(videoData.createdAt).toDateString()}</h3>
    </div>
  );
}
