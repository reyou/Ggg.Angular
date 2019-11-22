```
# Create our application (using less as the style pre processor):
npx -p @angular/cli ng new taskbox --style less
cd taskbox

# Add Storybook:
npx -p @storybook/cli sb init
```

```
# Run the test runner (Karma) in a terminal (we will add Jest along the way):
npm run test

# Start the component explorer on port 6006:
npm run storybook

# Run the frontend app proper on port 4200:
npm start
```
