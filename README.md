## Getting Started

### Main Application 
```
$ npm install
$ yarn start
```

### Mock Server

A mock API is included. It uses [json-server](https://github.com/typicode/json-server) so ensure that is installed. Instructions are in the link. As of right now, **it is required** or else development will not work.

The mock data is in the `mock/` directory. Run this command from that directory or specify the location to the `campaign.json` file.

```
$ json-server --watch campaign.json --port 8000
```