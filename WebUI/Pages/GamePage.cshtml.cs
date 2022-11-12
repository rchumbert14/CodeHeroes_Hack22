using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Hack22.Pages
{
    public class GamePage : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public GamePage(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}