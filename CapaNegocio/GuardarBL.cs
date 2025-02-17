using CapaDatos;
using CapaEntidad;

public class GuardarBL
{
    private GuardarDAL guardarDAL = new GuardarDAL();

    public void GuardarSucursal(SucursalCLS sucursal)
    {
        guardarDAL.GuardarSucursal(sucursal);
    }
}
