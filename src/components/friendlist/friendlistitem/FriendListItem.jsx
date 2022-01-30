import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline, id}) => {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={{name}+"`s avatar"} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

FriendListItem.propsType = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
}

export default FriendListItem;