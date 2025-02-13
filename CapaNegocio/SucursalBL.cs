using CapaDatos;
using CapaEntidad;
using System.Collections.Generic;

namespace CapaNegocio
{
    public class SucursalBL
    {
        private SucursalDAL sucursalDAL = new SucursalDAL();

        public List<SucursalCLS> ListarSucursales()
        {
            return sucursalDAL.listarSucursales();
        }
    }
}
