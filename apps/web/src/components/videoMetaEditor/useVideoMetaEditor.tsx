import { useToast } from '@repo/ui';
import { useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import onUpdateVideo from '@/server/actions/onUpdateVideo';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { updateVideos } from '@/redux/slices/videosSlice';

export default function useVideoMetaEditor() {
  const userVideos = useAppSelector((state) => state.userVideos.videos);
  const selectedVideo = useAppSelector((state) => state.userVideos.selectedVideo);
  const changed = useAppSelector((state) => state.userVideos.changed);
  const [formResult, onSubmit] = useFormState(onUpdateVideo, { success: false, message: '' });
  const { toast } = useToast();
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formResult.message) {
      toast({ title: formResult.message });
      dispatch(updateVideos());
    }
  }, [formResult]);

  return {
    userVideos,
    selectedVideo,
    changed,
    onSubmit,
    editMode,
    setEditMode,
    dispatch,
  };
}
