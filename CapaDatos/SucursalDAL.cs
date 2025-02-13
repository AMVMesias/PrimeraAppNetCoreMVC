using CapaDatos;
using CapaEntidad;
using System.Data;

public class SucursalDAL
{
    public List<SucursalCLS> listarSucursales()
    {
        List<SucursalCLS> lista = new List<SucursalCLS>();
        try
        {
            using (var drd = DatabaseHelper.ExecuteReader("uspListarSucursal", CommandType.StoredProcedure))
            {
                if (drd != null)
                {
                    while (drd.Read())
                    {
                        lista.Add(new SucursalCLS
                        {
                            IIDSUCURSAL = drd.GetInt32(0),
                            NOMBRE = drd.GetString(1),
                            DIRECCION = drd.GetString(2)
                        });
                    }
                }
            }
        }
        catch (Exception)
        {
            lista = null;
        }
        return lista;
    }
}