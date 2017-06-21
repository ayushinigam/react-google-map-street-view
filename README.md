
# react-google-map-street-view

This is a simple react component for google-maps street view. The component uses google maps api for fetching the street view.

In case, street view does not exist for the given address the component displays the location on google map.

![](https://github.com/ayushinigam/react-google-map-street-view/blob/master/demo/demo.gif?raw=true)


### Installing

```
npm install react-google-map-street-view
```

### Usage

```javascript
<StreetView address="Address goes here" APIkey="google maps api key" streetView zoomLevel={15}/>
```

### Props

* APIkey (string, required) : Google-maps api key
* address (string, required) : Address for street view
* zip (number) : Zip code for address (can be included in address field itself)
* streetView (bool) : true for street-view and false for map-view
* zoomLevel (number) : zoom level for map view
* streetViewZoom (number) : zoom level for street view
* defaultText (string) : Default message
* errorText (string) : Error message
* mapStyle (object) : Style object for map container
* textStyle (object) : Style object for default text message
