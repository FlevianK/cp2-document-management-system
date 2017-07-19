const  roleDropdownData = (roles) =>  {
  return roles.map(role => ({
    value: role.title,
    text: role.title
  }));
};

export default roleDropdownData;
