using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace file_upload_dotnetcore.Controllers
{
    /// <summary>
    /// https://docs.microsoft.com/en-us/aspnet/core/mvc/models/file-uploads?view=aspnetcore-3.0
    /// https://stackoverflow.com/questions/38144194/iformfile-is-always-empty-in-asp-net-core-webapi
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Index(List<IFormFile> file)
        {
            long size = file.Sum(f => f.Length);
            string filePath = null;
            foreach (var formFile in file)
            {
                if (formFile.Length > 0)
                {
                    filePath = Path.GetTempFileName();

                    using (var stream = System.IO.File.Create(filePath))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
            }

            // Process uploaded files
            // Don't rely on or trust the FileName property without validation.

            return Ok(new
            {
                count = file.Count,
                size,
                filePath
            });
        }

    }
}