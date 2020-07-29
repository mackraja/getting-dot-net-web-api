using getting_dot_net_web_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace getting_dot_net_web_api.IServices
{
    public interface IStudentService
    {
        IList<Student> GetAll();

        Student Get(int StudentId);

        IList<Student> Save(Student Student);

        IList<Student> Delete(int StudentId);
    }
}
