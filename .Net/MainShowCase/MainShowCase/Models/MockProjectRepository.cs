using System.Collections.Generic;
namespace MainShowCase.Models
{
    public class MockProjectRepository : IProjectRepository
    {
        public IEnumerable<Project> AllProjects =>
        new List<Project>
        {
        new Project{PeojectId = 1, Name = "Unknown", Description = "Unknown", ImageUrl="https://www.codecademy.com/resources/blog/content/images/2021/07/10-coding-projects-for-beginners.png", ProjectUrl="https://github.com/SERUSEcode?tab=repositories"}
        };
    }
}