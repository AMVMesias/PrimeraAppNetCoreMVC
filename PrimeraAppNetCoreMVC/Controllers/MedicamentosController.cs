using Microsoft.AspNetCore.Mvc;

namespace PrimeraAppNetCoreMVC.Controllers
{
    public class MedicamentosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public string saludos()
        {
            return "Hola Mundo";
        }
        public int numeroEntero()
        {
            return 6;
        }
    }
}
