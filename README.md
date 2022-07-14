# react-duration-voice-recorder

This is a voice recorder with time duration.

## Installation

To install via [npm](https://www.npmjs.com/).

```bash
npm install react-duration-voice-recorder
```

## Usage

```javascript
import ReactDurationRecorder from 'react-duration-voice-recorder'

const MyComponent = () => {
  return (
    <ReactDurationRecorder
      getFile={(file) => console.log(file)}
      getUrl={(url) => console.log(url)}
      showPreview={true}
      timer={true}
      btnClass='your button classname'
      containerStyle={{
        width: '300px',
        border: '1px solid black',
        padding: '10px'
      }}
      duration={{
        hours: 0,
        minutes: 0,
        seconds: 30
      }}
    />
  )
}
```

## Dependencies

- React
- react-media-recorder
- react-icons

## Props

- **getFile** : (REQUIRED) requires function that accepts file on clicking upload button
- **getUrl** : (REQUIRED) requires a function that accepts the blog url
- **showPreview**: (OPTIONAL)(boolean) shows audio element for preview. default will be true
- **timer**: (OPTIONAL)(boolean) shows timer while recording. default will be true
- **btnClass**: (OPTIONAL)(string) No default styles provided. Add classNames here
- **containerStyle**: (OPTIONAL)(object). Outer container. Accepts styleObject.
- **duration**: (OPTIONAL) (object). requires objects with keys hours(int),minutes(int),seconds(int). default will be 30 seconds

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## 💰 You can help me by Donating

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/shittycoder)
