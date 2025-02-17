using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace PrimeraAppNetCoreMVC.Controllers
{
    public class TipoMedicamentoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Inicio()
        {
            return View();
        }

        public IActionResult SinMenu()
        {
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

        public List<TipoMedicamentoCLS> listarTipoMedicamento() // Cambiar el nombre del método
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.listarTipoMedicamento(); // Llamar al método listarTipoMedicamento
        }

        public string cadena()
        {
            // Inyección de dependencias (recomendado)
            var configuration = HttpContext.RequestServices.GetService<IConfiguration>();
            var cadenaDato = configuration.GetConnectionString("cn");
            return cadenaDato;
        }

        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombreTipoMedicamento) // Cambiar el nombre del método
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.filtrarTipoMedicamento(nombreTipoMedicamento); // Llamar al método filtrarTipoMedicamento
        }
    }
}
