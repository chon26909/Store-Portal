import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadingStyle>
            <div className='loadingio-spinner-spin-hm5li7b83zg'>
                <div className='ldio-6mpcis3xaa5'>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </LoadingStyle>
    );
};

const LoadingStyle = styled.div`
    @keyframes ldio-6mpcis3xaa5 {
        0% {
            opacity: 1;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1.76, 1.76);
        }
        100% {
            opacity: 0;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1, 1);
        }
    }
    .ldio-6mpcis3xaa5 div > div {
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--primary-color);
        animation: ldio-6mpcis3xaa5 1s linear infinite;
    }
    .ldio-6mpcis3xaa5 div:nth-child(1) > div {
        left: 144px;
        top: 86px;
        animation-delay: -0.8571428571428571s;
    }
    .ldio-6mpcis3xaa5 > div:nth-child(1) {
        transform: rotate(0deg);
        transform-origin: 158px 100px;
    }
    .ldio-6mpcis3xaa5 div:nth-child(2) > div {
        left: 122px;
        top: 131px;
        animation-delay: -0.7142857142857143s;
    }
    .ldio-6mpcis3xaa5 > div:nth-child(2) {
        transform: rotate(51.42857142857143deg);
        transform-origin: 136px 145px;
    }
    .ldio-6mpcis3xaa5 div:nth-child(3) > div {
        left: 73px;
        top: 143px;
        animation-delay: -0.5714285714285714s;
    }
    .ldio-6mpcis3xaa5 > div:nth-child(3) {
        transform: rotate(102.85714285714286deg);
        transform-origin: 87px 157px;
    }
    .ldio-6mpcis3xaa5 div:nth-child(4) > div {
        left: 34px;
        top: 111px;
        animation-delay: -0.42857142857142855s;
    }
    .ldio-6mpcis3xaa5 > div:nth-child(4) {
        transform: rotate(154.28571428571428deg);
        transform-origin: 48px 125px;
    }
    .ldio-6mpcis3xaa5 div:nth-child(5) > div {
        left: 34px;
        top: 61px;
        animation-delay: -0.2857142857142857s;
    }
    .ldio-6mpcis3xaa5 > div:nth-child(5) {
        transform: rotate(205.71428571428572deg);
        transform-origin: 48px 75px;
    }
    .ldio-6mpcis3xaa5 div:nth-child(6) > div {
        left: 73px;
        top: 29px;
        animation-delay: -0.14285714285714285s;
    }
    .ldio-6mpcis3xaa5 > div:nth-child(6) {
        transform: rotate(257.14285714285717deg);
        transform-origin: 87px 43px;
    }
    .ldio-6mpcis3xaa5 div:nth-child(7) > div {
        left: 122px;
        top: 41px;
        animation-delay: 0s;
    }
    .ldio-6mpcis3xaa5 > div:nth-child(7) {
        transform: rotate(308.57142857142856deg);
        transform-origin: 136px 55px;
    }
    .loadingio-spinner-spin-hm5li7b83zg {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
        background: none;
    }
    .ldio-6mpcis3xaa5 {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }
`;

export default Loading;
