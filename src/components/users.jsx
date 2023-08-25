 const UserInfo = (payload) => {
  return (
    <>
      <h2>FirstName: {payload.firstName}</h2>
      <h2>LastName: {payload.lastName}</h2>
      <h2>Age: {payload.age}</h2>
    </>
  );
};

export default UserInfo