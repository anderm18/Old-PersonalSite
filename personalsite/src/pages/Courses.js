import React from 'react';
import { decodeIcon } from './Projects';
import {Box, Title} from './ProjectStyle';
import courses from '../assets/courses.json';

const Courses = () => {
    return(
        <>

          {courses.map(crs =>(
            <Box>
              <Title>
                {crs.course}
                
                {crs.icons.map(ic => (<b>{decodeIcon(ic)}</b>))}
                

              </Title>
            </Box>
          ))};
        </>
    );
};

export default Courses;

