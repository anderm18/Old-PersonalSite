import styleC from 'styled-components';

export const Name = styleC.b`
    display: flex;
    position: absolute;
    font-size: 45px;
    justify-content:left;
    right: 100px;
    left: 1000px;
    top: 35%;
    font-family: "Lucida Console", "Courier New", monospace;
    
`;

export const backLoop = styleC.div`
    height: 100%;
    width: 100%;
    float: left;
    top: 0;
    padding: none;
    position: fixed;
    
`;

export const fixOrder = styleC.div`
    z-index: -1;
`;

export const MainDescFirst = styleC.p`
    display: flex;
    position: absolute;
    font-size: 35px;
    justify-content: left;
    right: 100px;
    left: 1000px;
    min-width: 100px;
    top: 55%;
    font-family: "Lucida Console", "Courier New", monospace; 
`;

export const MainDescSecond = styleC.p`
    display: flex;
    position: relative;
    font-size: 35px;
    justify-content: left;
    right: 100px;
    left: 900px;
    top: 400px;
    font-family: "Lucida Console", "Courier New", monospace;
`;
