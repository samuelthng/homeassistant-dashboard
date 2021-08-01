# HomeAssistant React App

## Forked: Credits and Motivation

This is a fork of [william57m](https://github.com/william57m)'s [React based custom panel for Home Assistant](https://github.com/william57m/homeassistant-dashboard). 
Credits go to william57m for the original idea, his motivation can be found below in the next header.

I loved the idea of using React as a web component and wanted to improve on how it is mounted and how the Home Assistant props are being passed to the application.

The main goal of this fork is to optimise mounting the React app as a web component and minimise re-renders.
Design wise, do not expect much because I've got 0 creative skills. I will definitely not stick to william57m's design choices down the road.

Finally, this is a pet project and may die anytime. Please only use as a reference - at your own risk.

## Motivation

The goal of this project is to have a wall mounted tablet running a dashboard to control my home.

The goal is really to have one screen without any menu so I can have a global view of the more important thing in the home: alarm, lights, camera.


## Getting started

Install

```bash
npm run install
```

Run a development server

```
npm run start
```

Add the following entry to your `configuration.yaml` file:

```yaml
panel_custom:
  - name: react-panel
    sidebar_title: React Panel
    sidebar_icon: mdi:react
    url_path: react-panel
    module_url: http://<devIP>:<devPort>/main.js
    trust_external_script: true
    embed_iframe: false
    config:
      timeFormat: "h:mm aaa"
```

Restart Home Assistant.

## Deploy

To deploy it, you need to make a build

```bash
npm run build
```

This will generate a new build of the panel in the `dist` folder. Copy the content of this folder and place it in `<home assistant config>/www/react-panel`.

This will make it available from Home Assistant via the url `/local/react-panel/main.js`.

We then have to configure Home Assitant to use it:

```yaml
panel_custom:
  - name: react-panel
    sidebar_title: React Panel
    sidebar_icon: mdi:react
    url_path: react-panel
    module_url: /local/react-panel/main.js
    trust_external_script: true
    embed_iframe: false
    config:
      timeFormat: "h:mm aaa"
```
