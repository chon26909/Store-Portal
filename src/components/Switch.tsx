import { FC } from 'react';
import styled from 'styled-components';

interface ISwitch {
    checked: boolean;
    onClick: () => void;
    className?: string;
}

const Switch: FC<ISwitch> = (props) => {
    return (
        <SwiichContainer>
            <div className='switch' onClick={() => props.onClick()}>
                <label />
                <input type='checkbox' title='switch' placeholder='switch' checked={props.checked} onChange={() => {}} />
                <span className='slider round' />
            </div>
        </SwiichContainer>
    );
};

const SwiichContainer = styled.div`
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 28px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 20px;
        width: 20px;
        left: 5px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: var(--primary-color);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--primary-color);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(30px);
        -ms-transform: translateX(30px);
        transform: translateX(30px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

export default Switch;
