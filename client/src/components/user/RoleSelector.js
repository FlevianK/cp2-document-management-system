export function roleDropdownData(roles) {
  return roles.map(role => {
    return {
      value: role.title,
      text: role.title
    };
  });
}