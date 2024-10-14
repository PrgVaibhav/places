import { Cards, UserCard } from "../../components";
import { USERS } from "../../data/Users";
export const Users = () => {
  if (USERS.length === 0) {
    return (
      <div className="flex justify-center bg-slate-400 max-w-max m-auto mt-2 p-2  rounded-md shadow-md text-white">
        <p>No Users Found.!! 😞</p>
      </div>
    );
  }
  return (
    <>
      <section className="p-2">
        <h1>Explore the world</h1>
        {/* render users here */}
        <Cards className="">
          {USERS.map((user) => (
            <UserCard user={user} id={user.id} key={user.id} />
          ))}
        </Cards>
      </section>
    </>
  );
};
