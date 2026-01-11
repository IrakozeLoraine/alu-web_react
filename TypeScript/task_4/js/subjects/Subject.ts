namespace Subjects {
  export class Subject {
    teacher: Teacher | null = null;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
