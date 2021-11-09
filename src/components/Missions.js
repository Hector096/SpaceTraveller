import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getMissionsFromApi from '../redux/api';
import { getMissionsAction } from '../redux/missions';

export default function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    getMissionsFromApi()
      .then((data) => {
        dispatch(getMissionsAction(data));
      })
      .catch((err) => { throw new Error(err); });
  }, []);

  return (
    <div>
      MISSIONS
    </div>
  );
}
