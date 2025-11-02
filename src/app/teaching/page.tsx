'use client';

import { Box, Collapse, Container, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

import baseStyle from '../page.module.css';
import style from './page.module.css';

import { TeachingBelief, SchoolCourses, Course } from './types';
import { PHILOSOPHY, TEACHING_BELIEFS, COURSES } from './teachingText';

export default function Teaching() {
    return (
        <Box className={baseStyle.main}>
            <Container className={style.content}>
                <Typography variant="h5">Teaching Philosophy</Typography>
                <Typography variant="body1">{PHILOSOPHY}</Typography>
                {TEACHING_BELIEFS.map((teachingBelief: TeachingBelief, index: number) => (
                    <BeliefItem key={index} belief={teachingBelief} />
                ))}
                <br />
                <hr />
                <br />
            </Container>
            <Container className={style.classes}>
                <Typography variant="h5">Courses Taught</Typography>
                <br />
                {COURSES.map((schoolCourses: SchoolCourses, index: number) => (
                    <div key={index}>
                        <Typography className={style.schoolName} variant="subtitle1">{schoolCourses.school}</Typography>
                        {schoolCourses.courses.map((course: Course, index: number) => (
                            <CourseItem key={index} course={course} />
                        ))}
                        <br />
                    </div>
                ))}
            </Container>
        </Box>
    );
}

function BeliefItem({belief}: {belief: TeachingBelief}) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setOpen(!open)} className={style.expandButton}>
                {open ? <ExpandLess /> : <ExpandMore />}
                <Typography variant="subtitle1" fontWeight='bold'>{belief.title}</Typography>
            </div>
            <Collapse in={open}>
                <div className={style.beliefContainer}>
                    <Typography align="justify" variant="body1">{belief.description}</Typography>
                </div>
            </Collapse>
        </div>
    );
}

function CourseItem({course}: {course: Course}) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setOpen(!open)} className={style.expandButton}>
                {open ? <ExpandLess /> : <ExpandMore />}
                <Typography variant="subtitle2" fontWeight="bold">{course.title}</Typography>
            </div>
            <Collapse in={open}>
                <div className={style.beliefContainer}>
                    {course.sections.map((section: string, index: number) => (
                        <Typography key={index} variant="body1">{section}</Typography>
                    ))}
                    <br />
                    {course.feedbacks ? course.feedbacks?.map((feedback: string, index: number) => (
                        <Typography key={index} className={style.feedback} variant="body1">{feedback}</Typography>
                    )) : null}
                    <br />
                </div>
            </Collapse>
        </div>
    );
}
