'use client';

import useStudents from '@/hooks/useStudents';
import useMutation from '@/hooks/useStudents';
import type StudentsInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';

const Students = (): React.ReactElement => {
  const { students, deleteStudentMutate } = useStudents();

const onDeleteHandler = (id: number) => {
  deleteStudentMutate(id);
  console.log(id);
  }
  return (
    <div className={styles.Students}>
      {students.map((student: StudentsInterface) => (
         <Student
          key={student.id}
          student={student}
          onDelete={onDeleteHandler}
        />
        
      ))}
      
    </div>
  );
};

export default Students;

/*'use client';

import useStudents from '@/hooks/useStudents';
import useMutation from '@/hooks/useStudents';
import type StudentsInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';

const Students = (): React.ReactElement => {
  const { students, deleteStudentMutate } = useStudents();

const onDeleteHandler = (id: number) => {
  deleteStudentMutate(id);
  console.log(id);
  }

  return (
    <div className={styles.Students}>
      {students.map((student: StudentsInterface) => (
        <Student
          key={student.id}
          student={student}
          onDelete={onDeleteHandler}
        />
      ))}
    </div>
  );
};

export default Students*/