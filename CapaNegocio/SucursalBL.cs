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

        public List<SucursalCLS> filtrarSucursal(string nombresucursal, string nombreDireccion) // Aceptar el parámetro nombresucursal
        {
            return sucursalDAL.filtrarSucursal(nombresucursal, nombreDireccion); // Pasar el parámetro al método de SucursalDAL
        }
        public int GuardarSucursal(SucursalCLS objSucursal)
        {

            if (string.IsNullOrEmpty(objSucursal.NOMBRE))
            {
                return 0; 
            }

            return sucursalDAL.GuardarDatosSucursal(objSucursal);
        }
    }
}

