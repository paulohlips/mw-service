import ICreateCourseDTO from '@modules/Courses/dtos/ICreateCoursesDTO';

export default interface ICreateDisciplineDTO {
  name: string;
  hours: number;
  course: string;
}
