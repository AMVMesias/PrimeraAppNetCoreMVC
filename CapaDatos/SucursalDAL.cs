using CapaEntidad;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class SucursalDAL : BaseDAL
    {
        public List<SucursalCLS> listarSucursales()
        {
            return EjecutarListado("uspListarSucursal",
                drd => new SucursalCLS
                {
                    IIDSUCURSAL = drd.GetInt32(0),
                    NOMBRE = drd.GetString(1),
                    DIRECCION = drd.GetString(2)
                });
        }

        public List<SucursalCLS> filtrarSucursal(string nombresucursal, string nombreDireccion)
        {
            var parametros = new[]
            {
                new SqlParameter("@nombresucursal", nombresucursal),
                new SqlParameter("@direccion", nombreDireccion)

            };

            return EjecutarListado("uspFiltrarSucursal",
                drd => new SucursalCLS
                {
                    IIDSUCURSAL = drd.GetInt32(0),
                    NOMBRE = drd.GetString(1),
                    DIRECCION = drd.GetString(2)
                },
                parametros);
        }


        public int GuardarDatosSucursal(SucursalCLS objSucursal)
        {
            string sqlCommand = "INSERT INTO Sucursal(NOMBRE, DIRECCION, BHABILITADO) VALUES(@nombre, @direccion, 1)";

            SqlParameter[] parametros = new SqlParameter[]
            {
                new SqlParameter("@nombre", objSucursal.NOMBRE),
                new SqlParameter("@direccion", objSucursal.DIRECCION)
            };

            return EjecutarComandoSQL(sqlCommand, parametros);
        }
    }
}