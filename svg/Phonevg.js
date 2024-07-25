import React from 'react'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

const Phonevg = () => {
    return (
        <Svg width="25" style={{ marginTop: 22, marginLeft: -18 }} height="25" viewBox="0 0 34 34" fill="none">
            <G clip-path="url(#clip0_264_776)">
                <Path d="M19.6384 2.82574C19.9058 1.71731 20.9547 0.984945 22.0868 1.111L27.2217 1.68048C28.2375 1.79613 29.0534 2.57387 29.2116 3.58105C31.386 17.4242 21.9246 30.4118 8.08143 32.5862C7.07425 32.7444 6.08382 32.2062 5.66231 31.2748L3.54597 26.5617C3.07891 25.5227 3.45444 24.2999 4.42752 23.7055L9.4476 20.6236C10.2999 20.0999 11.3987 20.1967 12.1402 20.8658L14.8341 23.2692C18.4806 20.7872 21.1691 17.0968 22.4136 12.865L19.3009 11.0433C18.4359 10.537 18.0076 9.52636 18.2449 8.55453L19.6393 2.83134L19.6384 2.82574Z" fill="#EEEEEE" />
            </G>
            <Defs>
                <ClipPath id="clip0_264_776">
                    <Rect width="29" height="29" fill="white" transform="matrix(-0.987888 0.155171 0.155171 0.987888 28.6489 0)" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Phonevg