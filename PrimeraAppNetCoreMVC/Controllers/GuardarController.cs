using CapaEntidad;
using Microsoft.AspNetCore.Mvc;

public class GuardarController : Controller
{
    private GuardarBL guardarBL = new GuardarBL();

    [HttpPost]
    public IActionResult GuardarSucursal([FromBody] SucursalCLS sucursal)
    {
        try
        {
            guardarBL.GuardarSucursal(sucursal);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    public IActionResult Index()
    {
        return View();
    }
}

