# FireChat

Proyecto cuya finalidad es relizar un chat con AngularFire2 y Bootstrap 4, siguiendo uno de los módulos del curso Angular:De cero a experto... 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.


## Enlaces y recordatorios

https://github.com/angular/angularfire2
https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md


Hay que añadir los datos correctos en enviroment.ts 

```
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

En mi caso los quitaría de: ```https://console.firebase.google.com/project/firechat-mjrs/settings/general/```

En este proyecto se creo una Database de Cloud Firestore (En modo bloqueo), y dentro de esta una colección llamada chats. (Despues para hacer pruebas, se fue hasta el apartado de Reglas y se modificó el false por un true, que se quitará cuanto tengamos configurado el logeo de usuario)

---

Para poder autenticarse con usuario Google, se tuvo que activar en el proyecto de firebase, pulsando en Authentication > Pestaña "Método de inicio de sesión" ( en mi caso:  ``` https://console.firebase.google.com/project/firechat-mjrs/authentication/providers``` ), ahí vamos a Google y Habilitamos (puede ser que ahora haya que meter el gmail de mantenimiento).
Y luego: https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
