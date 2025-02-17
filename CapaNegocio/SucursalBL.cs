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

        public List<SucursalCLS> filtrarSucursal(string nombresucursal) // Aceptar el parámetro nombresucursal
        {
            return sucursalDAL.filtrarSucursal(nombresucursal); // Pasar el parámetro al método de SucursalDAL
        }
    }
}

