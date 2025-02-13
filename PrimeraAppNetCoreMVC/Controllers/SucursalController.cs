using CapaNegocio;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace PrimeraAppNetCoreMVC.Controllers
{
    public class SucursalController : Controller
    {

        public JsonResult listarSucursales()
        {
            SucursalBL obj = new SucursalBL();
            var listaSucursales = obj.ListarSucursales();
            return Json(listaSucursales);
        }
        public IActionResult Detalle()
        {
            return View();
        }
    }
}
