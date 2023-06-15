import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
