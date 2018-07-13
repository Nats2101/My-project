// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAHni6WACfW6C13br7ohiFNmYkkUWskFIY",
    authDomain: "my-project-363ab.firebaseapp.com",
    databaseURL: "https://my-project-363ab.firebaseio.com",
    projectId: "my-project-363ab",
    storageBucket: "",
    messagingSenderId: "918267709883"
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
