﻿using getting_dot_net_web_api.IServices;
using getting_dot_net_web_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace getting_dot_net_web_api.Services
{
    public class StudentService : IStudentService
    {
        List<Student> _students = new List<Student>();

        public StudentService()
        {
            for (int i = 1; i <= 10; i++)
            {
                _students.Add(new Student()
                {
                    StudentId = i,
                    RollNumber = 10 + i,
                    Name = "Student -- " + i,
                    Age = 80 / i
                });
            }
        }

        public IList<Student> Delete(int StudentId)
        {
            throw new NotImplementedException();
        }

        public IList<Student> GetAll()
        {
            throw new NotImplementedException();
        }

        public IList<Student> Save(Student Student)
        {
            throw new NotImplementedException();
        }

        IList<Student> IStudentService.Delete(int StudentId)
        {
            _students.RemoveAll(x => x.StudentId == StudentId);
            return _students;
        }

        Student IStudentService.Get(int StudentId)
        {
            return _students.SingleOrDefault(x => x.StudentId == StudentId);            
        }

        IList<Student> IStudentService.GetAll()
        {
            return _students;
        }

        IList<Student> IStudentService.Save(Student Student)
        {
            _students.Add(Student);
            return _students;
        }
    }
}
