import { ErrorPermiss } from "../entidades/errorauth.js";

// export function onlyAuth(req, res, next) {
//   if (!req.isAuthenticated()) {
//     return next(new ErrorPermiss());
//   }
//   next();
// }

export function soloRol(rol) {
  return function (req, res, next) {
    console.log(req.user?.role);
    if (
      req.user?.role.includes(rol) ||
      req.session.passport.user?.role.includes(rol)
    )
      return next();
    return next(new ErrorPermiss(`solo disponible para rol '${rol}'`));
  };
}
