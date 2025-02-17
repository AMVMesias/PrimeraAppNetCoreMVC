using CapaDatos;
using CapaEntidad;
using System.Data;
using System.Data.SqlClient;

public class GuardarDAL
{
    public void GuardarSucursal(SucursalCLS sucursal)
    {
        try
        {
            using (SqlConnection conn = new SqlConnection(DatabaseHelper.GetConnectionString()))
            {
                using (SqlCommand cmd = new SqlCommand("uspGuardarSucursal", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@iidsucursal", sucursal.IIDSUCURSAL);
                    cmd.Parameters.AddWithValue("@nombre", sucursal.NOMBRE);
                    cmd.Parameters.AddWithValue("@direccion", sucursal.DIRECCION);


                    conn.Open();
                    cmd.ExecuteNonQuery();
                }
            }
        }
        catch (Exception ex)
        {
            // Registrar la excepción y el comando SQL
            Console.WriteLine("Error al ejecutar la stored procedure: " + ex.Message);
            throw;
        }
    }
}

