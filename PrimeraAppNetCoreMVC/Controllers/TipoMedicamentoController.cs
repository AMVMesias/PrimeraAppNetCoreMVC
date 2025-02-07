using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;

namespace PrimeraAppNetCoreMVC.Controllers
{
    public class TipoMedicamentoController : Controller
    {
        public IActionResult Index()
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            obj.listarMedicamento();
            return View();
        }
        public IActionResult Inicio()
        {
            return View();
        }
        public IActionResult SinMenu(){
            return View();
        }
        public string saludo()
        {
            return "Hola Mundo";
        }
        public int numeroEntero()
        {
            return 6;
        }
        public string saludoNombre(string nombre)
        {

            return "Bienvenido " + nombre;
        }
        public string saludoCompleto(string nombre, string apellido)
        {
            return "Bienvenido " + nombre + " " + apellido;

        }
        public List<TipoMedicamentoCLS> listarMedicamento()
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.listarMedicamento();
        }

    }
}
