export interface CourseItem {
    successful: boolean,
    result: CourseResponce[]
}

export interface GetCourseItem {
    successful: boolean,
    result: CourseResponce
}

export interface CourseResponce {
    title: string,
    description: string,
    creationDate: Date,
    duration: number,
    authors: string[],
    id: string
}

export interface PostCourse {
    title: string,
    description: string,
    duration: number,
    authors: string[],
}