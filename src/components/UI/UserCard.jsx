import PropTypes from "prop-types";

export const UserCard = ({ user }) => {
  return (
    <div
      className="user_card flex-[350px]  rounded-lg bg-gray-800  p-2 flex items-stretch gap-2 text-white"
      key={user.id}
    >
      <div className="user_img">
        <img
          src={user.profileImg}
          alt={`Image of ${user.name}`}
          className=" w-[100px] h-[100px] object-cover rounded-[50%]"
        />
      </div>
      <div className="user_info flex flex-col gap-1">
        <h3 className="text-lg font-bold">{user.name}</h3>
        <p className="text-sm">{user.email}</p>
        <p>
          {user.places.length}{" "}
          {user.places.length === 1 ? `Place visited` : "Places Visited"}
        </p>
      </div>
    </div>
  );
};

// Add propTypes validation
UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    profileImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    places: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
