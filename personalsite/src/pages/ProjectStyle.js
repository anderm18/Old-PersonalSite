import styleC from 'styled-components';

export const Box = styleC.a`
    display: flex;
    padding-bottom: 30px;
    min-width: 100px;
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 40px;
    margin-left: 100px;
    margin-right: 100px;
    background-color: #2493f7;
    opacity: .95;
    text-decoration: none;
    color: #000000;
    border-radius: 25px;
    cursor: pointer;
    :hover {
        transition-delay: .1s; /* delays for 1 second */
        -webkit-transition-delay: .1s;
        opacity: 1.5;
      }
`;

export const Title = styleC.b`
    position: absolute;
    padding-left: 10px;
    font-size: 30px;
    padding-below: 30px;
`;

export const Desc = styleC.p`
    
    margin-top: 40px;
    padding-left: 10px;
`;


