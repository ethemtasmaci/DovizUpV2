import React from 'react'
import { Linking } from 'react-native';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

const BionlukSvg = () => {
    return (
        <Svg version="1.0" width={22} height={22} viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet">

            <G transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                <Path d="M45 298 c-12 -41 -43 -241 -39 -253 8 -20 69 -38 103 -30 44 9 71 45
                                            78 103 7 65 -5 82 -59 82 l-40 0 7 55 c6 54 6 55 -20 55 -14 0 -27 -6 -30 -12z
                                            m69 -144 c35 -13 9 -94 -30 -94 -18 0 -20 70 -2 88 14 14 12 14 32 6z"></Path>
                <Path d="M263 303 c-7 -2 -13 -18 -13 -34 0 -24 4 -29 25 -29 31 0 52 34 34
                                            56 -12 14 -24 16 -46 7z"></Path>
                <Path d="M227 194 c-11 -12 -8 -42 5 -46 10 -4 10 -19 2 -66 l-10 -62 28 0
                                            c33 0 41 22 42 115 1 60 1 60 -29 63 -17 2 -34 0 -38 -4z"></Path>
            </G>
        </Svg>
    )
}

export default BionlukSvg