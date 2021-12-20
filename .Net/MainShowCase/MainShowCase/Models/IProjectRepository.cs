using System.Collections.Generic;
namespace MainShowCase.Models
{
    public interface IProjectRepository
    {
        public IEnumerable<Project> AllProjects { get; }
    }
}
