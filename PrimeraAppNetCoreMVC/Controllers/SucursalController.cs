using CapaNegocio;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace PrimeraAppNetCoreMVC.Controllers
{
    public class SucursalController : Controller
    {
        private SucursalBL sucursalBL = new SucursalBL(); // Declarar e inicializar la instancia de SucursalBL

        public JsonResult listarSucursales()
        {
            var listaSucursales = sucursalBL.ListarSucursales();
            return Json(listaSucursales);
        }

        public JsonResult filtrarSucursal(string nombresucursal, string nombreDireccion) // Agregar el método filtrarSucursal
        {
            List<SucursalCLS> lista = sucursalBL.filtrarSucursal(nombresucursal, nombreDireccion); // Pasar el parámetro nombresucursal
            return Json(lista);
        }

        public IActionResult Detalle()
        {
            return View();
        }
    }
}

