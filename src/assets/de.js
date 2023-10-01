// eslint-disable-next-line no-unused-vars
import Svg, { Path } from 'react-native-svg';

export default ({ width = 30, height = 40 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 640 480">
      <Path fill="#ffce00" d="M0 320h640v160H0z" />
      <Path d="M0 0h640v160H0z" />
      <Path fill="#d00" d="M0 160h640v160H0z" />
    </Svg>
  );
};
