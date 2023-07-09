interface CharSVGProps {
    src: string;
    size: number;
  }
  
  const CharSVG: React.FC<CharSVGProps> = ({ src, size }) => {
    return <img src={src} alt={src} width={size} height={size} />;
  };

  export default CharSVG;