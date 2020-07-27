using getting_dot_net_web_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace getting_dot_net_web_api.IServices
{
    public interface IStudentService
    {
        List<Student> GetAll();

        Student Get(int StudentId);

        List<Student> Save(Student Student);

        List<Student> Delete(int StudentId);
    }
}
