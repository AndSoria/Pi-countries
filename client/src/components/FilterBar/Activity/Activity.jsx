/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { allActivities, filterActivity } from '../../../redux/action';
import style from './Activity.module.css';

const Activity = ({setFilterApplied}) => {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);

  useEffect(() => {
    dispatch(allActivities());
  }, [dispatch]);

  const handleActivity = (e) => {
    const option = e.target.value;
    console.log(option);
    setFilterApplied(true)
    dispatch(filterActivity(option));
    
  };

  return (
    <div className={style.actContainer}>
      <select value='' className={style.option} onChange={handleActivity}>
        <option  value=''>Activities</option>
        <option value="allActivities">All activities</option>
        
        {
            
        activities.map((activity) => (
          <option key={activity.id} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Activity;