import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(item => (
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isonline}
          />
        ))}
      </ul>
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
