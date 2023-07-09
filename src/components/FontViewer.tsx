import React, { Component } from 'react';
import CharSVG from './CharSVG';
type FontViewerProps = {
  size: number;
  division: number;
  text: string;
};

type FontViewerState = {
  charSVGs: string[];
};

class FontViewer extends Component<FontViewerProps, FontViewerState> {
  constructor(props: FontViewerProps) {
    super(props);
    this.state = {
      charSVGs: [],
    };
  }

  componentDidMount() {
    this.generateCharSVGs();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentDidUpdate(prevProps: FontViewerProps) {
    if (prevProps.text !== this.props.text || prevProps.division !== this.props.division) {
      this.generateCharSVGs();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.generateCharSVGs();
  };

  generateCharSVGs() {
    const { size, division, text } = this.props;
    const charSVGs: string[] = [];
    const numCharSVGs = Math.floor(window.innerWidth / (size / division));

    if (text.length === 0) {
      const files = require.context('../../public/font_svg/', true, /\.svg$/);
      const fileKeys = files.keys();
      const fileCount = fileKeys.length;
      for (let i = 0; i < numCharSVGs; i++) {
        const randomIndex = Math.floor(Math.random() * fileCount);
        const filename = fileKeys[randomIndex];
        const svgFile = `./font_svg/${filename}`;
        charSVGs.push(svgFile);
      }
    } else {
      for (let i = 0; i < numCharSVGs; i++) {
        const charIndex = i % text.length;
        const char = text[charIndex];
        const svgFile = `./font_svg/${char}_0.svg`;
        charSVGs.push(svgFile);
      }
    }

    this.setState({ charSVGs });
  }

  render() {
    const { size, division } = this.props;
    const { charSVGs } = this.state;

    return (
      <div className="font-viewer" style={{ display: 'inline', whiteSpace: 'nowrap' }}>
        {charSVGs.map((svgFile: string, index: number) => (
          <CharSVG key={index} src={svgFile} size={size / division} />
        ))}
      </div>
    );
  }
}

export default FontViewer;