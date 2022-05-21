import styleC from 'styled-components';

export const Box = styleC.a`
    display: flex;
    padding-bottom: 30px;
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
    overflow: auto;
    border-radius: 25px;
    transition: opacity 0.2s 0.2s;
    cursor: pointer;
    :hover {
        transition-delay: .1s; /* delays for 1 second */
        -webkit-transition-delay: .1s;
        opacity: 1.5;
      } 
`;

export const Margin = styleC.div`
    margin-bottom: 80px;
`;

export const Title = styleC.b`
    overflow: auto;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 30px;
    
`;

export const Desc = styleC.p`
    font-weight: normal;
    font-size: 25px;
    font-family: "Lucida Console", "Courier New", monospace;
`;


