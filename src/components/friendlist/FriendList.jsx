import PropTypes from 'prop-types';
import FriendListItem from './friendlistitem/FriendListItem'
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
  return (<ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem 
        avatar={avatar} 
        name={name} 
        isOnline={isOnline} 
        key={id}
      />
    ))}
  </ul>);
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default FriendList;