```
ng new angular-testing --routing
cd angular-testing
ng serve -o
```

```
ng test
```

```
ng g component home
```

```
ng g service services/users/users
```

```
npm install karma-spec-reporter --save-dev
```

Once that's finished, open src/karma.conf.js, add the new package to plugins, and update the progress value within reporters to spec.
