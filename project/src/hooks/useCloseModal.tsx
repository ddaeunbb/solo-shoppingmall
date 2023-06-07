import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../modules/hamburgerModalSlice';

export default function useCloseModal(){
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);
};

