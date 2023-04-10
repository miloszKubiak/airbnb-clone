export const checkPermissions = (requestUser: any, resourceUserId: any) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new Error("Not authorized to access this route");
};
